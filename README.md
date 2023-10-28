# StyleX Playground

This is a test project to try out Facebook's [StyleX](https://stylex-docusaurus.vercel.app/) css-in-js library. I loved using it when I worked at Facebook and I'm excited to try out their open-sourced version!

## Installation Journey

### Step 1

Installed the beta version of StyleX:

```bash
bun i @stylexjs/stylex@beta
```

Doing this causes an error, probably because I haven't integrated StyleX into the build system for development with Vite yet:

```
Uncaught Error: stylex.create should never be called. It should be compiled away.
```

I tried building the app with Vite, adjusted the html to point to local files (i.e. `/file.js` => `./file.js`), and still received the same error from StyleX. So far this all seems expected since I haven't introduced any StyleX-specific build steps yet.

### Step 2

Installed the beta version of the StyleX Rollup plugin and added it to `vite.config.ts`:

```bash
bun i -D @stylexjs/rollup-plugin@beta
```

Starting the dev server produced an error about a missing page. I went through the process of installing the package, running the dev server, and getting more missing package errors. Here's the 3 packages I needed to install before the dev server would start

- `@babel/plugin-syntax-flow`
- `@babel/plugin-syntax-jsx`
- `@babel/plugin-syntax-typescript`
