import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbSEO from "@/components/ui/breadcrumb-seo"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 狩猟免許例題集',
  description: '狩猟免許例題集アプリのプライバシーポリシー。利用者情報の取り扱いについて詳しく説明しています。',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbSEO items={[{ label: "プライバシーポリシー" }]} className="mb-8" />
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">プライバシーポリシー</h1>

          <p className="text-gray-600 mb-8">最終更新日: 2025年6月22日</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              本プライバシーポリシーは、Xemwoo（以下、「当方」といいます）が提供するスマートフォン向けアプリケーション「狩猟免許
              例題集アプリ」（以下、「本アプリ」といいます）における利用者情報の取り扱いについて説明するものです。本アプリをご利用いただく前に、本ポリシーをよくお読みいただき、内容にご同意いただいた上でご利用ください。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              これらの情報がどのように収集され、利用されるかについての詳細は、Googleのプライバシーポリシーをご確認ください。
            </p>
            <p className="mb-6">
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 underline"
              >
                Google ポリシーと規約 – プライバシーと利用規約
              </Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 取得した情報の利用目的</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本アプリが第三者サービスを通じて取得した情報は、以下の目的で利用されます。
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>利用者の興味関心に応じた広告を配信するため</li>
              <li>アプリのサービス向上および改善のための分析を行うため</li>
              <li>利用者からのお問い合わせに対応するため</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 第三者への情報提供</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当方は、以下の場合を除き、利用者の個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>利用者の同意がある場合</li>
              <li>法令に基づく開示が求められた場合</li>
              <li>
                上記の利用目的の達成に必要な範囲で、業務委託先に情報の取り扱いを委託する場合（この場合、委託先に対して必要かつ適切な監督を行います）
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. プライバシーポリシーの変更</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              当方は、法令の変更やサービスの改善に伴い、本プライバシーポリシーを改定することがあります。重要な変更がある場合は、本アプリ内での通知やウェブサイト上でお知らせします。変更後のプライバシーポリシーは、本ページに掲載された時点から効力を生じるものとします。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              本プライバシーポリシーに関するご質問やお問い合わせは、下記までご連絡ください。
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="mailto:xemwoo@gmail.com?subject=【お問い合わせ】狩猟免許%20例題集アプリ">
                  <Mail className="w-4 h-4 mr-2" />
                  xemwoo@gmail.com
                </Link>
              </Button>
            </div>

            <hr className="border-gray-300 my-8" />
            <p className="text-center text-gray-600">以上</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 狩猟免許例題集アプリ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
