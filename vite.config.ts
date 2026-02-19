import path from 'node:path'
import url from 'node:url'
import { defineConfig } from 'vite'

const _dirname = path.dirname(url.fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        lib: {
            entry: './index.ts',
            fileName: (format: string) => `CellDLEditorRDF.${format}.js`,
            formats: ['es'],
            name: 'CellDLEditorRDF'
        },
        rollupOptions: {
            output: {
                exports: 'named'
            }
        },
        sourcemap: true,
        target: 'esnext'
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext'
        },
        exclude: [
            '*.wasm'
        ]
    },
    resolve: {
        alias: {
            '@oxigraph': path.resolve(_dirname, 'src/assets/oxigraph')
        }
    }
})
