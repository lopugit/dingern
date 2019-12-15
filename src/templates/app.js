/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
import Vue from 'vue'
import './import-quasar.js'
<% if (ctx.mode.ssr) { %>
import <%= framework.all === true ? 'Quasar' : '{ Quasar }' %> from 'quasar'
window && (window.Quasar = Quasar)
<% } %>

import App from 'app/<%= sourceFiles.rootComponent %>'
window && (window.App = App)

<% if (store) { %>
import createStore from 'app/<%= sourceFiles.store %>'
window && (window.createStore = createStore)
<% } %>
import createRouter from 'app/<%= sourceFiles.router %>'
window && (window.createRouter = createRouter)

<% if (ctx.mode.capacitor && capacitor.hideSplashcreen !== false) { %>
import { Plugins } from '@capacitor/core'
window && (window.Plugins = Plugins)

const { SplashScreen } = Plugins
<% } %>

<% if (__vueDevtools !== false) { %>
import vueDevtools from '@vue/devtools'
window && (window.vueDevtools = vueDevtools)
<% } %>

export default function (<%= ctx.mode.ssr ? 'ssrContext' : '' %>) {
	// create store and router instances
	<% if (store) { %>
	const store = typeof createStore === 'function'
		? createStore({Vue<%= ctx.mode.ssr ? ', ssrContext' : '' %>})
		: createStore
	window && (window.store = store)
	<% } %>
	const router = typeof createRouter === 'function'
		? createRouter({Vue<%= ctx.mode.ssr ? ', ssrContext' : '' %><%= store ? ', store' : '' %>})
		: createRouter
	window && (window.router = router)
	<% if (store) { %>
	// make router instance available in store
	store.$router = router
	<% } %>

	// Create the app instantiation Object.
	// Here we inject the router, store to all child components,
	// making them available everywhere as `this.$router` and `this.$store`.

	let app = (
				store && 
				store.state && 
				store.state.graph &&
				store.state.graph.root &&
				0
			) ?
			store.state.graph.root :
			App

	app.AAA = 3

	<% if (!ctx.mode.ssr) { %>
	app.el = <% print(sourceFiles.rootId ? JSON.stringify("#"+sourceFiles.rootId) : '\"#q-app\"') %>
	<% } %>
	
	app.router = router
	app.store = store

	<% if (__needsAppMountHook === true) { %>
	app.mounted = mounted() {
		<% if (ctx.mode.capacitor && capacitor.hideSplashscreen !== false) { %>
		SplashScreen.hide()
		<% } %>

		<% if (__vueDevtools !== false) { %>
		vueDevtools.connect('<%= __vueDevtools.host %>', <%= __vueDevtools.port %>)
		<% } %>
	}
	<% } %>


	// <% if (!ctx.mode.ssr) { %>
	// 	app.el = app.el || <% print(sourceFiles.rootId ? JSON.stringify(sourceFiles.rootId) : '\"#q-app\"') %>
	// <% } %>
	
	// app.router = app.router || router
	// app.store = app.store || store

	// <% if (__needsAppMountHook === true) { %>
	// app.mounted = app.mounted || mounted() {
	// 	<% if (ctx.mode.capacitor && capacitor.hideSplashscreen !== false) { %>
	// 	SplashScreen.hide()
	// 	<% } %>

	// 	<% if (__vueDevtools !== false) { %>
	// 	vueDevtools.connect('<%= __vueDevtools.host %>', <%= __vueDevtools.port %>)
	// 	<% } %>
	// }
	// <% } %>
		
	window && (window.app = app)
	<% if (ctx.mode.ssr) { %>
	Quasar.ssrUpdate({ app, ssr: ssrContext })
	<% } %>

	window && (window.testy = "testy")
	

	// expose the app, the router and the store.
	// note we are not mounting the app here, since bootstrapping will be
	// different depending on whether we are in a browser or on the server.
	return {
		app,
		<%= store ? 'store,' : '' %>
		router
	}
}
