<template lang="pug">

	.edge(
		@click=`setsmart(edge, 'meta.render.'+edge.edgeName, !gosmart(edge, 'meta.render.'+edge.edgeName, false))`
	) {{ getsmart(edge, 'edgeName', 'error no edgeName found') }}
		.debug {{ getsmart(edge, 'meta.render.'+edge.edgeName, 'hmmm') }}
		value(
			v-if=`gosmart(edge, 'meta.render.'+edge.edgeName, false)`
			:props=`{
				value: 'hmm',
			}`
		)
		//- value(
		//- 	v-if=`gosmart(edge, 'meta.render.'+edge.edgeName, false)`
		//- 	:props=`{
		//- 		value,
		//- 		meta: {
		//- 			parent: getsmart(edge, 'parent', undefined)
		//- 		}
		//- 	}
		//- 	`
		//- )

</template>

<script>
import value from './value.vue'
let foo = value
let bar = foo
export default {
	name: 'edge',
	data(){
		return {
			vue: {
				shallow: true
			},
			edge: {
				notShallow: true,
				meta: {
					notShallow: true,
					render: {
						notShallow: true
					}
				}
			}
		}
	},
	props: {
		props: {}
	},
	created(){
		this.ai()
	},
	methods: {
		log(){
			console.log('hmm')
		},
		ai(){
			try {
				this.gosmart(this, 'edge', {})
				// Object.assign(this.edge, this.dupe(this.props.edge))
				// this.setsmart(this, 'props', {})
				// this.edge.value = this.edge.parent.value[this.edge.edgeName]

				this.propsHandler(this.props)
				
			} catch(err){console.error(err)}
		},
		propsHandler(n){
			for(let key in n){
				// this.setsmart(this, key, n[key])
			}
		}
	},
	// computed: {
	// 	value: {
	// 		get(){
	// 			// let ret = this.getsmart(this.edge, 'parent.value.'+this.edge.edgeName, undefined)
	// 			// return ret
	// 			return this.edge.parent.value[this.edge.edgeName]
	// 		}
	// 	}
	// },
  watch: {
		'props': {
			handler: function(n,o){
				if(!this.equal(n,o)){
					this.propsHandler(n)
				}
			},
			// deep: true,
		},
  },
	components: {
		"value": value
	}
}
</script>