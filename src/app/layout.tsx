import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'
import Header from './components/Header';

export const metadata = {
  title: 'LegalWhiz | AI-Powered Legal Document Generator',
  description:
    'Generate NDAs, privacy policies, and legal docs in seconds. LegalWhiz is an AI-driven legal compliance tool for startups and small businesses.',
  keywords: [
    'legal document generator',
    'AI NDA generator',
    'startup legal compliance',
    'generate legal documents',
    'AI legal assistant',
    'privacy policy generator',
    'contract automation',
    'LegalWhiz',
  ],
  authors: [{ name: 'LegalWhiz' }],
  creator: 'LegalWhiz',
  openGraph: {
    title: 'LegalWhiz | AI-Powered Legal Document Generator',
    description:
      'Create custom legal documents in seconds. Save time, reduce cost, and stay compliant with LegalWhiz.',
    url: 'https://legalwhiz.vercel.app',
    siteName: 'LegalWhiz',
    images: [
      {
        url: 'https://legalwhiz.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LegalWhiz - AI Legal Assistant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LegalWhiz | AI-Powered Legal Document Generator',
    description:
      'Need a legal document fast? LegalWhiz helps startups auto-generate NDAs, privacy policies, and more.',
    site: '@legalwhiz_ai',
    creator: '@legalwhiz_ai',
    images: ['https://legalwhiz.vercel.app/og-image.png'],
  },
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