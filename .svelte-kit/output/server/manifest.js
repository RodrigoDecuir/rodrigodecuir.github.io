export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CNAME","Robots.txt","assets/images/04.gif","assets/images/69154f_908e76f2e5964153860982f11ef369f7~mv2.gif","assets/images/FRIDGE_ANIM_CROP.gif","assets/images/Rose_Bush.gif","assets/images/Wireframe_AcidBurst.gif","assets/images/ani.gif","assets/images/baldbull.gif","assets/images/beavis.gif","assets/images/blue-penguin.gif","assets/images/bye.gif","assets/images/cat.gif","assets/images/char.gif","assets/images/charmander.gif","assets/images/cry.gif","assets/images/dog.gif","assets/images/earl.gif","assets/images/elmo.gif","assets/images/exo.gif","assets/images/feminist.gif","assets/images/flash.gif","assets/images/fly.gif","assets/images/flying.gif","assets/images/frankhats.gif","assets/images/ghostly-chair.gif","assets/images/iratzu.gif","assets/images/jailed.gif","assets/images/jump.gif","assets/images/legs.png","assets/images/monster.gif","assets/images/next.gif","assets/images/rei.gif","assets/images/rumble.gif","assets/images/saxo.gif","assets/images/slap.gif","assets/images/sprite.gif","assets/images/static.gif","assets/images/tongue.png","assets/images/witchfrog.gif","favicon.png"]),
	mimeTypes: {".txt":"text/plain",".gif":"image/gif",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.39031805.js","app":"_app/immutable/entry/app.fe788804.js","imports":["_app/immutable/entry/start.39031805.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/entry/app.fe788804.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/license",
				pattern: /^\/license\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/links",
				pattern: /^\/links\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/writing/aplicadas",
				pattern: /^\/writing\/aplicadas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/writing/automatas",
				pattern: /^\/writing\/automatas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/writing/lineal",
				pattern: /^\/writing\/lineal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/writing/probabilidad",
				pattern: /^\/writing\/probabilidad\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/writing/programacion-lineal",
				pattern: /^\/writing\/programacion-lineal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
