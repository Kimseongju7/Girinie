// / <reference types="vite/client" />
// / <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
    const src: string;
    export default src;
  }
  declare module '*.png';
  declare module '*.jpg';
  declare module '*.jpeg';