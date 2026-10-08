# Biometric Security

AuraAuth employs a hardware-level biometric lock to ensure that even if your device is handed to someone else unlocked, your 2FA tokens remain entirely inaccessible.

## How It Works

Upon launching AuraAuth, the application interface remains completely hidden and suspended. The app invokes `androidx.biometric.BiometricPrompt`, which communicates directly with Android's secure hardware enclave.

* **Authentication Types**: AuraAuth accepts Class 3 (Strong) Biometrics, including 3D Face Unlock and Fingerprint sensors. 
* **Fallback Mechanisms**: If biometrics fail or are unavailable, the prompt will seamlessly fall back to your secure Device Credential (PIN, Password, or Pattern).

## Security Posture
The application's rendering engine and timer loops are halted until a successful `onAuthenticationSucceeded` callback is received from the OS. This guarantees that your 6-digit codes are never generated or drawn to the screen behind the lock prompt.