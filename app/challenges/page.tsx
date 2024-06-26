'use client';

import React, { useCallback, useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card'; // Assuming these components are correctly imported
import { ChallengeModal } from '@/components/new/Modals/ChallengeModal'; // Make sure the path to ChallengeModal is correct
import { TransactionCallbackParams } from '@useelven/core';

const ChallengesPage = () => {
  const [result, setResult] = useState<{ type: string; content: string }>();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string>();

  // List of challenges
  const challenges = [
    { name: 'Focus', description: 'Improve your concentration.', link: '/',  level: 3},
    { name: 'Relax', description: 'Reduce stress and relax your mind.', link: '/', level: 1 },
    { name: 'Brainstorm', description: 'Unlock creativity and problem-solving.', link: '/', level: 2 },
    { name: 'Extreme Focus', description: 'Maximize your focus under extreme conditions.', link: '/-focus', level: 4}
  ];

  // State to handle which challenge is currently active
  const [activeChallenge, setActiveChallenge] = useState(null);

  // Open modal with challenge details
  const handleChallengeClick = (challenge: any) => {
    setActiveChallenge(challenge);
    window.open(challenge.link, '_blank'); // Open the challenge link in a new tab
  };

  const handleTxCb = useCallback(
    ({ transaction, pending, error }: TransactionCallbackParams) => {
      if (transaction) {
        setResult({ type: 'tx', content: transaction.getHash().hex() });
        setPending(false);
        setError(undefined);
      }
      if (pending) {
        setPending(true);
        setError(undefined);
        setResult(undefined);
      }
      if (error) {
        setError(error);
        setPending(false);
        setResult(undefined);
      }
    },
    []
  );

  return (
    <div className="flex justify-center items-start pt-12 min-h-screen">
      <Card className="w-full max-w-4xl p-8 space-y-6">
        <div className='mb-6'>
          <CardTitle>Choose Your Challenge</CardTitle>
          <p className="text-gray-400 mt-2">Select a state to begin enhancing your brain's performance.</p>
        </div>
        <CardContent >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge) => (
              <div key={challenge.name} className="block hover:shadow-lg transition-shadow rounded-lg p-4 bg-zinc-900 h-full flex flex-col justify-between cursor-pointer"
                   onClick={() => handleChallengeClick(challenge)}>
                <h2 className="text-xl font-semibold text-white">{challenge.name}</h2>
                <p className="text-gray-400 mt-1">{challenge.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {activeChallenge && (
        <ChallengeModal 
          onOpen={() => console.log(`${activeChallenge.name} challenge started.`)}
          onClose={() => setActiveChallenge(null)}
          challenge={activeChallenge} // Passing challenge data to modal
          cb={handleTxCb} // Passing transaction callback to modal
        />
      )}
    </div>
  );
};

export default ChallengesPage;
