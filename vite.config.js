import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@schemas": path.resolve(__dirname, "./src/schemas"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@services": path.resolve(__dirname, "./src/services"),
			"@layouts": path.resolve(__dirname, "./src/layouts"),
			"@config": path.resolve(__dirname, "./src/config"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@lib": path.resolve(__dirname, "./src/lib"),
		},
	},
});
