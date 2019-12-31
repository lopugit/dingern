<template lang="pug">

	//- :id=`isRoot() ? 'root' : ''`
	.value(
	)
		style {{ value.style }}
		//- template(v-for=`edge in edges`)
		.editable-props-container.props-container
			.editable-props-title editable props
			.editable-props.props-list
				//- edge( :editable-props=`{ value: _watchers }`)
				template(v-for=`edge in editableProps`)
					edge(
							:props=`{
								edge: {
									parent: {
										meta,
										value,
									},
									edgeName: edge
								},
							}`
						)
		.own-props-container.props-container
			.own-props-title own props
			.own-props.props-list
				//- edge( :props=`{ value: _watchers }`)
				template(v-for=`edge in ownProps`)
					edge(
							:props=`{
								edge: {
									parent: {
										meta,
										value,
									},
									edgeName: edge
								},
							}`
						)
		.prototype-props-container.props-container
			.prototype-props-title prototype props
			.prototype-props.props-list
				template(v-for=`edge in prototypeProps`)
					edge(
							:props=`{
								edge: {
									parent: {
										meta,
										value,
									},
									edgeName: edge
								},
							}`
						)
</template>

<script>

import edge from './edge.vue'

export default {
	name: 'value',
	data(){
		return {
			vue: {
				shallow: true,
				props: [
					"template",
					"$data",
					"methods",
					"edgeName",
				]
			},
			style
		}
	},
	computed: {
		value: {
			get(){
				let val = this
				let ret = {}
				if(!this.getsmart(this, 'props.value', false)){
					val = this
					// val = this.gosmart(this, '$store.state.graph.root', this)
				} else {
					val = this.gosmart(this, 'props.value', { undefined: true })
				}

				// for(var prop in val){
				// 	if(this.getsmart(this, 'vue.props', []).indexOf(prop) >= 0){
				// 		ret[prop] = val[prop]
				// 	}
				// }
				return val
			}
		},
		editableProps: {
			get(){
				let ret = []
				for(let key in this.value) {
					if(this.vue.props.indexOf(key) > -1) ret.push(key)
					// if(this.value.hasOwnProperty(key)) ret.push(key)
					// if(!this.value.hasOwnProperty(key)) ret.push(key)
				}

				return ret
			}
		},
		ownProps: {
			get(){
				let ret = []
				for(let key in this.value) {
					// if(this.vue.props.indexOf(key) > -1) ret.push(key)
					if(this.value.hasOwnProperty(key)) ret.push(key)
					// if(!this.value.hasOwnProperty(key)) ret.push(key)
				}

				return ret
			}
		},
		prototypeProps: {
			get(){
				let ret = []
				for(let key in this.value) {
					// if(this.vue.props.indexOf(key) > -1) ret.push(key)
					// if(this.value.hasOwnProperty(key)) ret.push(key)
					if(!this.value.hasOwnProperty(key)) ret.push(key)
				}

				return ret
			}
		},
		edges: {
			get(){
				let ret = {
					ownProps: this.ownProps,
					prototypeProps: this.prototypeProps,
					editableProps: this.editableProps
				}
				return ret
			}
		}
	},
	created(){
		globalThis.$store = this.$store
		this.ai()
	},
	methods: {
		isRoot(args){
			let ret = !this.gosmart(this, 'meta.parent', undefined) && this.gosmart(this, 'value', this) == undefined
			if(ret) this.setsmart(this, 'meta.root', true)
			return this.gosmart(this, 'meta.root', false)
		},
		ai(args){
			try {
				if(this.isRoot()){
					this.gosmart(globalThis, 'v', this)
				}

				this.propsHandler(this.props)
				
			} catch(err){console.error(err)}
		},
		propsHandler(n){
			for(let key in n){
				// this.setsmart(this, key, n[key])
			}
		},
		mergeStrategy(source){
			return source
		}
	},
  watch: {
		'props': {
			handler: function(n,o){
				if(!this.equal(n,o)){
					this.propsHandler(n)
				}
			}
		},
  },
	props: {
		props: {}
	},
	components: {
		edge: edge
	}
}

let style = `
	#root {
		// background-color: rgb(0, 0, 0);
		background-color: rgb(253, 253, 253);
	}

	.props-container {
		font-weight: 500;
		padding-left: 5px;
	}

	.props-list {
		padding-left: 5px;
	}

	.editable-props-container {
		color: rgb(66,185,131);
	}

	.editable-props {
	}

	.own-props-container {
		color: rgb(249, 171, 1);
	}

	.own-props {
	}
	
	.prototype-props-container {
		color: rgb(26, 115, 232);
	}

	.prototype-props {
	}


`

</script>