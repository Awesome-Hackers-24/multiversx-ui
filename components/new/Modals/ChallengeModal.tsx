'use client';

import React, { useState, useEffect, FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ChallengeModalProps {
  onClose?: () => void;
  onOpen?: () => void;
  challenge: { name: string; description: string; link: string };
}

export const ChallengeModal: FC<ChallengeModalProps> = ({
  onClose,
  onOpen,
  challenge,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [challengeComplete, setChallengeComplete] = useState(false);

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

  const handleClaimNFT = () => {
    console.log('Claiming NFT...'); // Placeholder for real claiming logic
    handleClose(); // Close the modal after claiming the NFT
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