<template lang="pug">

	.edge {{ edge.name }}
		value(
			v-if=`getsmart(edge, 'parent.meta.render.'+edge.name, false)`
			:props=`{
				value,
				meta: {
					parent: getsmart(edge, 'parent', undefined)
				}
			}
			`
		)

</template>

<script>

export default {
	name: 'edge',
	data(){
		return {
			vue: {
				shallow: true
			},
			// edge: {
			// 	name: undefined
			// }
		}
	},
	created(){
		this.ai()
	},
	methods: {
		ai(){
			this.gosmart(this, 'edge', {})
			try {
				// Object.assign(this.edge, this.dupe(this.props.edge))
				// this.setsmart(this, 'props', {})
				// this.edge.value = this.edge.parent.value[this.edge.name]
			} catch(err){console.error(err)}
		}
	},
	// computed: {
	// 	value: {
	// 		get(){
	// 			// let ret = this.getsmart(this.edge, 'parent.value.'+this.edge.name, undefined)
	// 			// return ret
	// 			return this.edge.parent.value[this.edge.name]
	// 		}
	// 	}
	// },
  watch: {
		'props': {
			handler: function(n,o){
				// if(!this.equal(n,o)){
					// let t = { this: this }
					// this.setsmart(t, 'this', { ...this, ...this.dupe(n) })
					
					// Object.assign(this.edge, this.dupe(n.edge))
					// this.$set(this, 'props', {})
					// this.props = {}
					// this.setsmart(this, 'edge', { ...this.edge, ...this.dupe(this.props.edge) })
				// }
			},
			deep: true
		},
  },
	props: {
		props: {}
	},
}
</script>