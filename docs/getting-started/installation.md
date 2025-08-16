---
sidebar_position: 1
---

# Installation

Learn how to install InterceptSuite on your system.

## System Requirements

### Supported Platforms
- **macOS**: macOS 13+ with ARM (Apple Silicon)
- **Windows**: Windows 10 and 11 (x64)
- **Linux**: Ubuntu 20.04+, Debian 11+, Fedora 35+

### Unsupported Platforms
- **macOS Intel**: Not supported and not planned (Intel Macs are no longer supported by Apple)
- **Windows ARM**: Not currently supported but planned for future release

## Download and Installation

### Download InterceptSuite

Visit [download page](https://interceptsuite.com/download) to download the installer for your specific platform. The same link allows you to download both the **Standard Edition** (free) and **Professional Edition**.

**Note**: The Professional Edition will require a valid license key to activate it. If you need help with activation, see the [License Activation Guide](./license-activation).

### Installation by Platform

#### Windows
- Download the **installer.exe** file
- Run the installer
- Follow the installation wizard

#### macOS
- Download the **.pkg installer** file
- Double-click to open the installer
- Follow the installation prompts
- You may need to allow the app in System Preferences > Security & Privacy

#### Linux
Choose from three available formats:

**Debian/Ubuntu (.deb)**
```bash
sudo dpkg -i interceptsuite.deb
sudo apt-get install -f  # Fix any dependencies
```

**Fedora/Red Hat (.rpm)**
```bash
sudo rpm -i interceptsuite.rpm
```

**Universal (.AppImage)**
```bash
chmod +x interceptsuite.AppImage
./interceptsuite.AppImage
```



