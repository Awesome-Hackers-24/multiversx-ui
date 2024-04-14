'use client';

import React, { useState, useEffect, FC , useCallback} from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  U32Value,
  ContractFunction,
  ContractCallPayloadBuilder,
  TokenTransfer,
} from '@multiversx/sdk-core';
import { Button } from '@/components/ui/button';
import { useTransaction } from '@useelven/core';

interface ChallengeModalProps {
  onClose?: () => void;
  onOpen?: () => void;
  challenge: { name: string; description: string; link: string };
  cb: (params: any) => void;
}

export const ChallengeModal: FC<ChallengeModalProps> = ({
  onClose,
  onOpen,
  challenge,
  cb
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [challengeComplete, setChallengeComplete] = useState(false);
  const { pending, triggerTx } = useTransaction({ cb });


  useEffect(() => {
    if (challenge) {
      handleOpen();
    }
  }, [challenge]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
    setChallengeComplete(false); // Reset the completion state when closing the modal
  };

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const handleCompleteChallenge = () => {
    setChallengeComplete(true);
  };

  const mintSmartContractAddress =
  process.env.NEXT_PUBLIC_MINT_SMART_CONTRACT_ADDRESS || '';
const mintFunctionName = process.env.NEXT_PUBLIC_MINT_FUNCTION_NAME || '';
const mintPaymentPerToken =
  process.env.NEXT_PUBLIC_MINT_PAYMENT_PER_TOKEN || '';

  const handleSendTx = useCallback(() => {
    // Prepare data payload for smart contract using MultiversX JS SDK core tools
    const data = new ContractCallPayloadBuilder()
      .setFunction(new ContractFunction("mint"))
      .setArgs([new U32Value(1)])
      .build();

    let gasLimit = 14000000;

    triggerTx({
      address: mintSmartContractAddress,
      gasLimit,
      value: TokenTransfer.egldFromAmount(mintPaymentPerToken),
      data,
    });
  }, [triggerTx]);

  const handleClaimNFT = () => {
    handleSendTx();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-xs sm:max-w-lg bg-white dark:bg-zinc-950 p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>{challengeComplete ? "Challenge Complete" : challenge.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 overflow-y-auto max-h-[calc(100vh-160px)] px-6 pb-12 pt-6">
          <p className="text-center">
            {challengeComplete ? `You have completed the ${challenge.name} challenge. Proceed to claim your brain data NFT.` : `Challenge started. Proceed to the newly opened tab to continue with '${challenge.name}'.`}
          </p>
          {challengeComplete ? (
            <Button variant="outline" onClick={handleClaimNFT} className='mt-5'>
              Claim NFT
            </Button>
          ) : <Button onClick={() => handleCompleteChallenge() } > 
              End Challenge
            </Button>}
        </div>
      </DialogContent>
    </Dialog>
  );
};