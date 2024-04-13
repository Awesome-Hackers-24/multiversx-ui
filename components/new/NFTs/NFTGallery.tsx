import React from 'react';
import NFTCard from './NFTCard'; // Assuming the NFTCard component is exported from this path

// Dummy array of NFT data for demonstration
const nftItems = [
  {
    id: 'nft-001',
    name: 'Ethereal Moonlight',
    imageUrl: '/path/to/nft-image1.jpg',
    description: 'A unique digital artwork capturing the serene beauty of moonlight.',
    earnedDate: '2023-04-12',
  },
  {
    id: 'nft-002',
    name: 'Celestial Overdrive',
    imageUrl: '/path/to/nft-image2.jpg',
    description: 'An explosive, vibrant expression of celestial phenomena.',
    earnedDate: '2023-05-15',
  },
  {
    id: 'nft-003',
    name: 'Abyssal Echo',
    imageUrl: '/path/to/nft-image3.jpg',
    description: 'Deep oceanic scenes portrayed in dark, moody blues.',
    earnedDate: '2023-06-20',
  },
  {
    id: 'nft-001',
    name: 'Ethereal Moonlight',
    imageUrl: '/path/to/nft-image1.jpg',
    description: 'A unique digital artwork capturing the serene beauty of moonlight.',
    earnedDate: '2023-04-12',
  },
  {
    id: 'nft-001',
    name: 'Ethereal Moonlight',
    imageUrl: '/path/to/nft-image1.jpg',
    description: 'A unique digital artwork capturing the serene beauty of moonlight.',
    earnedDate: '2023-04-12',
  },
  // Add more NFTs as needed
];

// NFTGallery component implementation
const NFTGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <p className='text-3xl mb-5'>Your NFTs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nftItems.map((nft) => (
          <NFTCard id={nft.id} key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
