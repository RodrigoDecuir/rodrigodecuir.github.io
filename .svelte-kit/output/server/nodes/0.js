

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2942820a.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.19b44a2f.js"];
export const stylesheets = ["_app/immutable/assets/0.4d371ade.css"];
export const fonts = [];
