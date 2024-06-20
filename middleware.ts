import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

export function middleware(request:NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api/juejin')) {
        return NextResponse.rewrite(new URL('https://juejin.cn'))
    }
}

export const config = {
    matcher: '/api/:path*',
}
