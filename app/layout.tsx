import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Health Monitor",
    "one_liner": "An AI tool that continuously audits and monitors smart contracts health post-deployment.",
    "why_now": "With increasing hacks on DeFi platforms, real-time monitoring is essential for security.",
    "novel_mechanism": "Utilizes machine learning to assess transaction patterns and detect anomalies.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Agents"
    ],
    "edge_use_cases": [
      "Detecting irregular transaction spikes.",
      "Real-time alerts for potential vulnerabilities."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Real-time analytics dashboard",
        "Alert system integration",
        "Basic anomaly detection"
      ],
      "tools": [
        "React",
        "Firebase",
        "Twilio",
        "Node.js"
      ],
      "data_bootstrap": [
        "public audit reports",
        "transaction history datasets"
      ],
      "risk": [
        "False positives might panic clients",
        "Dependent on blockchain data availability"
      ],
      "mitigation": [
        "Implement tiered alert system",
        "Use historical data to calibrate models"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live monitoring demo in community events",
        "Show before/after impact on security."
      ],
      "channels": [
        "Telegram",
        "Discord",
        "Crypto forums"
      ],
      "pricing": {
        "free": "Basic monitoring for small contracts",
        "pro": "$49/month for advanced features",
        "business": "$199/month for enterprises"
      }
    },
    "moat": [
      "Early market entry",
      "Continuous data update for model training",
      "Integrations with popular blockchain explorers"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "While traditional auditing is static, this offers dynamic oversight, creating a unique market position."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}