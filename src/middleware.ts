// middleware.ts (in root, same level as package.json)

import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'], // Match all routes except static files
}
