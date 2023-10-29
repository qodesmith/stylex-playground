import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import stylexPlugin from '@stylexjs/rollup-plugin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [
    react(),
    // stylexPlugin({
    //   // Required. File path for the generated CSS file.
    //   fileName: './.build/stylex.css',
    //   // default: false
    //   // dev: false,
    //   // prefix for all generated classNames
    //   classNamePrefix: 'x',
    //   // Required for CSS variable support
    //   unstable_moduleResolution: {
    //     // type: 'commonJS' | 'haste'
    //     // default: 'commonJS'
    //     type: 'commonJS',
    //     // The absolute path to the root directory of your project
    //     rootDir: path.resolve(),
    //   },
    // }),
  ],
})
