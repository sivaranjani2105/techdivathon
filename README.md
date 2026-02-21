# RAKSHAK OS: Neural Mesh Tactical System v4.5.1

RAKSHAK OS is an AI-powered, high-fidelity command and control dashboard designed for next-generation Smart Helmets. It provides real-time tactical awareness, operator vitals monitoring, and encrypted mission logging.

---

## 🚀 Core Features

### 1. Tactical Mission Dashboard
- **Real-time Telemetry**: Monitoring of speed, battery life, internal temperature, and mission distance.
- **Operator Vitals**: Dynamic heart rate (BPM) monitoring that triggers system-wide UI theme shifts (Optimal → Elevated → Critical).
- **AI Terminal**: Cinematic terminal feed providing system logs, hash matches, and mission-critical notifications.

### 2. Mesh Network Topography
- **Interactive Canvas**: Low-latency visualization of local mesh nodes.
- **Node Intelligence**: Detailed interrogative stats (ID, strength, packet loss, interference) for both hub/relay and minor nodes.
- **Traffic Analysis**: Integrated monitoring of encrypted traffic and signal interference.

### 3. Tactical Mission Tools
- **Mission Journal**: High-priority logging with context-aware tags:
  - `RECON`: Scout data and perimeter info.
  - `ALERT`: Threat detection and priority warnings.
  - `INTEL`: Strategic data and intercepted signals.
  - `STATUS`: General mission updates and system state.
- **Operational Checklist**: Interactive checklist for pre-mission handshake and neural link calibration.
- **Telemetry History**: Visual sparkline analytics for historical tracking of operator vitals.

### 4. AR Optics Mode (optics.html)
- **HUD Interface**: A black-out AR overlay designed for field operations.
- **Camera Integration**: Simulated AR camera feed with cinematic scanlines and contrast filtering.
- **Biometric Sync**: Real-time synchronization of telemetry from the main command center into the field agent's field of view.

### 5. Fleet Administration (admin.html)
- **Operator Roster**: Manage field units, register new operators, and assign clearance levels.
- **Global Logs**: Aggregated mission logs from all active deployments.
- **Protocol Management**: Tools for broadcasting global alerts or triggering "Protocol Zero" emergency sequences.

### 6. Data Lifecycle & Persistence
- **Full Persistence**: All mission data (journals, settings, profiles, operators) is saved securely via `localStorage`.
- **Export/Import**: Standardized JSON data portability for archiving mission logs or restoring state across deployments.
- **Danger Zone**: One-click system purge in both Dashboard and Admin panels for total data security.

---

## ⌨️ Tactical Workflow (Shortcuts)

Efficiency is critical in tactical environments. Use the following global shortcuts in the **Command Center**:

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + Shift + J` | Open Mission Journal |
| `Ctrl + Shift + C` | Open Operational Checklist |
| `Ctrl + Shift + H` | Open Telemetry History |
| `Ctrl + Shift + S` | Open System Settings |
| `Esc` | Close all active tactical panels |

---

## 🛠 Technical Specifications

- **Frontend**: Standard-compliant HTML5, CSS3 (Vanilla), and ES6+ JavaScript.
- **Performance**: High-FPS Canvas API for interaction; requestAnimationFrame for smooth UI transitions.
- **Mobility**: PWA-ready with Service Worker (`sw.js`) and Offline Page (`offline.html`) integration.
- **Aesthetics**: Premium Glassmorphism UI (Light Theme) with dynamic responsive layouts.

---

## 📂 Project Structure

- `landing.html`: Tactical uplink and boot sequence.
- `rakshak.html`: Main Command & Control Dashboard.
- `optics.html`: Field-op AR HUD simulation.
- `admin.html`: Fleet and operator management center.
- `sw.js`: Service worker for offline persistence.
- `manifest.json`: Web app manifest for PWA deployment.

---

*RAKSHAK OS — Secure. Reliable. Tactical.*
