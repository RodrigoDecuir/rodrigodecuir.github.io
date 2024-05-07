export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/fonts/aller/aller.otf","assets/fonts/aller/aller.ttf","assets/fonts/aller/aller.woff","assets/fonts/aller/aller.woff2","assets/fonts/aller/source.txt","assets/fonts/riffic/riffic.otf","assets/fonts/riffic/riffic.ttf","assets/fonts/riffic/riffic.woff","assets/fonts/riffic/riffic.woff2","assets/fonts/riffic/source.txt","assets/images/001.png","assets/images/04.gif","assets/images/69154f_908e76f2e5964153860982f11ef369f7~mv2.gif","assets/images/FRIDGE_ANIM_CROP.gif","assets/images/Rose_Bush.gif","assets/images/Wireframe_AcidBurst.gif","assets/images/ani.gif","assets/images/baldbull.gif","assets/images/beavis.gif","assets/images/blue-penguin.gif","assets/images/bye.gif","assets/images/cat.gif","assets/images/cesar-32.png","assets/images/char.gif","assets/images/charmander.gif","assets/images/cry.gif","assets/images/dog.gif","assets/images/earl.gif","assets/images/elmo.gif","assets/images/exo.gif","assets/images/feminist.gif","assets/images/flash.gif","assets/images/fly.gif","assets/images/flying.gif","assets/images/frankhats.gif","assets/images/ghostly-chair.gif","assets/images/iratzu.gif","assets/images/jailed.gif","assets/images/jesus-32.png","assets/images/jump.gif","assets/images/legs.png","assets/images/manik-32.png","assets/images/monster.gif","assets/images/next.gif","assets/images/rei.gif","assets/images/rumble.gif","assets/images/saxo.gif","assets/images/slap.gif","assets/images/sprite.gif","assets/images/static.gif","assets/images/tongue.png","assets/images/victor-32.png","assets/images/witchfrog.gif","favicon.png"]),
	mimeTypes: {".otf":"font/otf",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".txt":"text/plain",".png":"image/png",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.46cd1f14.js","app":"_app/immutable/entry/app.3395c1f9.js","imports":["_app/immutable/entry/start.46cd1f14.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/entry/app.3395c1f9.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.19b44a2f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/book",
				pattern: /^\/book\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/license",
				pattern: /^\/license\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/links",
				pattern: /^\/links\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/writing/(article)/(aplicadas)/aplicadas",
				pattern: /^\/writing\/aplicadas\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/writing/(article)/(automatas)/automatas",
				pattern: /^\/writing\/automatas\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/writing/(article)/(lineal)/lineal",
				pattern: /^\/writing\/lineal\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(app)/writing/(article)/(probabilidad)/probabilidad",
				pattern: /^\/writing\/probabilidad\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/writing/(sketch)/(s-01)/s-01",
				pattern: /^\/writing\/s-01\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(app)/writing/(article)/(tg2)/tg2",
				pattern: /^\/writing\/tg2\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 19 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
