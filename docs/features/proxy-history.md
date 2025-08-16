---
sidebar_position: 2
---

# Proxy History

Complete packet history tracking and analysis in InterceptSuite.

## Overview

The **Proxy History** feature provides a comprehensive view of all network packets that have been processed through InterceptSuite. This feature allows you to review, analyze, and track modifications made to intercepted traffic.

## Packet History View

### Complete Packet Log
- **All Packets** - View complete history of all packets that were sent through the proxy
- **Chronological Order** - Packets are displayed in the order they were processed
- **Detailed Information** - Each packet entry shows relevant metadata and status information

### Packet Selection and Viewing

When you select any packet from the history:

- **Split Pane Display** - Packet data appears at the **bottom side** of the split pane
- **Data Viewer** - Detailed packet content is displayed in the data viewer section

### Context Menu Options

When you select any packet or multiple packets and **right-click** on the table, you can access a context menu with several options:

#### Standard Options (All Versions)
- **Copy** - Copy the selected packets to clipboard
- **Remove Selected** - Delete the selected packets from proxy history
- **Remove All** - Delete all packets from proxy history

#### Professional Version Options
- **Export as PCAP** - Export selected packets to PCAP file format
- **Select Output Directory** - Choose the destination directory for the PCAP file

## PCAP Export (Professional Version)

### Export Functionality

The Professional version of InterceptSuite includes advanced PCAP export capabilities:

- **Standard Format** - Exports packets in industry-standard PCAP format
- **Directory Selection** - Choose your preferred output location
- **Multiple Packet Support** - Export single or multiple selected packets

### Data Limitations and Handling

**Important**: InterceptSuite preserves proxy history and connection data, but some network-level information is not maintained:

#### Missing Information
- **MAC Addresses** - Not preserved in proxy history
- **TCP Handshake Details** - Connection establishment data not stored
- **Lower-layer Network Data** - Physical and data link layer information unavailable

#### PCAP File Generation

When exporting to PCAP format, InterceptSuite handles missing data as follows:

**Fixed Dummy Data**:
- **MAC Addresses** - Uses fixed random dummy MAC addresses
- **TCP Sequence Numbers** - Generates dummy TCP sequence numbers to maintain PCAP format compatibility

**Real Connection Data**:
- **IP Addresses** - Added from actual connection data
- **Port Numbers** - Retrieved from connection tab information
- **Packet Data** - Original packet content from proxy history

#### Connection Tab Dependency

**Important Note**: Removing connections from the **Connection tab** affects PCAP export:

- **Missing Port Information** - If connection data is removed, port information is lost
- **Dummy Port Numbers** - InterceptSuite will use dummy port numbers in PCAP files
- **Recommendation** - Keep connection data if you plan to export PCAP files later

## Data Viewer Options

### Raw and Hex Views

The data viewer provides two viewing formats:

#### Raw Tab
- **Purpose**: View raw packet data in plain text format
- **Format**: Human-readable text representation of the packet
- **Editable**: ❌ No - data is read-only for historical review

#### Hex Tab
- **Purpose**: View packet data in hexadecimal format
- **Format**: Hexadecimal representation of the packet bytes
- **Editable**: ❌ No - data is read-only for historical review

## Modification Tracking

### Modified Column

InterceptSuite tracks packet modifications with a dedicated column:

- **Modified Status** - Shows "Yes" or "No" to indicate if a packet was modified
- **Modification Detection** - Automatically detects when packets were intercepted and edited before forwarding
- **Historical Record** - Maintains modification status for complete audit trail

### Original vs. Edited Data

For modified packets, InterceptSuite provides access to both versions:

- **Dropdown Selection** - When you click on a modified packet, a small dropdown appears in the data viewer
- **Version Options**:
  - **Original Data** - View the packet data as it was originally received
  - **Edited Data** - View the packet data after modifications were made
- **Data Preservation** - Both original and edited versions are tracked and preserved

## Protocol Information

### Protocol Column

The proxy history includes a protocol identification column:

- **Protocol Display** - Shows the transport protocol used for each packet
- **Limited Detection** - InterceptSuite does **not** perform specific protocol detection or data dissection
- **Basic Classification** - The protocol column will only display:
  - **TCP** - For TCP packets
  - **UDP** - For UDP packets

### Protocol Limitations

**Important Note**: InterceptSuite focuses on transport-level interception and does not provide:
- Application-layer protocol identification (HTTP, HTTPS, FTP, etc.)
- Protocol-specific data parsing or dissection
- Deep packet inspection beyond basic TCP/UDP classification

## Use Cases

### Traffic Analysis
- **Review Historical Traffic** - Analyze patterns in network communication
- **Audit Modifications** - Track what changes were made to intercepted packets
- **Troubleshooting** - Investigate network issues by reviewing packet history

### Security Analysis
- **Modification Tracking** - Ensure packet modifications are properly documented
- **Data Integrity** - Verify original vs. modified packet content
- **Audit Trail** - Maintain complete record of interception activities

## Best Practices

- **Regular Review** - Periodically review proxy history for unusual patterns
- **Modification Documentation** - Keep track of why modifications were made
- **Data Retention** - Be aware of storage implications for large packet histories
