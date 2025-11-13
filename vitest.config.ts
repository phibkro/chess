import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [],
	test: {
		setupFiles: [path.join(__dirname, "setupTests.ts")],
		include: ["./test/**/*.test.ts"],
		globals: true,
	},
	resolve: {
		alias: {
			"@phibkro/chess/test": path.join(__dirname, "test"),
			"@phibkro/chess": path.join(__dirname, "src"),
		},
	},
});
