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

Vue.use(Vuex)

window.SS = stateSmarts
window.stateSmarts = stateSmarts
window.resetVuex = function(){ localStorage.removeItem('vuex');console.log('done') ; stateSmarts.setsmart(window, '$store.state.graph', {})}

// window.resetVuex()

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      graph
    },
		strict: false,
		plugins: [
			vuexPersistedState({
				paths: ['graph'],
				setState: _throttle((key,state,storage)=>{
					storage.setItem(key, smarts.stringify(state))
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
	window.graph = smarts.getsmart(window.$store, "state.graph", undefined)
	window.nrgraph = {}
  return Store
}
