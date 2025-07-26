import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '김서희 - 보안 포트폴리오',
  description: '보안의 다양한 분야를 즐기고 접하는 김서희입니다.',
  keywords: ['보안', '사이버보안', '정보보안', '클라우드', '포렌식', 'CTF', '시스템해킹', '포트폴리오'],
  authors: [{ name: '김서희' }],
  openGraph: {
    title: '김서희 - 보안 포트폴리오',
    description: '보안의 다양한 분야를 즐기고 접하는 김서희입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}