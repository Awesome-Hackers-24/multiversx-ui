"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
      <Card className="max-w-4xl mx-auto space-y-6">
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
          <div className="text-sm text-gray-700 my-2">
            <strong>Blockchain ID:</strong> BRAIN-j3f3kl-01
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 items-center">
          <Button href={nftData.rawDataUrl} variant='outline' download className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download Raw Data
          </Button>
          <Button href="https://explorer.multiversx.com" target="_blank" rel="noopener noreferrer" className='py-2 px-4 rounded'>
            See on Blockchain
          </Button>
        </CardFooter>
      </Card>
      <Card className="max-w-4xl mx-auto mt-8">
        <CardContent>
          <div className="text-lg font-semibold">
            Owned by
          </div>
          <div className="text-sm text-gray-500">
            Address: 0x123...abc
          </div>
        </CardContent>
      </Card>
    </div>
  );
  
};

export default NFTDetailPage;
