/// <reference types="vite/client" />

declare module '*.jfif' {
  const src: string
  export default src
}

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly VITE_META_PIXEL_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
