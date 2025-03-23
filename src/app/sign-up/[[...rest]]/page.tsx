'use client'

import { SignUp } from '@clerk/nextjs'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg border border-zinc-200">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-center text-zinc-900 mb-6">Create an Account</h1>
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" afterSignUpUrl="/dashboard" />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
