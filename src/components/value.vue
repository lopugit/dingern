<template lang="pug">

	.value-container
		.basic-value(
			:id=`Math.random()`
			v-show=`isBasic`
			contenteditable
			@input=`updateValue`
			ref="valueInput"
		)
		.complex-value(
			v-if=`!isBasic`
		)
			template(
				v-for=`val,key,i in value`
				)
				edge(
						:properties=`{
							path: pathAsString+epp(key)
						}`
						v-if=`i < thing.propLimit`
					)
			.show-more(
				v-if=`thing.propLimit < Object.keys(value)`
				@click=`increasePropLimit`
			) show more
			.add-edge(
				@click=`addEdge`
				contenteditable
			) 
				q-icon(
					name="fas fa-plus"
					size="8px"
				)
				//- @newValue=`newVal => setsmart(thing, 'value'+epp(key), newVal)`
</template>

<script>

export default {
	name: 'value',
	data(){
		return {
			vue: {
				shallow: false,
			},
			thing: {
				propLimit: 20
			},
			cachedValue: null
		}
	},
	created(){
		this.ai()
	},
	mounted(){
		this.ai()
	},
	methods: {
		updateValue(e){
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
				console.error(e)
			}
			this.setsmart(this.graph, this.pathAsArray, newVal)
		},
		addEdge(args){
			let edges = Object.keys(this.value).filter((value)=>value.indexOf("new edge") >= 0)
			let newEdge = "new edge"
			let i = 2
			while(edges.indexOf(newEdge) >= 0){
				newEdge = "new edge "+i
				i++
			}
			let pathAsArray = [...this.pathAsArray]
			pathAsArray.push(newEdge)
			this.setsmart(this.graph, pathAsArray, undefined)
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
	},
	computed: {
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
			deep: false,
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