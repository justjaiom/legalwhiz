import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'
import Header from './components/Header';

export const metadata = {
  title: 'LegalWhiz',
  description: 'AI-powered compliance platform for startups',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header title="LegalWhiz" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});