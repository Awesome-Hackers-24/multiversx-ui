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

const Home: NextPage = () => {
  return (
    <>
      <Card className="mb-4">
        {/* <LandingPage /> */}
      </Card>
      <NFTGallery />

      <div>
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
      <Card className="mb-4">
        <CardContent className="mt-6">
          <span>You will also get a couple of other tools, like:</span>
          <ul>
            <li>- Authenticated component - wrapper to check the auth state</li>
            <li>- LoginComponent - component with 3 auth options</li>
            <li>
              - LoginModalButton component - ready to use modal with
              LoginComponent
            </li>
            <li>
              - You will get all tools from{' '}
              <a href="https://www.useElven.com" target="_blank">
                useElven
              </a>
            </li>
            <li>- Preserved app state after hard refresh of the page</li>
            <li>
              - And of course Shadcn UI, Tailwind CSS and NextJS framework
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="mt-6">
          <div>Better docs, and more improvements soon!</div>
          <div>
            Check the{' '}
            <a
              target="_blank"
              href="https://github.com/xdevguild"
              className="underline"
            >
              xDevGuild
            </a>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
