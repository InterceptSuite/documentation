---
sidebar_position: 2
---

# Quick Start

Get InterceptSuite running in under 5 minutes.

## Step 1: Launch InterceptSuite

When you launch the InterceptSuite application, it automatically:

- **Opens SOCKS5 TCP proxy** on `127.0.0.1:4444`
- **Opens UDP relay port** on `127.0.0.1:4445`

You should see the application interface with these services running in the background.

## Step 2: Install CA Certificate (Required)

If you are installing InterceptSuite for the first time or updating to a new version, you **must install the CA certificate** into your system for TLS interception to work properly.

### Export Certificate from InterceptSuite

1. In the InterceptSuite application, navigate to the **"Proxy"** tab
2. Go to **"Settings"** tab within the Proxy section
3. In the **"Certificate Management"** section, click **"Export Certificate"**
4. Select **DER format** for the certificate export
5. Choose your preferred **export directory**
6. Save the certificate file

### Install Certificate by Platform

#### Windows Installation

1. **Locate the exported certificate** file (`.cer` or `.der`)
2. **Double-click** on the certificate file
3. Click **"Install Certificate..."**
4. Select **"Local Machine"** (not Current User)
5. Choose **"Place all certificates in the following store"**
6. Click **"Browse"** and select **"Trusted Root Certification Authorities"**
7. Click **"Next"** and **"Finish"**
8. Click **"Yes"** when prompted with security warning
9. You should see **"The import was successful"**

#### macOS Installation

1. **Locate the exported certificate** file
2. **Double-click** the certificate to open **Keychain Access**
3. The certificate will be added to **"login"** keychain
4. **Find the certificate** in Keychain Access
5. **Double-click** the certificate to open settings
6. Expand **"Trust"** section
7. Set **"Secure Sockets Layer (SSL)"** to **"Always Trust"**
8. **Close** the window and enter your **admin password**

#### Linux Installation

**For Ubuntu/Debian:**
```bash
# Copy certificate to system certificate directory
sudo cp certificate.der /usr/local/share/ca-certificates/interceptsuite.der

# Update certificate store
sudo update-ca-certificates
```

**For CentOS/RHEL/Fedora:**
```bash
# Copy certificate to system certificate directory
sudo cp certificate.der /etc/pki/ca-trust/source/anchors/interceptsuite.der

# Update certificate store
sudo update-ca-trust
```

**For Arch Linux:**
```bash
# Copy certificate to system certificate directory
sudo cp certificate.der /etc/ca-certificates/trust-source/anchors/interceptsuite.der

# Update certificate store
sudo trust extract-compat
```

## Step 3: Configure Your Application

InterceptSuite uses the **SOCKS5 protocol** because it supports both HTTP and non-HTTP traffic directly. Traditional HTTP proxies by default do not support non-HTTP traffic, which is why InterceptSuite focuses on SOCKS5 to provide comprehensive network interception capabilities.

### Windows Configuration

**Important**: Windows does not natively support SOCKS5 proxy in its system settings. If you navigate to Windows Settings → Network & Internet → Proxy, you'll only find HTTP proxy support.

**Recommended Solution**: Use **Proxifier** for system-wide SOCKS5 proxy support:

1. **Download Proxifier** from [https://www.proxifier.com/](https://www.proxifier.com/)
2. **Install and launch** Proxifier
3. Go to **Profile → Proxy Servers**
4. Click **"Add"** and configure:
   - **Address**: `127.0.0.1`
   - **Port**: `4444`
   - **Protocol**: SOCKS Version 5
5. Click **"OK"** to save
6. Go to **Profile → Proxification Rules**
7. **Add rules** for the applications you want to intercept
8. **Enable proxification** and start intercepting traffic

### macOS Configuration

**Option 1: Native System Settings**
1. Open **System Preferences** → **Network**
2. Select your **active network connection** (Wi-Fi or Ethernet)
3. Click **"Advanced"**
4. Navigate to the **"Proxies"** tab
5. Check **"SOCKS Proxy"**
6. Enter:
   - **SOCKS Proxy Server**: `127.0.0.1:4444`
7. Click **"OK"** and **"Apply"**

**Option 2: Proxifier (Recommended for advanced control)**
1. **Download Proxifier** from [https://www.proxifier.com/](https://www.proxifier.com/)
2. Follow the same configuration steps as Windows above

### Linux Configuration

**Option 1: System-wide Proxy (GNOME/KDE)**

**For GNOME (Ubuntu, Fedora):**
1. Open **Settings** → **Network**
2. Click **"Network Proxy"**
3. Select **"Manual"**
4. In **"Socks Host"** field, enter: `127.0.0.1`
5. In **"Port"** field, enter: `4444`
6. Click **"Apply"**

**For KDE (openSUSE, Kubuntu):**
1. Open **System Settings** → **Network** → **Proxy**
2. Select **"Manually specify proxy configuration"**
3. In **"SOCKS proxy"** field, enter: `127.0.0.1:4444`
4. Click **"Apply"**

**Option 2: Environment Variables**
```bash
# Set SOCKS5 proxy for current session
export ALL_PROXY=socks5://127.0.0.1:4444
export all_proxy=socks5://127.0.0.1:4444

# For specific applications
export HTTPS_PROXY=socks5://127.0.0.1:4444
export HTTP_PROXY=socks5://127.0.0.1:4444
```

**Option 3: Application-specific Configuration**

**For Firefox:**
1. Open **Preferences** → **General** → **Network Settings**
2. Select **"Manual proxy configuration"**
3. In **"SOCKS Host"**, enter: `127.0.0.1` Port: `4444`
4. Select **"SOCKS v5"**
5. Check **"Proxy DNS when using SOCKS v5"**

### Application-Specific Configuration

Some applications allow direct SOCKS5 proxy configuration:

- **Proxy Host**: `127.0.0.1`
- **Proxy Port**: `4444`
- **Proxy Type**: SOCKS5

## Step 4: Start Intercepting

1. **Configure your target application** to use the SOCKS5 proxy
2. **Start making network requests** from your application
3. **Monitor traffic** in real-time through the InterceptSuite interface
4. **Analyze captured data** using the built-in tools

