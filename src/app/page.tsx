'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1 }}
            className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-300 via-white to-transparent"
          ></motion.div>
        </div>

        <div className="container mx-auto relative z-10 px-6 py-32 text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-zinc-900"
          >
            LegalWhiz
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-600 mt-4 max-w-xl mx-auto"
          >
            AI-powered legal compliance platform for startups. Generate NDAs, privacy policies, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Link href="/generate">
              <Button className="px-6 py-3 text-lg">Get Started</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="px-6 py-3 text-lg">
                View Dashboard
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12">Why Choose LegalWhiz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">AI-Powered Generation</h3>
              <p className="text-zinc-600">Generate contracts and policies with context-aware prompts.</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Secure & Compliant</h3>
              <p className="text-zinc-600">All documents are generated over secure APIs and remain confidential.</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Startup-Ready</h3>
              <p className="text-zinc-600">Everything you need to launch and scale while staying legally safe.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}