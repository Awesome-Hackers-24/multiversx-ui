"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

// Dummy data - replace with actual data fetching logic
const nftData = {
  id: 'nft-001',
  name: 'Ethereal Moonlight',
  imageUrl: '/path/to/nft-image.jpg',
  description: 'A unique digital artwork capturing the serene beauty of moonlight.',
  earnedDate: '2023-04-12',
  rawDataUrl: '/path/to/raw-data.zip' // URL to download raw data
};

const NFTDetailPage = () => {
  const router = useRouter();
  // const { id } = router.query; // Fetch the ID from the URL
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="w-full h-80 relative">
            <Image src={nftData.imageUrl} alt={nftData.name} layout="fill" objectFit="cover" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>{nftData.name}</CardTitle>
          <CardDescription>{nftData.description}</CardDescription>
          <div className="text-sm text-gray-500 my-4">
            Earned on {nftData.earnedDate}
          </div>
        </CardContent>
        <CardFooter>
          <a href={nftData.rawDataUrl} download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download Raw Data
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NFTDetailPage;
