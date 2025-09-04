"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, Globe2, Landmark, Plane, Send } from "lucide-react";
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { SignIn, useUser } from '@clerk/nextjs';
import { u } from 'motion/react-client';
import { Sign } from 'crypto';
import { useRouter } from 'next/navigation';

const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className='text-blue-400 h-5 w-5'/>
  },
  {
    title: "Inspire me where to go",
    icon: <Plane className='text-green-500 h-5 w-5'/>
  },
  {
    title: "Discover Hidden gems",
    icon: <Landmark className='text-blue-500 h-5 w-5'/>
  },
  {
    title: "Adventure Destination",
    icon: <Globe2 className='text-yellow-600 h-5 w-5'/>
  },

]

function Hero() {
  const { user } = useUser();
  const router = useRouter();
  const onSend = () => {
    // Handle send action
    if (!user) {
      router.push('/sign-in');
      return;
    }
    // Navigate to Create Trip Planner Web Page

    router.push('/create-new-trip');
  }

  return (
    <div className="mt-24 w-full flex justify-center">
        {/* Content */}
        <div className="max-w-3xl w-full text-center space-y-6">
          <h1 className="text-xl md:text-5xl font-bold">Hey, I am your personal <span className="text-primary">Trip Planner</span></h1>
          <p className="text-lg">Tell me what you want, and I'll handle the rest: Flights, Hotels, trip Planner - all in seconds</p>
          {/* Input Box */}
          <div className="border rounded-2xl p-4 relative">
            <Textarea placeholder="Create a trip for Parise from New York" className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"/>
            <Button size={'icon'} className="absolute bottom-6 right-6" onClick={() => onSend()}>
              <Send className='h-4 w-4'/>
            </Button>
          </div>
          {/* Suggestion list */}
          <div className='flex gap-5'>
             {suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-cente gap-2 p-2 border rounded-full cursor-pointer hover:bg-primary hover:text-white">
                {suggestion.icon}
                <h2 className="text-sm">{suggestion.title}</h2>
              </div>
             ))} 
          </div>

          <h2 className='my-7 mt-14 flex gap-2 text-center'>Not Sure where to start? <strong>See how it works</strong><ArrowDown/></h2>
          
          {/* Video Section */}
          <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
          thumbnailAlt="Dummy Video Thumbnail"
          />
          <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
          thumbnailAlt="Hero Video"
          />
        </div>
    </div>
  )
}

export default Hero