
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const npm_config_userconfig: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const ANSIBLE_CONFIG: string;
	export const NODE: string;
	export const NOTMUCH_CONFIG: string;
	export const LESS_TERMCAP_se: string;
	export const LESS_TERMCAP_so: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_DATA_HOME: string;
	export const CREDENTIALS_DIRECTORY: string;
	export const XDG_CONFIG_HOME: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const COLOR: string;
	export const ANDROID_SDK_HOME: string;
	export const npm_config_local_prefix: string;
	export const KODI_DATA: string;
	export const SSH_AGENT_PID: string;
	export const npm_config_globalconfig: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const UNISON: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_config_init_module: string;
	export const SYSTEMD_EXEC_PID: string;
	export const _: string;
	export const AWT_TOOLKIT: string;
	export const XAUTHORITY: string;
	export const TERMINAL: string;
	export const WINDOWPATH: string;
	export const MOTD_SHOWN: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const LANG: string;
	export const TMUX_TMPDIR: string;
	export const WINEPREFIX: string;
	export const HISTFILE: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const CARGO_HOME: string;
	export const PYTHONSTARTUP: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const KEYTIMEOUT: string;
	export const INVOCATION_ID: string;
	export const MBSYNCRC: string;
	export const WGETRC: string;
	export const GOMODCACHE: string;
	export const INIT_CWD: string;
	export const XDG_CACHE_HOME: string;
	export const npm_lifecycle_script: string;
	export const npm_config_npm_version: string;
	export const ELECTRUMDIR: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const LESS_TERMCAP_mb: string;
	export const LESS_TERMCAP_me: string;
	export const LESS_TERMCAP_md: string;
	export const npm_config_prefix: string;
	export const ZDOTDIR: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const DICS: string;
	export const XINITRC: string;
	export const SUDO_ASKPASS: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const LESS_TERMCAP_ue: string;
	export const SHLVL: string;
	export const INPUTRC: string;
	export const LESS_TERMCAP_us: string;
	export const MOZ_USE_XINPUT2: string;
	export const XDG_VTNR: string;
	export const DBUS_SESSION_BUS_PID: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const TERMINAL_PROG: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const SQLITE_HISTORY: string;
	export const npm_config_noproxy: string;
	export const BROWSER: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const FZF_DEFAULT_OPTS: string;
	export const npm_config_global_prefix: string;
	export const PASSWORD_STORE_DIR: string;
	export const MAIL: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const GOPATH: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		WINDOWID: string;
		npm_config_userconfig: string;
		npm_config_cache: string;
		LESS: string;
		ANSIBLE_CONFIG: string;
		NODE: string;
		NOTMUCH_CONFIG: string;
		LESS_TERMCAP_se: string;
		LESS_TERMCAP_so: string;
		SSH_AUTH_SOCK: string;
		XDG_DATA_HOME: string;
		CREDENTIALS_DIRECTORY: string;
		XDG_CONFIG_HOME: string;
		MEMORY_PRESSURE_WRITE: string;
		COLOR: string;
		ANDROID_SDK_HOME: string;
		npm_config_local_prefix: string;
		KODI_DATA: string;
		SSH_AGENT_PID: string;
		npm_config_globalconfig: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		UNISON: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		npm_config_init_module: string;
		SYSTEMD_EXEC_PID: string;
		_: string;
		AWT_TOOLKIT: string;
		XAUTHORITY: string;
		TERMINAL: string;
		WINDOWPATH: string;
		MOTD_SHOWN: string;
		GTK2_RC_FILES: string;
		HOME: string;
		LANG: string;
		TMUX_TMPDIR: string;
		WINEPREFIX: string;
		HISTFILE: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		CARGO_HOME: string;
		PYTHONSTARTUP: string;
		MEMORY_PRESSURE_WATCH: string;
		KEYTIMEOUT: string;
		INVOCATION_ID: string;
		MBSYNCRC: string;
		WGETRC: string;
		GOMODCACHE: string;
		INIT_CWD: string;
		XDG_CACHE_HOME: string;
		npm_lifecycle_script: string;
		npm_config_npm_version: string;
		ELECTRUMDIR: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		LESS_TERMCAP_mb: string;
		LESS_TERMCAP_me: string;
		LESS_TERMCAP_md: string;
		npm_config_prefix: string;
		ZDOTDIR: string;
		LESSOPEN: string;
		USER: string;
		DICS: string;
		XINITRC: string;
		SUDO_ASKPASS: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		LESS_TERMCAP_ue: string;
		SHLVL: string;
		INPUTRC: string;
		LESS_TERMCAP_us: string;
		MOZ_USE_XINPUT2: string;
		XDG_VTNR: string;
		DBUS_SESSION_BUS_PID: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		TERMINAL_PROG: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		SQLITE_HISTORY: string;
		npm_config_noproxy: string;
		BROWSER: string;
		PATH: string;
		npm_config_node_gyp: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		FZF_DEFAULT_OPTS: string;
		npm_config_global_prefix: string;
		PASSWORD_STORE_DIR: string;
		MAIL: string;
		npm_node_execpath: string;
		OLDPWD: string;
		GOPATH: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
