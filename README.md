# Simple Link Display

To-Do:
[x] Links editierbar machen
[x] CTA editierbar machen
[ ] Social Icons editierbar machen
[x] Avatar-Bereich editierbar machen
[x] Subtitle editierbar machen
[x] Chip editierbar machen
[x] Footer editierbar machen

[x] Untersützung für Impressum (editierbar)
[ ] und Datenschutzerklärung

[ ] Datenbank anlegen (sqlite?!)
[ ] Anpassungen in Backend auslagern


## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
