import { defineConfig } from "vite";

export default defineConfig({
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true,
    host: true, // 네트워크에서 접근 가능하도록 설정
  },

  // 빌드 설정
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: true,
    rollupOptions: {
      external: ["fsevents"],
      output: {
        manualChunks: undefined,
      },
    },
  },

  // 정적 파일 처리
  publicDir: "public",

  // 경로 별칭
  resolve: {
    alias: {
      "@": "/src",
      "@styles": "/src/styles",
    },
  },
});
