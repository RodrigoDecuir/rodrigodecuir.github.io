import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()]
	//build: {
	//	outDir: './build' // relative to index.html
	// emptyOutDir: true, // true if outDir is inside root. if outDir is not inside root, uncomment this.
	//}
};

export default config;

/*
//import { defineConfig } from 'vite';
export default defineConfig({
	plugins: [sveltekit()]
});
*/
