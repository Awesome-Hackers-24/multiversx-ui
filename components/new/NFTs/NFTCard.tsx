import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const NFTCard = ({ nft }: any) => {
  return (
    <Link href={`/nft/${nft.id}`} passHref>
      <div className="block h-full">
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex-shrink-0">
            <Image src={nft.imageUrl} alt={nft.name} width={400} height={250} objectFit="cover" className="rounded-t-lg" />
          </CardHeader>
          <CardContent className="flex-grow">
            <CardTitle>{nft.name}</CardTitle>
            <CardDescription className="line-clamp-3 overflow-hidden">{nft.description}</CardDescription>
          </CardContent>
          <CardFooter className="mt-auto">
            <span className="text-xs text-gray-500">Earned on {nft.earnedDate}</span>
          </CardFooter>
        </Card>
      </div>
    </Link>
  );
};

export default NFTCard;
