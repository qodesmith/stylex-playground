# StyleX Playground

This is a test project to try out Facebook's [StyleX](https://stylex-docusaurus.vercel.app/) css-in-js library. I loved using it when I worked at Facebook and I'm excited to try out their open-sourced version!

## Installation Journey

Installed the latest version of StyleX:

```bash
bun i @stylexjs/stylex@beta
```

Doing this causes an error, probably because I haven't integrated StyleX into the build system for development with Vite yet:

```
Uncaught Error: stylex.create should never be called. It should be compiled away.
```

I tried building the app with Vite, adjusted the html to point to local files (i.e. `/file.js` => `./file.js`), and still received the same error from StyleX. So far this all seems expected since I haven't introduced any StyleX-specific build steps yet.
