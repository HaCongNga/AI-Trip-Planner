"use client"
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import path from 'path';
import Link from 'next/link';
import { SignInButton, useUser } from '@clerk/nextjs';


const menuOptions = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact us', path: '/contact-us' }
]
function Header() {
    const { user } = useUser();

    return (
        <div className='flex items-center justify-between p-4'>
            {/* Logo */}
            <div className='flex gap-2 items-center'>
                <Image src={"/logo.svg"} alt='logo' width={30} height={30}/>
                <h2 className='text-2xl font-bold'>
                    AI Trip Planner
                </h2>    
            </div>
            {/* Menu Options*/}
            <div className='flex gap-8 items-center'>
                {menuOptions.map((menu, index) => (
                        <Link href={menu.path} key={index}>
                            <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
                        </Link>
                ))}
            </div>
            {/* Get Started Button */}
            {!user? <SignInButton mode='modal'>
                <Button>Get Started</Button>
            </SignInButton> :
            <Link href={`/create-new-trip`}>
                <Button>Create New Trip</Button>
            </Link>}
        </div>

    )
}

export default Header