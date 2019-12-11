<template lang="pug">

	.value(
		:id=`isRoot() ? 'root' : ''`
	)
		//- template(v-for=`edge in edges`)
		template(v-for=`edge in Object.keys(value)`)
			.debug {{ edge }}
			//- edge(
			//- 	:props=`{
			//- 		edge: {
			//- 			parent: {
			//- 				meta,
			//- 				value
			//- 			},
			//- 			name: edge
			//- 		},
			//- 	}`
			//- )
</template>

<script>

import edge from 'components/edge'

export default {
	name: 'value',
	data(){
		return {
			value: undefined
		}
	},
	computed: {
		edges: {
			get(){
				let edges = []
				for(let key in this.value) {
					edges.push(key);
				}
				return edges
			}
		}
	},
	created(){
		window.$store = this.$store
		this.ai()
	},
	methods: {
		isRoot(args){
			let ret = !this.getsmart(this, 'meta.parent', false) && this.getsmart(this, 'value', undefined) == undefined
			if(ret) this.setsmart(this, 'meta.root', true)
			return this.getsmart(this, 'meta.root', false)
		},
		ai(args){
			try {
				if(this.isRoot()){
					this.gosmart(this, 'meta', {})

					let debug = false
					if(debug){
						let testThing = { 
							"test1.0": {
								"test1.1": {
									"test1.2": [
										'woo'
									]
								}
							},
							"test2.0": [
								"test2.1"
							],
							"test3.0": false,
							"test4.0": 4,
							"test5.0": "test5.1",
						}
						testThing["self"] = testThing
						this.value = testThing
					} else {
						// this.$set(this, 'value', window, true)
						this.$set(this, 'value', this)
						// this.setsmart(this, 'value', this)
						if(!window.V) window.V = this
						// this.value = this
					}
				}
				// this.setsmart(this, 'props', {})

				setTimeout(()=>{
					// this.setsmart(this, 'value.woowoo', true)
					// this.value.woowoo = true
					// this.$nextTick()
				},3000)
			} catch(err){console.error(err)}
		}
	},
  watch: {
		'props': {
			handler: function(n,o){
				if(!this.equal(n,o)){
					// this.setsmart(this, 'props', {})
					// setsmart(this, undefined, { ...this, ...dupe(n) })
					// setsmart(this, 'meta', { ...this.meta, ...dupe(this.props.meta) })
					// setsmart(this, 'value', { ...this.value, ...dupe(this.props.value) })
				}
			},
			deep: true
		},
  },
	props: {
		props: {}
	},
	components: {
		edge
	}
}
</script>