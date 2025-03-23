'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-zinc-900 hover:text-black transition">
            {title}
          </Link>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6 text-zinc-700" />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/generate">
            <Button variant="ghost">Generate</Button>
          </Link>
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

        {/* Mobile User Icon */}
        <div className="md:hidden">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-4 space-y-3">
          <Link href="/generate">
            <Button variant="ghost" className="w-full text-left">Generate</Button>
          </Link>
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="ghost" className="w-full text-left">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="w-full text-left">Sign Up</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full text-left">Dashboard</Button>
            </Link>
          </SignedIn>
        </div>
      )}
    </header>
  )
}

export default Header
