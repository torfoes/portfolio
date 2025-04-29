// app/middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED = ['en', 'es'] as const
const DEFAULT   = 'en'

/* ---------- helpers ---------- */

function parseAcceptLanguage(h: string | null): string[] {
    if (!h) return []
    return h.split(',')
        .map(p => {
            const [tag, q] = p.trim().split(';q=')
            return { tag: tag.slice(0, 2).toLowerCase(), q: Number(q ?? '1') }
        })
        .sort((a, b) => b.q - a.q)      // high-q first
        .map(({ tag }) => tag)
}

/** First supported locale or default */
function pickLocale(accepted: string[]): string {
    for (const lang of accepted) if (SUPPORTED.includes(lang as any)) return lang
    return DEFAULT
}

/* ---------- middleware ---------- */

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const seg = pathname.split('/')[1]        // first path segment
    // already /en or /es → continue
    if (SUPPORTED.includes(seg as any)) return NextResponse.next()

    // asset / api  (will also be skipped by matcher below, but double-guard)
    if (seg === '_next' || seg === 'api') return NextResponse.next()

    // choose locale and redirect
    const locale = pickLocale(parseAcceptLanguage(req.headers.get('accept-language')))
    const url = req.nextUrl.clone()
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`

    return NextResponse.redirect(url)   // 307 by default
}

/* ---------- only run on pages ---------- */
export const config = {
    matcher: [
        '/((?!api|_next|.*\\..*).*)',     // no api, static, or _next
    ],
}
