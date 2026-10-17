# CS624 - Practice Exercise 02 (PE02): Course Explorer Mobile App

An Expo and React Native mobile application built for **City University of Seattle's CS624 (Full-Stack Development - Mobile App)**. This application displays degree requirements for the Master of Science in Computer Science curriculum, allows students to record and view their favorite courses interactively, displays the application branding, and provides a direct link to the CityU academic catalog.

---

## Features

- **App Branding & Asset Resolution**: Renders the application icon resolved cleanly from `@/assets/images/icon.png`.
- **Interactive Course Input**: Live `TextInput` capturing user feedback on preferred courses ("Which course did you like?") with dynamic state display.
- **Categorized Degree Requirements**:
  - **Core Requirements (24 credits)**: CS 504, CS 506, CS 519, CS 533, CS 547, CS 622, DS 510, DS 620
  - **Depth of Study (6 credits)**: CS 624 (Mobile App), CS 628 (Web App)
  - **Capstone (3 credits)**: CS 687
- **External Catalog Link**: One-tap button navigating directly to the official CityU academic catalog via React Native's `Linking` API.
- **Universal Cross-Platform Support**: Runs on iOS (simulator & device), Android (emulator & device), Expo Go, and Web.
- **Modern Expo Router Architecture**: Uses file-based routing with tab navigation (`src/app/_layout.tsx`, `src/app/index.tsx`, `src/app/explore.tsx`).

---

## Project Structure

```text
HelloWorld/
├── assets/
│   ├── expo.icon/              # iOS asset catalog icon specification
│   └── images/                 # App icons, splash screens, badges, logos
│       ├── icon.png            # Main app icon (1024x1024)
│       ├── splash-icon.png     # Splash screen icon
│       ├── react-logo.png      # React logo (1x, 2x, 3x)
│       └── tabIcons/           # Tab navigation icons
├── src/
│   ├── app/
│   │   ├── _layout.tsx         # Root layout with ThemeProvider and AppTabs
│   │   ├── index.tsx           # Home screen: Course requirements & favorite input
│   │   └── explore.tsx         # Explore screen: Platform features and developer guide
│   ├── components/             # Reusable UI components & navigation tabs
│   ├── constants/              # Theme tokens, spacing, and styling constants
│   ├── hooks/                  # Color scheme and theme hooks
│   └── App.js                  # Standalone component reference
├── app.json                    # Expo project configuration & asset bindings
├── package.json                # Project dependencies and script commands
└── tsconfig.json               # TypeScript configuration with path aliases (@/*)
```

### Asset Resolution

Static assets are housed in the root `assets/` directory. Path aliases configured in `tsconfig.json` allow clean imports from anywhere in the codebase:

```typescript
// Resolve app icon via path alias
<Image source={require('@/assets/images/icon.png')} style={styles.icon} resizeMode="contain" />
```

---

## Getting Started

### Prerequisites

You can use the local system environment or the reproducible Nix flake located in the parent directory.

#### Using the Nix Flake Dev Environment (Recommended)

From the project directory:

```bash
# Enter the nix development shell
nix develop ..

# Or run commands directly through the flake
nix develop .. -c npx expo start
```

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the Development Server

```bash
npx expo start
```

Once Metro is running, press:
- `w` to open in your web browser
- `a` to open in an Android emulator/device
- `i` to open in an iOS simulator
- Scan the printed QR code using the **Expo Go** app on your physical device

---

## Verification & Build Commands

All commands can be run directly or prefixed with `nix develop .. -c <command>`:

| Command | Purpose |
| :--- | :--- |
| `npx tsc --noEmit` | Run TypeScript type checks across the project |
| `npx expo export --platform web` | Verify static web bundle generation and asset bundling |
| `npx expo export --platform ios` | Verify iOS bundle generation and Hermes bytecode export |
| `npx expo export --platform android` | Verify Android bundle generation and asset compilation |
| `npx expo-doctor` | Validate Expo configuration and dependency compatibility |

---

## Technologies Used

- **React Native** `0.86.3`
- **React** `19.2.3`
- **Expo SDK** `57`
- **Expo Router** `~57.0.25`
- **TypeScript** `~6.0.3`
- **Nix** (Dev Environment Flake)
