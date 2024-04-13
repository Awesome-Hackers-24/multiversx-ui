import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card'; // Assuming these components are correctly imported

const ChallengesPage = () => {
  // List of challenges
  const challenges = [
    { name: 'Focus', description: 'Improve your concentration.', link: '/focus' },
    { name: 'Relax', description: 'Reduce stress and relax your mind.', link: '/relax' },
    { name: 'Brainstorm', description: 'Unlock creativity and problem-solving.', link: '/brainstorm' },
    { name: 'Extreme Focus', description: 'Maximize your focus under extreme conditions.', link: '/extreme-focus' }
  ];

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
              <Link key={challenge.name} href={challenge.link} passHref>
                <div target="_blank" className="block hover:shadow-lg transition-shadow rounded-lg p-4 bg-zinc-900 h-full flex flex-col justify-between">
                  <h2 className="text-xl font-semibold">{challenge.name}</h2>
                  <p className="text-gray-400 mt-1">{challenge.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChallengesPage;
