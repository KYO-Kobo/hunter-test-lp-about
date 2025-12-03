'use client'

export default function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "狩猟免許例題集",
    "description": "狩猟免許取得を徹底サポート！網猟・わな猟・第一種・第二種銃猟に対応した500問以上の例題集アプリ。",
    "url": "https://hunter-test.xemwoo.com",
    "inLanguage": "ja-JP",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://hunter-test.xemwoo.com?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "狩猟免許例題集",
    "description": "狩猟免許取得を支援する教育アプリを提供",
    "url": "https://hunter-test.xemwoo.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hunter-test.xemwoo.com/images/app-icon.png",
      "width": "512",
      "height": "512"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Japanese"
    }
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "狩猟免許例題集",
    "description": "狩猟免許取得のための例題集アプリ。網猟・わな猟・第一種・第二種銃猟に対応した500問以上の問題を収録。本番さながらの模擬試験機能付き。",
    "operatingSystem": ["iOS", "Android"],
    "applicationCategory": "EducationalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.xemwoo.hunter_test",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "100"
    },
    "featureList": [
      "500問以上の豊富な問題数",
      "全猟種対応（網猟・わな猟・第一種・第二種銃猟）",
      "本番形式の模擬試験",
      "カテゴリ別学習機能",
      "写真による鳥獣判別クイズ",
      "苦手分野の分析機能"
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://hunter-test.xemwoo.com"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}