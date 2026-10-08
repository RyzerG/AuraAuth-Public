<div align="center">

# AuraAuth
**Next-Gen 2FA Security. Sleek. Secure. Liquid Glass UI.**

[![Platform](https://img.shields.io/badge/Platform-Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://github.com/RyzerG/AuraAuth)
[![Language](https://img.shields.io/badge/Language-Java-007396?style=for-the-badge&logo=java&logoColor=white)](https://github.com/RyzerG/AuraAuth)
[![Status](https://img.shields.io/badge/Status-Closed_Source-FF5252?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RyzerG/AuraAuth)
[![Security](https://img.shields.io/badge/Security-Fully_Offline-64B5F6?style=for-the-badge&logo=shield&logoColor=white)](https://github.com/RyzerG/AuraAuth)

*A premium, high-performance two-factor authentication (2FA) client built for modern power users.* <br>
🔗 **Official Repository**: [github.com/RyzerG/AuraAuth](https://github.com/RyzerG/AuraAuth)

<!-- Placeholder for future app screenshots -->
<!-- <img src="docs/screenshot-list.png" width="250"/> &nbsp; <img src="docs/screenshot-grid.png" width="250"/> &nbsp; <img src="docs/screenshot-hide.png" width="250"/> -->

</div>

---

## 📑 Table of Contents
1. [About The Project](#-about-the-project)
2. [Premium Features](#-premium-features)
3. [UI & UX Highlights](#-ui--ux-highlights)
4. [Tech Stack](#-tech-stack)
5. [Security Model](#-security-model)
6. [Getting Started](#-getting-started)
7. [License](#-license)

---

## 🛡️ About The Project
AuraAuth redefines digital security by combining enterprise-grade local cryptography with an uncompromising visual aesthetic. Designed to replace outdated, clunky authenticator apps, AuraAuth provides a secure, fully offline vault for all your Time-based One-Time Passwords (TOTP) wrapped in a stunning "liquid glass" interface.

This repository serves as the official issue tracker and home for the **AuraAuth** application. **Please note that the source code is closed and proprietary.**

---

## ✨ Premium Features

* **Blazing Fast TOTP Engine**: Generates highly reliable, industry-standard 6-digit cryptographic codes instantly.
* **Smart Logo Resolution**: Automatically fetches crisp, official high-res brand logos for your accounts using a dual-layer CDN fallback system.
* **Privacy Shield Mode**: Instantly mask your 2FA codes with privacy dots (`••• •••`) with a single tap to prevent shoulder-surfing in public environments.
* **Grid & List Vault Configurations**: Seamlessly switch between a high-density List View and a rich, immersive Grid View.
* **Interactive Vault Management**: Enter Reorder Mode to drag-and-drop your accounts into custom layouts, or quickly delete outdated accounts with safety confirmation prompts.
* **Zero-Friction Setup**: Import accounts instantly via the high-speed integrated QR code scanner, or manually enter Base32 secret keys.

---

## 🎨 UI & UX Highlights
AuraAuth isn't just secure—it's designed to feel incredible.

* **Liquid Glassmorphism**: Cards feature translucent, frosted-glass effects floating over a deep midnight-blue space gradient.
* **60fps Fluidity**: A custom-engineered high-frequency render loop ensures timer rings decrease with buttery-smooth precision—no more choppy, ticking seconds.
* **Dynamic Color Warnings**: The UI intelligently adapts, fading from standard Blue to an alert Red when a code has less than 10 seconds remaining.
* **Tactile Feedback**: Tapping a code instantly copies it to your clipboard while seamlessly animating the lock icon into a vibrant checkmark confirmation.

---

## 🛠️ Tech Stack
AuraAuth is built natively for Android, emphasizing extreme performance and low overhead:

* **Core**: Android SDK / Java
* **Cryptography**: `javax.crypto.Mac` (HmacSHA1) & Apache Commons Codec (Base32)
* **Image Delivery Engine**: [Glide](https://github.com/bumptech/glide)
* **Brand Intelligence**: [Logo.dev](https://www.logo.dev/) API & Icon.Horse Fallbacks
* **Barcode Scanning**: [ZXing (Zebra Crossing)](https://github.com/journeyapps/zxing-android-embedded) via JourneyApps
* **Data Persistence**: Encrypted Native JSON / SharedPreferences
* **UI Components**: Material Components (`MaterialCardView`, `CircularProgressIndicator`, custom Vector Drawables)

---

## 🔒 Security Model
Your secrets belong to you. AuraAuth operates on a strict **Zero-Trust, Zero-Cloud** security architecture:

1. **100% Offline Generation**: Cryptographic code generation happens entirely on your local CPU.
2. **No Cloud Sync**: We do not upload, sync, or transmit your 2FA secret keys to any external servers, completely eliminating the risk of centralized data breaches.
3. **API Isolation**: The only outbound network requests made by the app are simple GET requests to retrieve public image assets (company logos) based solely on the domain name. No account metadata is ever attached.

---

## 🚀 Getting Started

Since AuraAuth is closed-source, you cannot build the project from this repository.

**Installation:**
1. Download the latest `.apk` release from the [Releases](https://github.com/RyzerG/AuraAuth/releases) tab.
2. Transfer the file to your Android device.
3. Open the file and allow installation from unknown sources if prompted.
4. Launch AuraAuth, tap the **+** button, and scan your first QR code!

**Bug Reports & Feature Requests:**
Please use the [Issues](https://github.com/RyzerG/AuraAuth/issues) tab to report any bugs or suggest new features.

---

## 📜 License
**Copyright © 2026 Rohan Singh / OverClocked Services. All Rights Reserved.**

This project and its source code are proprietary and closed-source. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit written permission.
