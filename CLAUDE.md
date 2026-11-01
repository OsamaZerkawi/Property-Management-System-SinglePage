# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use pnpm (pinned to 10.4.1 in `package.json`).

- `pnpm dev`: Vite dev server, exposed on the network (`--host`)
- `pnpm build`: production build to `dist/`
- `pnpm preview`: serve the built `dist/`
- `pnpm lint`: ESLint

There is no test framework or test script.

`pnpm lint` currently reports 11 errors and 7 warnings, so check for new problems rather than expecting a clean run. Some errors are false positives: the config has no JSX usage rule, so `motion` in `<motion.div>` is reported as unused, and `__dirname` in `vite.config.js` is reported as undefined.

## Dependencies and deployment

- Vercel installs with pnpm using a frozen lockfile, so a `package.json` change without a matching `pnpm-lock.yaml` fails the deploy. Add dependencies with `pnpm add`. `package-lock.json` is also in the repo, but `npm install` only updates that file and leaves the pnpm lockfile stale.
- `node_modules/` is still tracked in git (about 27,000 Windows-built files) even though `.gitignore` lists it. A full `pnpm install` can produce a huge diff, so stage files by name instead of using `git add -A`. To update only the lockfile, run `pnpm install --lockfile-only`.

## Architecture

This is a single-page React 19 and Vite site for a real estate platform ("Propoly"), written in JavaScript. There is no backend, router or global store: `axios`, `react-router-dom` and `zustand` are installed but unused, and navigation uses anchor links to section ids.

`src/App.jsx` owns the shared state (`isDark`, `language`, whether the agent modal is open) and renders the page sections in order. It applies the theme and text direction by setting the `dark` class and `dir` attribute on `<html>`.

### Translations

`src/components/translations.js` holds `ar` and `en` objects. Arabic is the default, and the page switches to RTL for it. `App.jsx` passes `t = translations[language]` to each section as a prop; the modal receives it as `translations`, along with `language`.

New UI text needs a key in both languages. A few strings in the agent modal bypass this with inline `language === "ar"` checks: name validation messages, name placeholders and the selected location label.

### Sample data

The site makes no API calls. `TopOffices` and `TopProperties` in `src/features/` define sample records inside the component, the same way `Team.jsx` does, so they can read localized text from `t` and update instantly when the language changes.

### Agent registration

`src/modals/AgentRegistrationModal.jsx` validates by hand with local state, then simulates a successful submit: the form data is not sent or stored anywhere, even though visitors see a success message. The location comes from `src/components/Map.jsx` (react-leaflet with OpenStreetMap tiles) and defaults to coordinates in Damascus.

`App.jsx` renders the single `ToastComponent` from `useNotification`, so call `notifySuccess` and friends from any component without mounting another one.

### Styling

- Tailwind CSS v4 runs through `@tailwindcss/vite`, with no Tailwind config file. Theme tokens and dark mode variables are in `src/App.css`; `src/index.css` is empty.
- `src/components/ui/` contains shadcn/ui components (new-york style, JSX), configured by `components.json`.
- `@/` is an alias for `src/`.
- MUI and Emotion are only used for one `Button` in `Map.jsx`.

## Known issues

- `src/components/ui/calendar.jsx` uses the react-day-picker v8 API (`IconLeft`, `IconRight`), but v9 is installed. Nothing imports it yet.
- `src/features/top_offices/OfficeCard.jsx` is not imported anywhere, and it is the only user of `colors.jsx` and `formatPrice.jsx`. The live offices UI is `TopOffices.jsx`.
