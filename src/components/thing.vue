<template lang='pug'>
	#q-app.thing
		template(
			v-if=`(typeof thing == 'undefined' || typeof thing == 'function' || typeof thing == 'string' || typeof thing == 'number') `
		)
			input(type="text" v-model='thingValue').thing.value
		template(
			v-if=`typeof thing !== 'undefined' && (thing instanceof Object || thing instanceof Array) ` 
			v-for='(key, index) in metathing.keys' 
		)

			//- .thing {{ "prop" + " " + "key" + " " + "index" }}
			//- .thing {{ prop + " " + key + " " + index}}
			//- v-model='metathing.keys[key]'
			input.thing(
				v-model='metathing.keys[key]'
				type="text" 
				@click='toggleProp({key})')
			//- .thing {{ key }}
			//- .thing {{ thing[key] }}
			//- .thing {{ ( metathing && metathing.show && metathing.show[key] ) }}
			thing(
				v-if='metathing && metathing.show && metathing.show[key]'
				:thing='thing[key]'
			)
</template>

<script>
import thing from './thing.vue'
export default {
	name: 'thing',
	data () {
		return {
			metathing: {
				show: {},
				keys: {}
			},
			uuid: this._uid
		}
	},
	updated(){
		if(this.thing && this.thing.updated && typeof this.thing.updated == 'function'){
			this.thing.updated({vue:this})
		}
	},
	created () {
		
		if(!window.V) window.V = this && this.$set(this, 'thing', this)

		if(this.thing && this.thing.created && typeof this.thing.created == 'function'){
			this.thing.created({vue:this})
		}
		if(this.thing !== undefined){
			this.$set(this, 'metathing', this.metathing || { keys: {} })
			this.$set(this.metathing, 'keys', this.metathing.keys || {})
			let keys = Object.keys(this.thing)
			for(var prop in keys){
				if(typeof prop == 'string'){
					this.$set(this.metathing.keys, keys[prop], keys[prop])
				}
			}
		}

	},
	methods: {
		toggleProp(args){
			// console.log('args', args)
			// console.log('args.key instanceof Number', args.key instanceof Number)
			// console.log('args.key instanceof String', args.key instanceof String)
			// console.log('args.key', args.key)
			// console.log('args && args.key && this.metathing', (args && (typeof args.key !== undefined) && this.metathing))
			if(args && (typeof args.key !== undefined) && this.metathing){
				// console.log('doing1')
				if(!this.metathing.show){ this.metathing.show = {} }
				// console.log('doing2')
				console.log('switching to ', !this.metathing.show[args.key])
				this.$set(this.metathing.show, args.key, !this.metathing.show[args.key])
			}
		},
		showProp(args){
			if(args && (args.key || args.key instanceof Number || args.key instanceof String) && this.metathing && this.metathing.show && this.metathing.show instanceof Array ){
				return this.metathing.show[args.key] ? true : false
			}
			return false
		}
	},
	computed: {
		thingValue: {
			get(){
				if(typeof this.thing == 'undefined' || typeof this.thing == 'string' || typeof this.thing == 'number'){
					return this.thing
				} else if (typeof this.thing == 'function') {
					if(this.thing.toString && typeof this.thing.toString == 'function')
					return this.thing.toString()
				} else {
					return 'There was an error in Dingern'
				}
			},
			set(value){
				if(typeof value == 'undefined' || (typeof value == 'string' ) || typeof value == 'number'){
					this.$set(this, 'thing', value)
				} else if (typeof value == 'function') {
					if(value.toString && typeof value.toString == 'function'){}
					// this.$set(this, 'thing', eval(value.toString())
				} else {
					return 'There was an error in Dingern'
				}

			}
		}
	},
	props: {
		thing: {},
	},
	components: {
		thing
	},
	watch: {
		// '$store.state.entity': function(){
		//   this.entity = this.$store.state.entity
		// },
	},  
	route: {
		canActivate(){
			return true
		}
	}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="sass" scoped>
// @import 'src/styles/vars'

.thing
	width: 100%
	max-width: 100%
	overflow: hidden
	// background: $grey
	
</style>
