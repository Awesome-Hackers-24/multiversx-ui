"use client";

import React, { useState } from 'react';
import NFTCard from './NFTCard'; // Assuming the NFTCard component is exported from this path
import NFT from '../../../public/nft.png'; 
import { Button } from '@/components/ui/button';

// Dummy array of NFT data for demonstration
const nftItems = [
  {
    id: 'nft-001',
    name: 'Relaxed Week',
    imageUrl: NFT ,
    description: 'A unique digital artwork capturing the serene beauty of moonlight.',
    earnedDate: '2023-04-12',
  },
  {
    id: 'nft-002',
    name: 'Relaxation Master #3',
    imageUrl: NFT ,
    description: 'Special NFT given for perfoming 3 relaxing challanges in a row.',
    earnedDate: '2023-05-15',
  },
  {
    id: 'nft-003',
    name: 'Focus Master #9',
    imageUrl: NFT ,
    description: 'Brainscan NFT for completing the Focus Master challenge.',
    earnedDate: '2023-06-20',
  },
  {
    id: 'nft-001',
    name: 'Brainstorner #21',
    imageUrl: NFT ,
    description: 'Brainscan NFT for completing the Brainstorming challenge.',
    earnedDate: '2023-04-12',
  },
  {
    id: 'nft-001',
    name: 'Ethereal Moonlight',
    imageUrl: NFT ,
    description: 'A unique digital artwork capturing the serene beauty of moonlight.',
    earnedDate: '2023-04-12',
  },
  // Add more NFTs as needed
];

// NFTGallery component implementation
const NFTGallery = ({ title, subtitle }: { title: string; subtitle: string; }) => {
    // State to control the visibility of NFT items
    const [showAll, setShowAll] = useState(false);
  
    // Determine the number of NFTs to display
    const displayedItems = showAll ? nftItems : nftItems.slice(0, 4);
  
    return (
      <div className="container mx-auto px-4 py-8">
        <p className='text-3xl'>{title}</p>
        <p className='text-sm text-gray-300 mt-2 mb-5'>{subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedItems.map((nft) => (
            <NFTCard id={nft.id} key={nft.id} nft={nft} />
          ))}
        </div>
        {nftItems.length > 4 && !showAll && (
          <div className="text-center mt-6">
            <Button 
              onClick={() => setShowAll(true)} 
              className="text-lg mt-4"
              variant='outline'>
              See More
            </Button>
          </div>
        )}
      </div>
    );
  };
  
  

export default NFTGallery;
