import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistedState from 'vuex-persistedstate'
import _throttle from 'lodash/throttle';

let smarts = require('smarts')({})
let stateSmarts = require('smarts')({
  vue: {
    store: true
  }
}).methods

import graph from './graph'
import { LocalStorage } from 'quasar';

Vue.use(Vuex)

window.SS = stateSmarts
window.stateSmarts = stateSmarts
window.resetVuex = window.clearCache = window.clearStorage = function(){ 
	try {
		localStorage.removeItem('vuex')
		console.log('done')
		let stringifiedGraph = localStorage.getItem('vuexSource')
		let graph = smarts.parse(stringifiedGraph)
		
		stateSmarts.setsmart(window, '$store.state.graph.thing', graph.thing)

		localStorage.setItem('vuex', stringifiedGraph)
	} catch(e){
		smarts.setsmart(window, 'errors', [])
		window.errors.push(e)
	}
}

// window.resetVuex()

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
	/**
	 * store a backup of the source graph in localStorage
	 */

	let state = smarts.stringify(smarts.getsmart(graph, 'state', {}))

	localStorage.setItem('vuexSource', state)
	
  const Store = new Vuex.Store({
    modules: {
      graph
    },
		strict: false,
		plugins: [
			vuexPersistedState({
				paths: ['graph'],
				merge: (obj1,obj2)=>{
					return smarts.schema(obj2,obj1)
				},
				setState: _throttle((key,state,storage)=>{
					let string = smarts.stringify(state)
					storage.setItem(key, string)
				}, 500),
				getState: (key, storage) => {
					// debug
					// let store = storage.getItem(key) || "[]"
					// let ret = smarts.parse(store)
					// return ret
					let ret = {}
					try {
						let localStore = storage.getItem(key)
						if(localStore === null) return {}
						ret = smarts.parse(localStore)
					} catch(err){
						console.error('error parsing persisted state: ', err)
						ret = JSON.parse(storage.getItem(key) || "{}")
					}
					// storage.removeItem(key+'writeLock')
					return ret;
				},
			})
		],
    // enable strict mode (adds overhead!)
    // for dev mode only
    // strict: process.env.DEV
  })
	window.$store = Store
	window.graph = smarts.getsmart(window.$store, "state.graph.thing", undefined)
	window.nrgraph = {}
  return Store
}
