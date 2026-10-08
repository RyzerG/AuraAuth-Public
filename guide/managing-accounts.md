# Managing Accounts

AuraAuth is designed to handle dozens of 2FA accounts cleanly. Here is how to populate and organize your vault.

## Adding a New Account

Tap the floating **`+`** button in the bottom right corner of the vault to open the Add Account dialog. You have two options:

### Option A: Scan QR Code (Recommended)
1. Tap **Scan QR Code**.
2. Grant camera permissions if prompted.
3. Point your camera at the 2FA QR code provided by the website (e.g., Google, GitHub, Discord). 
4. AuraAuth will instantly parse the URI, extract the secret, identify the issuer, and save it to your vault.

### Option B: Manual Entry
If you cannot scan a QR code, you can manually input the details:
* **Issuer**: The service name (e.g., `Microsoft`). *AuraAuth uses this to fetch the correct logo.*
* **Username**: Your email or handle (e.g., `user@email.com`).
* **Secret Key**: The alphanumeric Base32 string provided by the service.

## Using Your Codes

To use a generated code:
1. Tap anywhere on the account card.
2. The code will instantly be copied to your device's clipboard.
3. A green checkmark will appear over the timer to confirm the copy action.

## Organizing the Vault

### Reordering Accounts
1. Tap the **Reorder** icon (three stacked lines) in the top header.
2. The UI will tint to indicate Reorder Mode is active.
3. **Press, hold, and drag** any account to move it up or down in your list.
4. Tap the Reorder icon again to lock your layout.

### Deleting Accounts
1. Ensure **Reorder Mode** is active (the delete buttons are hidden by default to prevent accidental data loss).
2. Tap the red circular **Trash** icon on the card you wish to remove.
3. Confirm the deletion in the popup dialog. *Note: Deletions are permanent. Ensure you have disabled 2FA on the target website before deleting the code from AuraAuth.*