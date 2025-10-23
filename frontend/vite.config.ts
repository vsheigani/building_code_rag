import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [preact(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(import.meta.dirname, "./src"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:8000",
				changeOrigin: true,
			},
		},
	},
});
