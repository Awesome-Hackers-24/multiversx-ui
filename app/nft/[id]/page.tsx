"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NFT from '../../../public/nft.png'; 


// Dummy data - replace with actual data fetching logic
const nftData = {
  id: 'nft-001',
  name: 'Relaxed Week',
  imageUrl: NFT,
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
          BRAIN-314acd-01
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 items-center">
          <Button  variant='outline' className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="https://sfesooveqwsgfzkosmxu.supabase.co/storage/v1/object/sign/storage/EEGdata_14_04_2024_11_03_59.csv?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9yYWdlL0VFR2RhdGFfMTRfMDRfMjAyNF8xMV8wM181OS5jc3YiLCJpYXQiOjE3MTMwNjg3MjEsImV4cCI6MTc0NDYwNDcyMX0.uB35E0tiopzaFZCmQ2d4oyt1ts4-d67ls0RHs7wxFHo&t=2024-04-14T04%3A25%3A21.201Z" target='_blank'>

            Download Raw Data
            </a>
          </Button>
          <Button  target="_blank" rel="noopener noreferrer" className='py-2 px-4 rounded'>
            <a href="https://devnet-explorer.multiversx.com/nfts/BRAIN-314acd-01" target='_blank'>
            See on Blockchain
            </a>
          </Button>
        </CardFooter>
      </Card>
      <Card className="max-w-4xl mx-auto mt-8">
        <CardContent className="cursor-pointer p-5" onClick={() => window.open(`https://explorer.multiversx.com/address/0x123...abc`, '_blank')}>
          <div className="text-lg font-semibold mb-2">
            Owned by
          </div>
          <div className="text-md text-gray-500">
            Address: <a className="t" onClick={(e) => {
              e.stopPropagation();  // Prevents the CardContent onClick from firing when clicking the link
              window.open(`https://explorer.multiversx.com/address/erd1v7dxzrmwlhg6etxautdnm6lm4tkqn46p7tt5lswpwfhsaqxzmp3sjvj22q`, '_blank');
            }}>erd1v7dxzrmwlhg6etxautdnm6lm4tkqn46p7tt5lswpwfhsaqxzmp3sjvj22q</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
  
};

export default NFTDetailPage;
