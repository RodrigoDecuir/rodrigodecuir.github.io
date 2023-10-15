export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')
];

export const server_loads = [];

export const dictionary = {
		"/": [11],
		"/(app)/license": [12,[2]],
		"/(app)/links": [13,[2]],
		"/(app)/projects": [14,[2]],
		"/(app)/writing": [15,[2]],
		"/(app)/writing/(article)/(aplicadas)/aplicadas": [16,[4]],
		"/(app)/writing/(article)/(automatas)/automatas": [17,[5]],
		"/(app)/writing/(article)/(lineal)/lineal": [18,[6]],
		"/(app)/writing/(article)/(probabilidad)/probabilidad": [19,[7]],
		"/(app)/writing/(sketch)/(s-01)/s-01": [21,[10]],
		"/(app)/writing/(article)/(tg2)/tg2": [20,[8]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';