---
sidebar_position: 4
---

# Proxy Settings

Configure and manage proxy server settings in InterceptSuite.

## Overview

The **Proxy Settings** section provides comprehensive control over proxy server configuration, including network settings, logging options, and certificate management. This is where you configure the core proxy functionality of InterceptSuite.

## Proxy Server Control

### Start and Stop Proxy

**Proxy Management**:
- **Start/Stop Controls** - Start and stop the proxy server as needed
- **Auto-start Behavior** - By default, when you open the app, the proxy automatically starts
- **Immediate Control** - Changes take effect immediately

### Default Configuration

**Automatic Startup Settings**:
- **Default IP**: `127.0.0.1` (localhost)
- **Default Port**: `4444` (SOCKS5 proxy)
- **Protocol**: SOCKS5
- **Auto-start**: ✅ Enabled by default

## Network Configuration

### SOCKS5 Proxy Settings

**Configurable Options**:
- **IP Address** - Select from system IP dropdown menu
- **Port Number** - Customize the SOCKS5 proxy port (default: 4444)
- **Save Settings** - Apply changes immediately to update proxy configuration

**Configuration Process**:
1. **Select IP Address** - Choose from available system IPs in the dropdown
2. **Set Port Number** - Enter desired port for SOCKS5 proxy
3. **Save Settings** - Configuration updates immediately upon saving
4. **Immediate Effect** - Proxy IP and port change instantly

### UDP Relay Settings

**Fixed Configuration**:
- **UDP Relay Port**: `4445`
- **IP Address**: Same as SOCKS5 proxy IP
- **Port Editing**: ❌ **Not configurable** - UDP relay port cannot be edited
- **Automatic Binding** - UDP relay automatically uses the same IP as SOCKS5 proxy

## Logging Configuration

### Verbose Logging

**Enhanced Logging Option**:
- **Verbose Logging Methods** - Enable detailed logging for comprehensive analysis
- **Detailed Logs** - Adds more detailed information to the log section
- **Troubleshooting** - Helpful for debugging and analysis purposes
- **Performance Impact** - May increase log file size and processing overhead

**When to Enable**:
- **Debugging Issues** - Enable when troubleshooting connection problems
- **Detailed Analysis** - Use for comprehensive traffic analysis
- **Development/Testing** - Helpful during development or testing phases

## Certificate Management

### Export Certificate

**Certificate Export Functionality**:
- **Export Button** - Click "Export Certificate" to save CA certificate
- **DER Format** - Exports InterceptSuite CA certificate in DER format
- **Private Key Export** - Also exports the certificate's private key
- **File Selection** - Choose export location and filename

**Export Uses**:
- **System Installation** - Install CA certificate on client systems
- **Trust Store Management** - Add to system trust stores
- **Backup Purposes** - Keep backup of current certificate

### Regenerate Certificate

**Certificate Regeneration**:
- **Regenerate Button** - Click "Regenerate Certificate" for immediate regeneration
- **Automatic Process** - Deletes current CA certificate and generates new one immediately
- **Instant Replacement** - New certificate is available immediately after regeneration
- **No Downtime** - Process completes without stopping proxy service

**When to Regenerate**:
- **Security Concerns** - If certificate may be compromised
- **Fresh Start** - When starting new analysis projects
- **Client Issues** - If clients have certificate trust issues
- **Regular Rotation** - As part of security best practices



## Configuration Workflow

### Initial Setup
1. **Check Default Settings** - Verify default IP (127.0.0.1) and port (4444)
2. **Customize if Needed** - Select different IP or port if required
3. **Enable Verbose Logging** - Turn on if detailed logs are needed
4. **Export Certificate** - Export CA certificate for client installation

### Ongoing Management
1. **Monitor Proxy Status** - Ensure proxy is running when needed
2. **Adjust Settings** - Modify IP/port configuration as requirements change
3. **Manage Certificates** - Export or regenerate certificates as needed
4. **Review Logs** - Use verbose logging for troubleshooting when necessary

## Important Notes

### Network Considerations
- **IP Selection** - Choose IP that clients can access
- **Port Conflicts** - Ensure selected port is not used by other services
- **Firewall Rules** - Configure firewall to allow traffic on selected ports

### Certificate Impact
- **Client Trust** - Certificate regeneration requires client systems to reinstall new certificate
- **Immediate Effect** - Certificate changes affect all active connections
- **Backup Strategy** - Keep backups of certificates for recovery purposes
