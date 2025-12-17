import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    const { supabaseResponse, user } = await updateSession(request)

    const { pathname } = request.nextUrl

    if (pathname === '/dashboard' && !user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (pathname === '/login' && user) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (pathname === '/register' && user) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return supabaseResponse
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
