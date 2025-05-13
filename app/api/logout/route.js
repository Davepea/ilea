import { signOut } from '@/auth'
// import { NextResponse } from 'next/server'

export async function POST() {
  return await signOut({ redirectTo: '/' })
}
