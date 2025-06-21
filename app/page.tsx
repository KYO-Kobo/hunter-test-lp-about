import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, BarChart3, Target, Smartphone, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HuntingLicenseLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/app-icon.png"
              alt="狩猟免許例題集アプリ"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <h1 className="font-bold text-lg text-gray-900">狩猟免許例題集</h1>
              <p className="text-sm text-gray-600">例題集アプリ</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/app-store-badge.svg" alt="App Storeでダウンロード" width={120} height={40} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/images/google-play-badge.png" alt="Google Playで手に入れよう" width={135} height={40} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">狩猟免許取得をサポート</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                スキマ時間で合格へ！
                <br />
                <span className="text-green-600">狩猟免許の例題集アプリ</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                豊富な問題数とリアルな模擬試験で、あなたの狩猟免許取得を徹底サポート。
                全猟種に対応した本格的な学習アプリです。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/app-store-badge.svg" alt="App Storeでダウンロード" width={160} height={53} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/google-play-badge.png" alt="Google Playで手に入れよう" width={180} height={53} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/knowledge-categories.png"
                  alt="知識問題画面"
                  width={200}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <Image
                  src="/images/results-screen.png"
                  alt="テスト結果画面"
                  width={200}
                  height={400}
                  className="rounded-2xl shadow-2xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">アプリの特長</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">効率的な学習で確実な合格を目指せる3つの特長</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">圧倒的な問題数と網羅性</h3>
                <p className="text-gray-600">
                  全猟種（網猟、わな猟、第一種・第二種銃猟）に対応。法令から鳥獣判別まで、500問以上の豊富な問題を収録。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">本番さながらの模擬試験</h3>
                <p className="text-gray-600">
                  実際の試験と同じ90分・30問の形式で、本番さながらの模擬テストが何度でも受けられる。自分の実力を正確に把握しよう。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">苦手分野を徹底攻略</h3>
                <p className="text-gray-600">
                  カテゴリ毎の正答率を自動で記録。自分の苦手な分野が一目でわかり、効率的な復習が可能です。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Functionality Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">主な機能紹介</h2>
            <p className="text-xl text-gray-600">狩猟免許取得に必要な機能を完備</p>
          </div>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">① 4つの免許種別に対応</Badge>
                <h3 className="text-2xl font-bold text-gray-900">全ての狩猟免許に対応</h3>
                <p className="text-gray-600 text-lg">
                  「網猟」「わな猟」「第一種銃猟」「第二種銃猟」の全ての知識問題に対応しています。
                  あなたが取得したい免許に合わせて効率的に学習できます。
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/knowledge-categories.png"
                  alt="免許種別選択画面"
                  width={250}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center lg:order-first">
                <Image
                  src="/images/category-detail.png"
                  alt="カテゴリ別学習画面"
                  width={250}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">② カテゴリ別学習</Badge>
                <h3 className="text-2xl font-bold text-gray-900">効率的なカテゴリ別学習</h3>
                <p className="text-gray-600 text-lg">
                  法令・猟具・鳥獣・保護管理など、カテゴリ別に集中して学習できます。 苦手分野を重点的に攻略しましょう。
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">③ 技能試験対策</Badge>
                <h3 className="text-2xl font-bold text-gray-900">写真で覚える鳥獣判別</h3>
                <p className="text-gray-600 text-lg">
                  写真を使った鳥獣判別クイズで、技能試験対策も万全。
                  狩猟鳥獣と非狩猟鳥獣をしっかり見分けられるようになろう。
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/bird-quiz.png"
                  alt="鳥獣判別クイズ画面"
                  width={250}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center lg:order-first">
                <Image
                  src="/images/results-screen.png"
                  alt="ランダムテスト結果画面"
                  width={250}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">④ 30問ランダムテスト</Badge>
                <h3 className="text-2xl font-bold text-gray-900">本番形式の模擬試験</h3>
                <p className="text-gray-600 text-lg">
                  全範囲からランダムに30問が出題される模擬テスト機能。
                  時間配分の練習にも最適で、本番への準備が整います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">こんな方におすすめ</h2>
            <p className="text-xl text-gray-600">様々なシーンで活用できる学習アプリ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-0 shadow-lg bg-white">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">移動時間を活用</h3>
                <p className="text-sm text-gray-600">通勤・通学の移動時間や、ちょっとした休憩時間に</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg bg-white">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">講習会の予習復習</h3>
                <p className="text-sm text-gray-600">猟銃等講習会（初心者講習）の予習・復習をしたい方</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg bg-white">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">実力チェック</h3>
                <p className="text-sm text-gray-600">試験前に自分の実力を試したい方</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg bg-white">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">徹底的な対策</h3>
                <p className="text-sm text-gray-600">とにかくたくさんの問題を解いておきたい方</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              さあ、今すぐダウンロードして、
              <br />
              狩猟免許取得への第一歩を踏み出そう！
            </h2>
            <p className="text-xl text-green-100">無料でダウンロードして、すぐに学習を始められます</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/images/app-store-badge.svg" alt="App Storeでダウンロード" width={180} height={60} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/images/google-play-badge.png" alt="Google Playで手に入れよう" width={200} height={60} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/app-icon.png"
                  alt="狩猟免許例題集アプリ"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="font-bold">狩猟免許例題集</h3>
                  <p className="text-sm text-gray-400">例題集アプリ</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">狩猟免許取得を目指すすべての方を応援します。</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">アプリ情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    機能紹介
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    対応免許
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    問題数
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    使い方ガイド
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">法的情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    特定商取引法
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 狩猟免許例題集アプリ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
