<template lang="pug">

	.value-container
		.value(
			v-if=`basic`
			contenteditable
			@input=`updateValue`
			ref="valueInput"
		)
		.value(
			v-else
		)
			template(
				v-for=`val,key in value`
				)
				edge(
						:properties=`{
							path: getsmart(thing, 'path', undefined)+epp(key)
						}`
					)
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
			thing: {},
			cachedValue: null
		}
	},
	created(){
		globalThis.$store = this.$store
		this.ai()
	},
	computed: {
		graph: {
			get(){
				return this.$store.state.graph.thing
			}
		},
		value: {
			get(){
				let ret = this.getsmart(this.graph, this.thing.path, undefined)
				return ret
			}
		},
		basic: {
			get(){
				return !(typeof this.value == 'object' || typeof this.value == 'array') || (this.value === null)
			}
		},
		isRoot: {
			get(){
				let ret = this.getsmart(this, 'properties.root', false)
				return ret == true
			}
		},
		prototypeProperties: {
			get(){
				let ret = []
				if(typeof this.value == 'function'){
					let tmp = { value: this.value }
					for(let key of Object.getOwnPropertyNames(tmp.prototype)) {
						ret.push(key)
					}
				} else {
					for(let key of Object.getOwnPropertyNames(Object.getPrototypeOf(this.value))) {
						ret.push(key)
					}
				}
				return ret
			}
		},
		localPath: {
			get(){
				let pathArray = this.pathArray
				return pathArray[pathArray.length-1]
			}
		},
		pathArray: {
			get(){
				return this.parsePropertyPath(this.thing.path)
			}
		}
	},
	methods: {
		updateValue(e){
			this.setsmart(this.graph, this.thing.path, e.target.innerText)
			// this.$emit('newValue', e.target.innerText)
		},
		addEdge(args){
			let edges = Object.keys(this.value).filter((value)=>value.indexOf("new edge") >= 0)
			let newEdge = "new edge"
			let i = 2
			while(edges.indexOf(newEdge) >= 0){
				newEdge = "new edge "+i
				i++
			}
			this.setsmart(this.graph, this.thing.path+this.epp(newEdge), undefined)
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
			if(this.basic){
				let ret = this.value
				if(typeof this.value === 'undefined') ret = 'undefined'
				if(this.value === null) ret = 'null'
				// if(!this.equal(this.cachedValue, ret)){
				// }
				let innerText = this.getsmart(this.$refs, 'valueInput.innerText', ret)
				if(innerText != ret){
					this.setsmart(this.$refs, 'valueInput.innerText', ret)
				}
			}
			
		},
		// TO DO
		// fix getsmart via array of paths
		// investigate pointer not being persistent through state
		reloadCss(){
			if(this.localPath == "css"){
				let newStylesheet = this.jss.createStyleSheet(this.value).attach()
				window.test = newStylesheet
				if(this.pathArray instanceof Array){
					let parentPath = this.pathArray.slice(0,this.pathArray.length-1)
					let oldStylesheet = this.getsmart(window.nrgraph, [...parentPath, "stylesheet"], undefined)
					if(oldStylesheet){
						this.jss.removeStyleSheet(oldStylesheet)
					}
					this.setsmart(
						window.nrgraph, 
						[...parentPath, "stylesheet"], 
						newStylesheet
					)
				}
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