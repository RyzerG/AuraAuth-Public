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
      { text: 'Documentation', link: '/guide/introduction' },
      { text: 'Releases', link: 'https://github.com/RyzerG/AuraAuth/releases' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Setup & Installation', link: '/guide/setup-installation' }
        ]
      },
      {
        text: 'User Guide',
        items: [
          { text: 'Managing Accounts', link: '/guide/managing-accounts' },
          { text: 'Biometric Security', link: '/guide/biometric-lock' },
          { text: 'Interface & Customization', link: '/guide/customization' },
          { text: 'Backup & Restore', link: '/guide/backup-restore' }
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Zero-Trust Security', link: '/guide/security' }
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