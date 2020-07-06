<template lang="pug">

	edge(
		id="root"
		:properties=`{
			path: typeof graph.root.rootEdge === "string" ? graph.root.rootEdge : "root",
			root: true
		}`
	)
	//- value(
	//- 	:id="root"
	//- )
</template>

<script>

export default {
	name: 'root',
	computed: {
		graph: {
			get(){
				return this.$store.state.graph.thing
			}
		}
	},
	components: {
		edge: () => import('./edge.vue')
	}
}

</script>