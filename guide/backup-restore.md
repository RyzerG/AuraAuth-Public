# Encrypted Backup & Restore

AuraAuth uses AES-256 GCM authenticated encryption to create portable, password-protected `.aura` vault snapshots.

## Encryption Standards

| Layer | Standard |
| :--- | :--- |
| **Cipher** | AES/GCM/NoPadding (256-bit) |
| **Authentication Tag** | 128-bit integrity tag |
| **Key Derivation** | PBKDF2 with HmacSHA256 (65,536 iterations) |
| **Salt / IV** | 16-byte random salt, 12-byte initialization vector |

## Exporting a Backup

1. Open **Settings** and tap **Export Encrypted Backup (.aura)**.
2. Specify a strong encryption passphrase.
3. Save the resulting file locally or push it to Google Drive via Android's storage access framework.

## Restoring a Backup

1. Open **Settings** and select **Restore from Backup**.
2. Select your `.aura` archive.
3. Enter the passphrase to verify the authentication tag and populate your account directory.