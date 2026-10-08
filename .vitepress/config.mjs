import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AuraAuth',
  description: 'Next-Gen 2FA Security Client Documentation',
  appearance: 'force-dark',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'AuraAuth',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/guide/getting-started' },
      { text: 'Releases', link: 'https://github.com/RyzerG/AuraAuth/releases' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction & Setup', link: '/guide/getting-started' },
          { text: 'Fancy Graphics Mode', link: '/guide/fancy-graphics' }
        ]
      },
      {
        text: 'Architecture & Security',
        items: [
          { text: 'Zero-Trust Security', link: '/guide/security' },
          { text: 'Encrypted Backups', link: '/guide/backup-restore' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RyzerG/AuraAuth' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Proprietary & Closed Source. All Rights Reserved.',
      copyright: 'Copyright © 2026 AuraAuth'
    }
  }
})