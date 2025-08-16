---
sidebar_position: 3
---

# Connection Management

Monitor and manage network connections in InterceptSuite.

## Overview

The **Connection tab** provides comprehensive monitoring of network connections, allowing you to track source and destination ports, connection status, and manage connection data for analysis purposes.

## Connection Monitoring

### Connection Information

The connection tab displays detailed information about each network connection:

- **Source Port** - The originating port number for the connection
- **Destination Port** - The target port number for the connection
- **Connection Status** - Shows whether the connection is currently active or not
- **Connection ID** - Unique identifier for each connection

### Connection Status Tracking

**Active Connections**:
- **Live Status** - Real-time monitoring of connection state
- **Port Information** - Source and destination port details
- **Session Tracking** - Monitor ongoing network sessions

**Disconnected Connections**:
- **Disconnection Detection** - Automatically detects when connections are terminated
- **Termination Source** - Identifies whether disconnection was initiated by server or client
- **Historical Record** - Maintains record of disconnected connections

## Connection ID Usage

### Cross-Feature Integration

You can use the **Connection ID** across different InterceptSuite features:

#### Connection Status Verification
- **Connection Tab** - Check if a connection ID shows any disconnection status
- **Status Indicator** - If disconnection is present, it means the connection was terminated by either server or client

#### Proxy History Integration
- **Connection Tracking** - Use the same connection ID in Proxy History to review packet data
- **Status Correlation** - Cross-reference connection status with packet history

#### Intercept Integration
- **Real-time Monitoring** - Use connection ID in Intercept feature to check if connection is active
- **Session Validation** - Verify connection status before intercepting packets

### Connection Status Workflow

1. **Monitor Connection Tab** - Check connection status using Connection ID
2. **Verify in Proxy History** - Use same Connection ID to review related packets
3. **Cross-check in Intercept** - Validate connection status before interception
4. **Status Correlation** - Understand connection lifecycle across all features

## Connection Management

### Context Menu Options

When you **right-click** on the connection table, you can access management options:

#### Available Actions
- **Copy** - Copy selected connection information to clipboard
- **Clear Selected** - Delete the selected connection entries
- **Clear All** - Delete all connection entries from the table

### Data Management

**Connection Data Importance**:
- **Port Information Storage** - Connection tab stores essential port information
- **PCAP Export Dependency** - Required for accurate PCAP file generation (Professional version)
- **Cross-reference Support** - Enables correlation between features

**Clearing Considerations**:
- **Impact on PCAP Export** - Clearing connections affects PCAP file accuracy
- **Port Information Loss** - Deleted connections lose associated port data
- **Feature Integration** - May affect cross-feature connection tracking

## Use Cases

### Network Monitoring
- **Connection Tracking** - Monitor active and terminated connections
- **Port Analysis** - Analyze source and destination port patterns
- **Session Management** - Track connection lifecycles

### Troubleshooting
- **Connection Status** - Verify if connection issues are client or server-side
- **Cross-feature Analysis** - Use Connection ID to correlate data across features
- **Historical Analysis** - Review connection patterns over time

### Data Analysis
- **Connection Correlation** - Link connection data with proxy history and intercept logs
- **Status Verification** - Validate connection state before performing operations
- **Comprehensive Tracking** - Maintain complete connection audit trail

## Best Practices

- **Regular Monitoring** - Check connection status regularly for active sessions
- **Connection ID Tracking** - Use Connection ID consistently across all features
- **Data Retention** - Consider keeping connection data for PCAP export capabilities
- **Status Verification** - Always verify connection status before interception operations
