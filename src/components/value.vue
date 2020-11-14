<template lang="pug">

	.value-container(
		:class=`{
			basic: isBasic,
			...classes
		}`
	)
		.basic-value(
			:id=`Math.random()`
			v-show=`isBasic`
			:class=`{
				editing: getsmart(thing, "basicValueClicked", false)
			}`
			@click=`valueClick`
			contenteditable
			@input=`updateValue`
			ref="valueInput"
		)
		.complex-value(
			v-if=`!isBasic`
			:class=`{
			}`
		)
			//- "indent-defined": !isRoot
			template(
				v-for=`val,i in valueProps`
				)
				edge(
					:key=`val`
					@event=`handleEmittedEvent`
					:properties=`{
						path: pathAsString+epp(val)
					}`
					v-if=`i < thing.propLimit`
				)
			.show-more(
				v-if=`thing.propLimit < Object.keys(value)`
				@click=`increasePropLimit`
			) show more
			.add-edge-container(
			) 
				.add-edge(
					@click=`addEdge`
				) Add something...
					//- q-icon(
					//- 	name="fas fa-plus"
					//- 	size="12px"
					//- )
				//- @newValue=`newVal => setsmart(thing, 'value'+epp(key), newVal)`
</template>

<script>

import _debounce from 'lodash/debounce';

export default {
	name: 'value',
	data(){
		return {
			vue: {
				shallow: false,
			},
			thing: {
				propLimit: 20
			}
		}
	},
	created(){
		this.ai()
	},
	mounted(){
		this.ai()
	},
	methods: {
		updateValue: _debounce(function(e){
			let type = this.valueType
			let newVal = e.target.innerText
			try {
				if(type === "Boolean"){
					if(newVal === "false"){
						newVal = false
					} else if (newVal === "true"){
						newVal = true
					} else {
						return
					}
				} else {
					newVal = eval(type+'("'+newVal+'")')
				}
			} catch(e){
				// console.error("not a major error: ", e)
			}
			this.setsmart(this.graph, this.pathAsArray, newVal)
		}, 500),
		addEdge(args){

			if(this.valueType == 'Array'){
				this.value.push(undefined)
			} else {
				let edges = Object.keys(this.value).filter((value)=>value.indexOf("new edge") >= 0)
				let newEdge = "new edge"
				let i = 2
				while(edges.indexOf(newEdge) >= 0){
					newEdge = "new edge "+i
					i++
				}
				let pathAsArray = [...this.pathAsArray]
				pathAsArray.push(newEdge)
				this.setsmart(this.graph, pathAsArray, {})
			}
			
		},
		ai(args){
			// this should only run once 
			this.initialize()

			// these will run conditionally and possibly more than once
			this.reloadCss()
			this.renderValue()
		},
		initialize(){
			if(!this.getsmart(this.thing, 'initialized', false)){
				try {
					this.merge(this.thing, this.properties, { clone: false })
				} catch(err){console.error(err)}
				try {
					if(this.isRoot){
						window.rootVue = this
						this.gosmart(globalThis, 'v', this)
					}
				} catch(err){console.error(err)}
				this.setsmart(this.thing, 'initialized', true)
			}
		},
		renderValue() {
			if(this.isBasic){
				let ret = this.value
				if(typeof this.value === 'undefined') ret = 'undefined'
				if(this.value === null) ret = 'null'
				if(typeof this.value == 'boolean') ret = this.value.toString()
				// if(!this.equal(this.cachedValue, ret)){
				// }
				let innerText = this.getsmart(this.$refs, 'valueInput.innerText', undefined)
				if(innerText != ret){
					var that = this
					let fn = function(){
						let debug=1
					}
					setTimeout(fn.bind(this), 2000)
					this.setsmart(this.$refs, 'valueInput.innerText', ret)
				}
			}
		},
		increasePropLimit(){
			this.propLimit += 20
		},
		valueClick(e){

			let clicks = this.gosmart(this.thing, "clicks", 0)+1
			
			if(clicks > 1){
				
				clearTimeout(this.getsmart(this.thing, "doubleClickTimeout", false))
				
				this.setsmart(this.thing, "basicValueClicked", false)

				this.setsmart(this.thing, "clicks", 0)

			} else {
				
				this.setsmart(this.thing, "clicks", clicks)

				this.setsmart(this.thing, "doubleClickTimeout", setTimeout(()=>{

					e.preventDefault()

					this.setsmart(this.thing, "basicValueClicked", true)

					this.setsmart(this.thing, "clicks", 0)
					
				}, 300))
				
			}
		},
		// TO DO
		// fix getsmart via array of paths
		// investigate pointer not being persistent through state
		reloadCss(){
			if(this.localPath == "css"){
				let newStylesheet = this.jss.createStyleSheet(this.value).attach()
				let oldStylesheet = this.getsmart(
					window.nrgraph, 
					[
						...this.parentPathAsArray, 
						"stylesheet"
					], 
					undefined
				)
				if(oldStylesheet){
					this.jss.removeStyleSheet(oldStylesheet)
				}
				this.setsmart(
					window.nrgraph, 
					[
						...this.parentPathAsArray, 
						"stylesheet"
					], 
					newStylesheet
				)
			}
		},
		handleEmittedEvent(event){
			if(event.name == "delete" && event.value === true && event.path && event.path.constructor === Array){
				this.deletesmart(this.value, event.path)
			} else {
				this.$emit("event", event)
			}
		},
	},
	computed: {
		basicValueFocused: {
			get(){
				return 
			}
		},
		valueProps: {
			get(){
				let ret = Object.keys(this.value)
				if(this.value.constructor != Array){
					let renderOrder = this.getsmart(this.graph, [...this.ppp("root.meta.graph"), this.pathAsString, ...this.ppp("settings.renderOrder")], [])
					if(renderOrder.constructor == Array && renderOrder.length > 0){
						
						// diff the ret and renderOrder properties so that nothing is rendered twice
						// also remove any properties in renderOrder which are not in the Object's keys anymore

						// removing non-existant keys
						renderOrder = renderOrder.filter(prop => ret.indexOf(prop) >= 0)

						// removing duplicates from Object.keys
						ret = ret.filter(prop => renderOrder.indexOf(prop) < 0)

						// merge renderOrder props and Object keys
						ret.unshift(...renderOrder)

					}
				}
				return ret
			}
		},
		isRoot: {
			get(){
				let ret = this.getsmart(this, 'properties.root', false)
				return ret == true
			}
		},
	},
  watch: {
		'isRoot': {
			handler: function(n,o){
				if(n){
					this.$native.window.rootVue = this
				}
			}
		},
		'value': {
			deep: true,
			handler: function(n,o){
				this.ai()
			}
		},
		'properties': {
			handler: function(n,o){
				if(!this.equal(n,o)){
					this.merge(this.thing, n, { clone: false })
					// this.schema(this, n)
					// this.propertiesHandler(n)
				}
			}
		},
  },
	props: {
		properties: {}
	},
	components: {
		edge: () => import('./edge.vue')
	}
}
</script>