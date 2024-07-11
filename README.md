# Lockedin AI - Resume Builder

## How to get started:

This package is managed by `pnpm`, to install dependencies:

```
pnpm i
```

To run the app

```
pnpm dev
```

## Development tips

### Coding Styles

We are following this coding styles across projects:

- Filename: kebab-case, i.e. `user-component.tsx`
- Component naming: pascal case, for example:

```tsx
export function UserComponent() {
  return <div>Test</div>;
}
```

- function naming: camel case. for example:

```tsx
export function getUser() {
  return;
}
```

### .env

The environment management is done by this file: `src/env.js`. Please also sync your environment variables in the `.env` file that is created from `.env.example`

### css files

Please create all css files within the `src/styles` folder. the `global.css` file is imported at the root layout, there for in order to expose your styles, you need to import the file you created to `global.css`.

Suppose you created a file `button.css`, just import this file in `globals.css` like the following

```css
@import "./button.css";
```
