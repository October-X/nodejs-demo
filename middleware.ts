import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

export function middleware(request:NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api/movie')) {
        return NextResponse.rewrite(new URL('http://yuanjin.tech:5005/api/movie'))
    }
}

export const config = {
    matcher: '/api/:path*',
}
