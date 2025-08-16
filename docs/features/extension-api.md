---
sidebar_position: 2
---

# Extension API Reference

Basic requirements for developing InterceptSuite extensions.

## Extension Class Requirements

### Required Class Structure

Each extension **must** be initialized with the `InterceptSuiteExtension` Python class. InterceptSuite will load extensions that contain this specific class - it is **required** for all extensions.

```python
class InterceptSuiteExtension:

    def register_interceptor_api(self, interceptor):
        """Required method for extension registration"""
        # Set extension name (REQUIRED)
        interceptor.set_extension_name('My Extension')

        # Set extension version (REQUIRED)
        interceptor.set_extension_version('1.0.0')
```

## Required Methods

### register_interceptor_api Method

The `register_interceptor_api(self, interceptor)` method **must** be present in your `InterceptSuiteExtension` class. This method is called by InterceptSuite during extension loading.

**Required Parameters:**
- `interceptor` - The interceptor API object provided by InterceptSuite

### Required API Calls

Within the `register_interceptor_api` method, you **must** declare:

#### Extension Name
```python
interceptor.set_extension_name('My Extension')    # REQUIRED - string parameter
```

#### Extension Version
```python
interceptor.set_extension_version('1.0.0')       # REQUIRED - string parameter
```

**Parameter Types:**
- `set_extension_name()` - Takes a **string** parameter for the extension name
- `set_extension_version()` - Takes a **string** parameter for the version number

## Extension Logging

### Logging to Extension Logs

To add messages to the extension logs in InterceptSuite, you need to import and use the ExtensionLogger:

#### Import Statement
```python
from InterceptSuite.Extensions.APIs.Logging import ExtensionLogger
```

#### Logging Messages
```python
ExtensionLogger.Log("Extension loaded!")
```

#### Usage Example
```python
from InterceptSuite.Extensions.APIs.Logging import ExtensionLogger

class InterceptSuiteExtension:

    def register_interceptor_api(self, interceptor):
        """Register extension with InterceptSuite"""
        # These calls are REQUIRED
        interceptor.set_extension_name('My Custom Extension')
        interceptor.set_extension_version('1.0.0')

        # Log successful registration
        ExtensionLogger.Log("Extension registered successfully!")
```

**Log Display:**
- Messages logged using `ExtensionLogger.Log()` will be displayed in the **Extension Logs** section
- Located in the **Extension tab** in InterceptSuite
- Accepts any **text string** as parameter

## Custom Data Viewer Tabs

### Adding Custom Tabs

InterceptSuite allows extensions to add their own tabs to the packet and data viewer. By default, InterceptSuite comes with 2 tabs in the data viewer and packet viewer: **Raw** and **Hex**.

### Registering Custom Tabs

To add a custom tab, use the `AddDataViewerTab` method in your `register_interceptor_api` method:

```python
interceptor.AddDataViewerTab("Base64", MyPythonHandlerClass())
```

**Parameters:**
- **Tab Name** (string) - The name that will appear on the tab (e.g., "Base64")
- **Handler Class** - Your Python class instance that implements the required methods

### Handler Class Requirements

Your `MyPythonHandlerClass` must implement the required methods for data viewer functionality:

```python
class MyPythonHandlerClass:
    def __init__(self):
        """Initialize the handler"""
        pass

    def should_show_tab(self, data):
        """Determine if tab should be shown for this data (REQUIRED)"""
        # Return True to show tab, False to hide
        # Add conditions to show tab only when needed
        return True  # or False based on your conditions

    def fetchdata(self, data):
        """Process and return data to display in tab (REQUIRED)"""
        # Extract and process the packet data
        raw_data = data.get("data", "")
        # Process the data (e.g., decode base64)
        return processed_data

    def updatedata(self, data):
        """Handle edited data from tab (REQUIRED)"""
        # Check if user edited data in the tab
        edited_data = data.get("edited_data", "")
        if edited_data:
            # Process edited data and return updated content
            return updated_data
        return None
```

### Data Dictionary Structure

The `data` parameter is a Python dictionary containing packet information:

```python
# Data dictionary structure:
{
    "ip": "23.215.0.136",           # str - Source IP address
    "destination_ip": "127.0.0.1",  # str - Destination IP address
    "source_port": 0,               # int - Source port number
    "destination_port": 38313,      # int - Destination port number
    "direction": "Server->Client",   # str - Packet direction
    "length": 1452,                 # int - Packet length in bytes
    "data": "packet_data",          # str - Raw packet data
    "type": "Text/Binary",          # str - Data type
    "timestamp": "2025-08-16 20.35.26", # str - Packet timestamp
    "connection_id": 1,             # int - Connection identifier
    "is_editable": False            # bool - False means proxy history
}
```

### Required Methods Details

#### should_show_tab Method

```python
def should_show_tab(self, data):
    """Determine when to show your extension tab"""
    # Example: Only show for HTTP data
    raw_data = data.get("data", "")
    if "HTTP" in raw_data:
        return True
    return False
```

**Purpose**: Controls when your custom tab appears
- **Return True**: Tab will be visible for this packet
- **Return False**: Tab will be hidden for this packet
- **Add Conditions**: Show tab only when relevant to your extension

#### fetchdata Method

```python
def fetchdata(self, data):
    """Process data for display in your tab"""
    raw_data = data.get("data", "")

    # Example: Decode base64 data
    try:
        decoded = base64.b64decode(raw_data).decode('utf-8', errors='ignore')
        return decoded
    except:
        return "Invalid base64 data"
```

**Purpose**: Process packet data for display in your custom tab
- **Input**: Raw packet data from dictionary
- **Output**: Processed data to display in your tab
- **Example**: Decode base64, parse JSON, format XML, etc.

#### updatedata Method

```python
def updatedata(self, data):
    """Handle user edits from your tab"""
    edited_data = data.get("edited_data", "")

    if edited_data:
        # User edited the data in your tab
        # Re-encode the edited data
        try:
            updated = base64.b64encode(edited_data.encode('utf-8')).decode('utf-8')
            return updated
        except:
            return None

    return None
```

**Purpose**: Handle when user edits data in your custom tab
- **edited_data**: Contains user's edited content from your tab
- **Return Value**: Updated data that replaces original packet data
- **Packet Replacement**: Returned data is sent to server/client instead of original### Example Implementation

```python
from InterceptSuite.Extensions.APIs.Logging import ExtensionLogger

class Base64HandlerClass:
    def __init__(self):
        """Initialize Base64 handler"""
        pass

    # Implement required data viewer methods here

class InterceptSuiteExtension:
    def __init__(self):
        """Initialize the extension"""
        pass

    def register_interceptor_api(self, interceptor):
        """Register extension with InterceptSuite"""
        # Required calls
        interceptor.set_extension_name('Base64 Viewer Extension')
        interceptor.set_extension_version('1.0.0')

        # Add custom data viewer tab
        interceptor.AddDataViewerTab("Base64", Base64HandlerClass())

        ExtensionLogger.Log("Base64 tab added to data viewer!")
```

**Custom Tab Features:**
- **Tab Integration** - Custom tabs appear alongside Raw and Hex tabs
- **Packet Data Access** - Handler class receives packet data for processing
- **Custom Display** - Extensions control how data is formatted and displayed

## Complete Example

```python
class InterceptSuiteExtension:
    def __init__(self):
        """Initialize the extension"""
        pass

    def register_interceptor_api(self, interceptor):
        """Register extension with InterceptSuite"""
        # These calls are REQUIRED
        interceptor.set_extension_name('My Custom Extension')
        interceptor.set_extension_version('1.0.0')

        # Additional extension setup can be done here
```

## Example Extensions

For practical examples and sample extensions, visit the official InterceptSuite Extension repository:

**🔗 [https://github.com/InterceptSuite/Extension](https://github.com/InterceptSuite/Extension)**

This repository contains:
- **Sample Extensions** - Working examples of different extension types
- **Code Templates** - Starter templates for common extension patterns
- **Best Practices** - Real-world examples following recommended patterns
- **Data Viewer Examples** - Custom tab implementations for various data formats