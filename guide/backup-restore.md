# Backup & Restore

To protect against device loss or hardware failure, AuraAuth features an offline, encrypted backup utility. Backups are generated as `.aura` files, which you can store locally, put on a USB drive, or upload to a cloud provider.

## Exporting a Vault
1. Tap the **Settings** gear icon.
2. Select **Export Encrypted Backup (.aura)**.
3. You will be prompted to create an Encryption Password. **Make it strong, and do not forget it. There is no password recovery mechanism.**
4. Choose a destination on your device to save the file.

## Restoring a Vault
1. Tap the **Settings** gear icon.
2. Select **Restore from Backup**.
3. Locate your previously saved `.aura` file.
4. Enter the exact password used to encrypt the file.
5. If successful, your vault will instantly populate with your saved accounts.

## Cryptographic Standards
AuraAuth does not use simple obfuscation. Your `.aura` files are heavily encrypted using modern cryptographic standards:

* **Cipher**: AES/GCM/NoPadding (256-bit)
* **Authentication**: 128-bit GCM integrity tag to prevent file tampering.
* **Key Derivation**: PBKDF2 with HmacSHA256 (65,536 iterations).
* **Salting**: 16-byte cryptographically secure random salt alongside a 12-byte IV.