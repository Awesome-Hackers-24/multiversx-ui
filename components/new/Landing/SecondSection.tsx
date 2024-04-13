import React from 'react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';


const SecondSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Enhance Focus</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Our platform leverages advanced EEG technology to help users enhance their cognitive abilities, focusing on improving attention and focus.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Brain Data Extraction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Utilize our NFTs to contribute to brain data extraction useful for training machine learning models, enhancing both academic research and practical applications.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
    <div className="grid grid-cols-1 gap-6">
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            We are dedicated to advancing human cognitive enhancement through interactive challenges that not only reward users with NFTs but also contribute to scientific research.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  </div>
  
  )
}

export default SecondSection
