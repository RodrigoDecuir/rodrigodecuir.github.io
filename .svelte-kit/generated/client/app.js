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
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25')
];

export const server_loads = [];

export const dictionary = {
		"/": [12],
		"/(app)/book": [13,[2]],
		"/(app)/license": [14,[2]],
		"/(app)/links": [15,[2]],
		"/(app)/notes": [16,[2]],
		"/(app)/notes/(article)/(aplicadas)/aplicadas": [17,[4]],
		"/(app)/notes/(article)/(automatas)/automatas": [18,[5]],
		"/(app)/notes/(article)/(lineal)/lineal": [19,[6]],
		"/(app)/notes/(article)/(probabilidad)/probabilidad": [20,[7]],
		"/(app)/notes/(sketch)/(s-01)/s-01": [24,[11]],
		"/(app)/notes/(article)/(tg2)/tg2": [21,[8]],
		"/(app)/notes/(notes)/w-01": [22,[2,9]],
		"/(app)/notes/(notes)/w-02": [23,[2,9]],
		"/(app)/projects": [25,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';