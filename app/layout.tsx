import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/structured-data'
import PerformanceOptimizer from '@/components/performance-optimizer'

export const metadata: Metadata = {
  title: '狩猟免許例題集 | スキマ時間で効率的に合格を目指そう',
  description: '狩猟免許取得を徹底サポート！網猟・わな猟・第一種・第二種銃猟に対応した500問以上の例題集アプリ。本番さながらの模擬試験機能で確実な合格を目指せます。',
  keywords: ['狩猟免許', '例題集', 'アプリ', '網猟', 'わな猟', '第一種銃猟', '第二種銃猟', '模擬試験', '鳥獣判別', '法令', '猟銃等講習会', '初心者講習', '技能試験', 'スキマ時間', '学習', '合格', '対策', '無料'],
  authors: [{ name: '狩猟免許例題集' }],
  creator: '狩猟免許例題集',
  publisher: '狩猟免許例題集',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hunter-test.xemwoo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://hunter-test.xemwoo.com',
    siteName: '狩猟免許例題集',
    title: '狩猟免許例題集 | スキマ時間で効率的に合格を目指そう',
    description: '狩猟免許取得を徹底サポート！網猟・わな猟・第一種・第二種銃猟に対応した500問以上の例題集アプリ。本番さながらの模擬試験機能で確実な合格を目指せます。',
    images: [
      {
        url: '/images/app-icon.png',
        width: 1200,
        height: 630,
        alt: '狩猟免許例題集アプリ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '狩猟免許例題集 | スキマ時間で効率的に合格を目指そう',
    description: '狩猟免許取得を徹底サポート！網猟・わな猟・第一種・第二種銃猟に対応した500問以上の例題集アプリ。',
    images: ['/images/app-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData />
      </head>
      <body>
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  )
}
