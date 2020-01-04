<template>
	<div class="foo">
		foo:
		<bar></bar>
	</div>
</template>

<script>
import bar from './bar'
export default {
	name: 'foo',
	components: {
		bar
	}
}
</script>