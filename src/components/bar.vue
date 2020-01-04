<template>
	<div class="bar">
		<div @click="show = !show"> show foo </div>
		<foo v-if="show"></foo>
	</div>
</template>

<script>
import foo from './foo'
export default {
	name: 'bar',
	data(){
		return {
			show: false
		}
	},
	components: {
		foo
	}
}
</script>

<style scoped>
.bar {
	padding-left: 5px
}
</style>