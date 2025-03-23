'use client'

import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo & Links */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold text-zinc-900 hover:text-black transition">
            {title}
          </Link>
          <Link href="/generate" className="text-zinc-700 hover:text-black font-medium transition">
            Generate
          </Link>
        </div>

        {/* Right: Auth Area */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
