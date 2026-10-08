# Zero-Trust Security Architecture

AuraAuth operates entirely disconnected from cloud-hosted credential vaults.

## Cryptographic Guarantees

* **Local Token Generation**: Tokens calculate via `javax.crypto.Mac` (HmacSHA1) against local time intervals:

$$\text{Time Step} = \left\lfloor \frac{\text{System Time (seconds)}}{30} \right\rfloor$$

* **Network Isolation**: Account secrets are never broadcast over outbound sockets. The only network calls made are public GET requests fetching brand icons by hostname.
* **Memory Handling**: Secret strings are stored in app-private persistent memory and isolated from multi-app accessibility scopes.