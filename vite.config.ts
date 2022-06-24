import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
  server: {
    port: 5001, //启动端口
  },
});
