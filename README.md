# Stopwatch

A feature-rich stopwatch application with lap tracking and dual analog/digital display for precise time measurement.

## Project Function

This stopwatch application allows users to precisely measure elapsed time with support for lap tracking. It features:

- Real-time digital and analog time display
- Lap recording to track split times
- Start/pause functionality for controlling the timer
- Reset capability to clear all times and start fresh
- Visual representation of time on an analog dial
- Responsive interface with fixed controls

## Features

- **Dual Display**:
  - Digital display showing time in MM:SS.CS format (minutes, seconds, centiseconds)
  - Analog dial with animated hour and minute hands for visual time representation
  - Real-time updates every 10 milliseconds for accuracy
- **Lap Tracking**: Record and view multiple lap times
  - Displays lap number, individual lap duration, and total elapsed time
  - Lap button only active when timer is running
  - Scrollable lap list to view all recorded laps
- **Controls**:
  - **▶ Start/Pause**: Toggle between running and paused states
  - **Lap**: Record the current lap time (only available while running)
  - **⟲ Reset**: Clear all data and start fresh
- **Responsive Design**: Clean, organized interface with fixed controls and scrollable lap list

## How to Run

### Quick Start

1. Open the `stopwatch` folder
2. Double-click on `index.html` or right-click and select "Open with" your preferred web browser
3. The stopwatch will load immediately in your browser

**No installation or server required** - it runs entirely in your browser!

## How to Use

1. **Start**: Click the **▶** (Play) button to start the stopwatch
2. **Record Laps**: While running, click **Lap** to record individual lap times
3. **Pause**: Click **⏸** (Pause) to temporarily stop the timer (click **▶** to resume)
4. **Reset**: Click **⟲** (Reset) to clear all times and start over
5. **View Laps**: All recorded laps appear below the controls showing lap number, lap time, and total time

## Files

- `index.html` - Structure and layout
- `style.css` - Styling and animations
- `script.js` - Stopwatch logic and lap management
- `README.md` - This file

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)

## Example Use Cases

- Track running/exercise times and lap splits
- Measure cooking or workout durations
- Time presentations or events
- Record multiple performance measurements
