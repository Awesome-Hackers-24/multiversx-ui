"use client";
import type { NextPage } from 'next';
import { SimpleDemo } from '@/components/demo/simple-demo';
import { GetUserDataDemo } from '@/components/demo/get-user-data-demo';
import { GetLoggingInStateDemo } from '@/components/demo/get-logging-in-state-demo';
import { GetLoginInfoDemo } from '@/components/demo/get-login-info-demo';
import { CardContent, Card } from '@/components/ui/card';
import NFTCard from '@/components/new/NFTs/NFTCard';
import NFTGallery from '@/components/new/NFTs/NFTGallery';
import { Button } from '@/components/ui/button';
import LandingPage from '@/components/new/Landing';
import PageHeader from '@/components/new/Landing';
import CTA from '@/components/new/Landing/CTA';
import SecondSection from '@/components/new/Landing/SecondSection';

const Home: NextPage = () => {
  return (
    <>
      <Card className="mb-4">
        <div className="px-4 sm:px- py-20 items-center flex flex-col">
        <PageHeader  
          description='Cognify is a decentralized platform aiming to increase productivity and creativity using guided brain state modulation.'
          title="Your brain data, to the power of X."
          >
          Now in BETA
        </PageHeader>
        <CTA  />
        </div>
      </Card>
      <SecondSection />
      <NFTGallery title="Your NFTs"/>
      <NFTGallery title="Explore" subtitle="Brainscans taken by the community"/>

      <div className='mb-10'>
          <p>Unlock the power of your brain data.</p>
        <Button asChild variant="outline">
          <a href="/nft">Get Started</a>
        </Button>
      </div>
      <SimpleDemo />
      {/* <Card className="mb-4">
        <CardContent className="mt-6">
          <div className="mb-4">
            Now let us see what other valuable tools are included.
          </div>
          <div className="mb-4">
            You can get the data of currently logged-in users and network state.
            These are:
          </div>
          <ul>
            <li>- User data such as: address, nonce, balance.</li>
            <li>- User logging in state: pending, error, loggedIn.</li>
            <li>
              - Login info state: loginMethod, expires, loginToken, signature.
            </li>
          </ul>
        </CardContent>
      </Card> */}
      <div className="flex mb-4 gap-4 flex-wrap justify-center flex-col lg:flex-row">
        <GetUserDataDemo />
        <GetLoginInfoDemo />
        <GetLoggingInStateDemo />
      </div>
      
      
    </>
  );
};

export default Home;
