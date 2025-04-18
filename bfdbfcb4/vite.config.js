import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import devtools from 'solid-devtools/vite'

// https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
// const plugins = [devtools(), solidPlugin()]
const plugins = [solidPlugin()]
const port = 3000
const server = { port }
const target = 'esnext'
const build = { target }
const config = { plugins, server, build }

export default defineConfig(config)
