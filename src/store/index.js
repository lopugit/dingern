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

window.clear = function(){ localStorage.removeItem('vuex');console.log('done') ; smarts.setsmart(window, '$store.state.app', {})}


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      graph
    },
		plugins: [
			vuexPersistedState({
				paths: ['graph'],
				setState: _throttle((key,state,storage)=>{
					// storage.setItem(key, smarts.stringify(state))
				}, 500),
				getState: (key, storage) => {
					// debug
					// let store = storage.getItem(key) || "[]"
					// let ret = smarts.parse(store)
					// return ret
					let ret = ""
					// try {
					// 	ret = smarts.parse(storage.getItem(key) || "[]")
					// } catch(err){
					// 	console.error('error parsing persisted state: ', err)
					// 	ret = JSON.parse(storage.getItem(key) || "{}")
					// }
					// storage.removeItem(key+'writeLock')
					return ret;
				},
			})
		],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
