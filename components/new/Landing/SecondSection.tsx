import React from 'react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';


const SecondSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="flex flex-col justify-between p-5">
              <CardHeader className="p-2"> {/* Minimized padding */}
                <CardTitle className="text-xl">Enhance your cognitive abilities.</CardTitle> {/* Slightly smaller font size */}
              </CardHeader>
              <CardContent className="p-2"> {/* Minimized padding */}
                <CardDescription className="text-sm">
                  Cognify helps you enhance your cognitive abilities through EEG technology and AI. Throughtly tested, we use the best methods to help you reach your goals.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between  p-5">
              <CardHeader className="p-2">
                <CardTitle className="text-xl">Have access to 1000+ neural datasets.</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription className="text-sm">
                  Our platform provides access to over 1000 neural datasets, playing an important role for researchers & developers.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between  p-5">
              <CardHeader className="p-2">
                <CardTitle className="text-xl">Complete challenges & earn tokens.</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription className="text-sm">
                  Our platform leverages advanced EEG technology to help users enhance their cognitive abilities, focusing on improving attention and focus.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between  p-5">
              <CardHeader className="p-2">
                <CardTitle className="text-xl">Your data, your choice.</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription className="text-sm">
                  All brainwave data is securely stored on the MultiversX blockchain. Own, trade & monetize your data as you see fit.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      );
}

export default SecondSection
