<template>
  <div id="q-app">
    <router-view />
		<div>
			speed test
			let's see again
		</div>
  </div>
</template>

<script>
export default {
	name: 'App',
	beforeMount(){
		if(window){
			window.V = this
		}
	}
}
</script>

<style>
</style>
