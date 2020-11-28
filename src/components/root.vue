<template lang="pug">

	edge(
		id="root"
		:properties=`{
			path: typeof getsmart(graph, 'root.rootEdge', undefined) === "string" ? graph.root.rootEdge : "root",
			root: true
		}`
	)
	//- value(
	//- 	:id="root"
	//- 	:properties=`{
	//- 		path: typeof getsmart(graph, 'root.rootEdge', undefined) === "string" ? graph.root.rootEdge : "root",
	//- 		root: true
	//- 	}`
	//- )
</template>

<script>

export default {
	name: 'root',
	components: {
		edge: () => import('./edge.vue'),
		value: () => import('./value.vue')
	}
}

</script>