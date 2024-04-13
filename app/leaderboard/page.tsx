import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card'; // Ensure these are correctly imported

const LeaderboardPage = () => {
  // Dummy data - replace with data fetching logic
  const users = [
    { id: 1, name: 'Alice', nftsCount: 120 },
    { id: 2, name: 'Bob', nftsCount: 115 },
    { id: 3, name: 'Charlie', nftsCount: 110 },
    // Add more users as needed
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <Card className="max-w-4xl mx-auto px-4 py-12">
        <CardContent>
          <CardTitle>Leaderboard</CardTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-left mt-4">
              <thead className="text-gray-700">
                <tr>
                  <th className="pb-2 font-semibold">Rank</th>
                  <th className="pb-2 font-semibold">Name</th>
                  <th className="pb-2 font-semibold">NFTs Owned</th>
                </tr>
              </thead>
              <tbody>
                {users.sort((a, b) => b.nftsCount - a.nftsCount).map((user, index) => (
                  <tr key={user.id} className="border-b last:border-b-0">
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2">{user.name}</td>
                    <td className="py-2">{user.nftsCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderboardPage;
