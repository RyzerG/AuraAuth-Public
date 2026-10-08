# Zero-Trust Architecture

AuraAuth is designed around a strict Zero-Trust, Zero-Cloud security philosophy. 

## Fully Offline Generation
Your 2FA secrets are cryptographic seed values. If a malicious actor obtains your seed, they can generate your 6-digit codes from anywhere in the world. 

To prevent this, **AuraAuth never transmits your secret keys.** 
* There is no "AuraAuth Cloud Account."
* There is no background syncing.
* Code generation occurs entirely on your local CPU using `javax.crypto.Mac` (HmacSHA1) mathematically combined with the current UNIX timestamp.

## Network Isolation
The Android `INTERNET` permission is utilized solely for one purpose: **Brand Intelligence**.

When you add an account (e.g., `github.com`), AuraAuth makes a standard HTTPS GET request to a public CDN (Logo.dev) to retrieve the official company icon. 
* No identifying information is sent.
* Your usernames and secret keys are stripped and kept securely on-device.
* If you have no internet connection, the app gracefully falls back to generating a local colored monogram (e.g., a "G" for GitHub).

## Local Storage
Vault data is stored internally within the application's sandboxed `SharedPreferences` environment. On unrooted, modern Android devices, this sandbox is inaccessible to other applications.