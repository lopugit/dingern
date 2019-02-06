<template lang='pug'>
	div(
		:class='{indented: !render}'
		v-bind="thingMutable ? thingMutable.$dom : undefined"
		@click="thingMutable ? thingMutable.$dom ? thingMutable.$dom.onclick : undefined : undefined"
		)
		div(
			v-model="thingMutable"
			contenteditable="true" 
			:class='{indented: !render}'
			@keydown="setThing"
			v-if="(!(typeof thingMutable == 'function' && render)&&(typeof thingMutable !== 'object') || thingMutable == null)"
			@input="setThing"
			) {{  ""+((typeof thingMutable == 'function') ? thingMutable : render || true ? thingMutable : jsmart.stringify(thingMutable)) }} 
		//- template(
			v-else-if="showPropsMutable && typeof thingMutable == 'object'" 
			v-for="(prop, key2, index2) in props"
			)
			//- .debug1 {{ ""+prop }}
			//- .debug2 {{ ""+key2 }}
			//- .debug3 {{ ""+index2 }}
			div(
				:class='{indented: !render}' 
				v-if="!render" 
				@click.self=`togglePropValue({shit: props, index: typeof index2 == 'number' ? index2 : key2})`
				) {{ ""+(key2 || index2) }} 
			thing(
				v-if="(render || showPropsValsDbMutable[typeof index2 == 'number' ? index2 : key2])"
				:meta=`{
					isChild: true
				}` 
				:thing=`props[key2]`
				:key1=`key2`
				:index1=`typeof index2 == 'number' ? index2 : key2`
				:showProps=`render || showPropsValsDbMutable[typeof index2 == 'number' ? index2 : key2]`
				)
				//- :showProps=`showPropsValsDbMutable[index2]`
				//- .thing.indented.value(v-else-if="showPropsValsDbMutable[index2] && prop && prop.constructor && (prop.constructor == Number || prop.constructor == String)") {{  jsmart.stringify(prop) }}
				//- .thing {{  jsmart.stringify(prop) }}
		template(
			v-else-if="showPropsMutable && typeof thingMutable == 'object'" 
			v-for="(prop, key2, index2) in Object.keys(props).sort()"
			)
			//- .debug1 {{ ""+prop }}
			//- .debug2 {{ ""+key2 }}
			//- .debug3 {{ ""+index2 }}
			//- .debug2 {{ prop }}
			div(
				:class='{indented: !render}' 
				v-if="!render && (thingMutable && thingMutable.domSchema && thingMutable.domSchema.includes && thingMutable.domSchema.includes(prop))" 
				@click.self=`togglePropValue({shit: props, index: typeof index2 == 'number' ? index2 : prop})`
				) {{ ""+(prop || index2) }} 
			thing(
				v-if="(render || showPropsValsDbMutable[typeof index2 == 'number' ? index2 : prop]) && (thingMutable && thingMutable.domSchema && thingMutable.domSchema.includes && thingMutable.domSchema.includes(prop))"
				:meta=`{
					isChild: true
				}` 
				:thing=`props[prop]`
				:key1=`prop`
				:index1=`typeof index2 == 'number' ? index2 : prop`
				:showProps=`render || showPropsValsDbMutable[typeof index2 == 'number' ? index2 : prop]`
				v-on:input="setThing({path: prop, ...$event })"
				)
				//- :showProps=`showPropsValsDbMutable[index2]`
				//- .thing.indented.value(v-else-if="showPropsValsDbMutable[index2] && prop && prop.constructor && (prop.constructor == Number || prop.constructor == String)") {{  jsmart.stringify(prop) }}
				//- .thing {{  jsmart.stringify(prop) }}
		//- template(v-else)
		//- 	.indented.value		
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// @import 'src/styles/vars'
.thing
	// width: 100%
	// max-width: 100%
	// overflow: hidden
	// background: $grey
.indented
	padding: 12px 0px 0px 25px
</style>

<script>
	import thing from './thing.vue'
	export default {
		name: 'thing',
		data() {
			return {
				uuid: this._uid,
				thingMutable: this.thing,
				showPropsMutable: this.showProps,
				showPropsValsDbMutable: this.showPropsValsDb,
				
			}
		},
		sockets: {
			connect: function() {
				// console.log("socket connect vue side")
			},
			// giveObjects(data){
			//   // console.log(data)
			//   if(this.uuid == data.id){
			//     this.objects = data.objects
			//   }
			// }
		},
		beforeMount() {
			if (this.thingMutable && this.thingMutable.$exe) {
				this.thingMutable.$exe({
					V: this
				})
			}
		},
		created() {
		},
		computed: {
			// thingMutableBindable: {
			// 	get() {
			// 		return Object.keys(this.thingMutable).filter(function(key){return new Regex(/$(\_|\$|\\|\/|\||)/).test(key) })
			// 	}
			// },
			render: {
				get() {
					return window ? window.thing ? window.thing.renderPretty : false : false
				},
				set() {
	
				}
			},
			thing2: {
				get() {
					return this.thingMutable
				},
				set(set) {
					this.thingMutable = set
				}
	
			},
			props: {
				get() {
					return this.thingMutable
				},
				set(set) {
					this.thingMutable = set
				}
			}
		},
		methods: {
			setThing(args) {
				console.log('args', args)
				console.log('this', this)
				console.log('args ? args.target ? args.target.innerText : this.thingMutable : this.thingMutable', args ? args.target ? args.target.innerText : this.thingMutable : this.thingMutable)
				if (args.push && args.path && this.thingMutable[args.path]) {
					this.$set(this.thingMutable, args.path, args.thing)
					// this.$set(this.value, args.path, args.thing)
					this.$emit("input", {
						thing: this.thingMutable,
						push: true
					})
				} else if (args && args.target && args.target.innerText && this.thingMutable) {
					if (args.keyCode === 13 && !args.shiftKey) {
						args.preventDefault();
						// this.submitForm();
						// const pos = args.target.selectionStart -1
						this.$set(this, "thingMutable", args.target.innerText)
						this.$set(this, "value", args.target.innerText)
						this.$emit("input", {
							thing: this.thingMutable,
							push: true,
							input: args
						})
						// this.$nextTick(() => {
	
						// 	args.target.selectionEnd = pos
						// })
					}
				}
			},
			togglePropValue(args) {
				/**
				 * @var args @type {}
				 * * @var args.index @type {Number}
				 */
				let length = this.showPropsValsDbMutable.length
				if (length < args.index) {
					this.showPropsValsDbMutable[args.index] = false
				}
				this.showPropsValsDbMutable[args.index] = !this.showPropsValsDbMutable[args.index]
				this.showPropsValsDbMutable.splice(args.index, 1, this.showPropsValsDbMutable[args.index])
	
			}
			// getObjects(opts){
			//   this.$socket.emit('getObjects', opts)
			// }
		},
		props: {
			app: {},
			key1: {},
			index1: {},
			meta: {},
			showProps: {
				default: false
			},
			showPropsValsDb: {
				default: function() {
					return []
				}
			},
			thing: {},
			"siteTitle": {}
		},
		components: {
			thing
		},
		watch: {
			// '$store.state.thing': function(){
			//   this.thing = this.$store.state.thing
			// },
		},
		route: {
			canActivate() {
				return true
			}
		}
	}
</script>