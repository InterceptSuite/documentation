---
sidebar_position: 1
---

# Traffic Interception

Real-time traffic interception and modification capabilities in InterceptSuite.

## Overview

In the **Proxy tab**, InterceptSuite provides powerful interception features that allow you to intercept and modify network traffic in real-time. You can intercept and edit traffic for both directions:

- **Client to Server** - Intercept outgoing requests
- **Server to Client** - Intercept incoming responses

## Interception Controls

### Forward and Drop Actions

When a packet is intercepted, you have two primary actions:

- **Forward Button** - Allows you to forward the intercepted packet to its destination
- **Drop Button** - Drops the packet so it will not be sent to the server or client

### Enabling Interception

By default, interception is **disabled**. To start intercepting traffic:

1. **Enable Interception** - Use the **"Intercept ON/OFF"** button to activate interception
2. **Select Direction** - Simply enabling intercept won't capture packets; you must also select the direction

### Direction Options

In the direction dropdown, you can select from 3 options:

- **Client to Server** - Intercept only client-to-server packets (outgoing requests)
- **Server to Client** - Intercept only server-to-client packets (incoming responses)
- **Both** - Intercept traffic in both directions (requests and responses)

## Packet Data Viewer

The packet data viewer allows you to examine and modify intercepted packets.

### Default State
By default, the packet data viewer is a normal text box that remains inactive until a packet is intercepted.

### Viewing and Editing Options

When a packet is intercepted, you can use the packet viewer to edit packet data content:

#### Raw Tab
- **Purpose**: Edit raw packet data
- **Format**: Plain text representation of the packet
- **Editable**: ✅ Yes - you can modify the packet content

#### Hex Tab
- **Purpose**: View packet data in hexadecimal format
- **Format**: Hexadecimal representation of the packet bytes
- **Editable**: ❌ No - hex data is read-only for viewing purposes

## Multiple Packet Handling

### Intercept Packet Queue

When interception is enabled, InterceptSuite manages multiple packets using a queue system:

- **Automatic Queuing** - When intercept is ON, packets are automatically added to the intercept packet queue
- **Packet Pausing** - Each intercepted packet is paused and added to the queue list
- **First Packet Display** - On the intercept tab, you can only view the **first packet** that was intercepted
- **Queue Counter** - Check the number of packets in the queue at the **top right side** of the interface

### FIFO Processing

InterceptSuite uses a **FIFO (First In, First Out)** queue system:

- **Processing Order** - The first packet intercepted will be the first to be processed/removed from the queue
- **Manual Processing** - Packets are **not removed automatically** from the queue
- **User Action Required** - Each packet must be manually **forwarded** or **dropped** by the user
- **Sequential Handling** - You must process the current (first) packet before accessing the next one in the queue

### Queue Management Tips

- **Monitor Queue Size** - Keep an eye on the packet counter to avoid large queue buildup
- **Process Promptly** - Handle packets quickly to prevent session timeouts
- **Clear Queue Regularly** - Forward or drop packets to maintain smooth traffic flow

### Auto-Forward on Intercept Disable

When you disable interception:

- **Turn Off Intercept** - Click the intercept button to turn OFF interception
- **Automatic Queue Clearing** - All packets currently in the queue will be **automatically forwarded**
- **Immediate Processing** - This provides a quick way to clear the entire queue at once

## Session Management and Timeouts

### Connection Timeouts
Session and connection timeouts are based on client, server, and protocol specifications:

- **Protocol Dependent** - Different protocols have varying timeout lengths
- **Variable Duration** - Some protocols have longer TCP session timeouts, others are shorter
- **Client/Server Specific** - Timeout behavior varies between different client and server implementations

### Session Termination Handling

When you intercept a packet and hold it for too long:

1. **Automatic Termination** - The server or client may terminate the session due to timeout
2. **Rejected Packets** - Post-termination, forwarded packets will be rejected by server/client in most cases
3. **Auto-Detection** - InterceptSuite automatically detects when an ongoing session is terminated
4. **Automatic Drop** - Packets are automatically dropped when no active session exists

### Best Practices

- **Quick Analysis** - Analyze and modify packets promptly to avoid session timeouts
- **Monitor Session Status** - Pay attention to session indicators in the interface
- **Understand Protocol Limits** - Be aware of the timeout characteristics of the protocols you're intercepting