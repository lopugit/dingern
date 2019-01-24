<template lang='pug'>
  .thing(v-for="prop in props")

</template>

<script>
export default {
  name: 'thing-comp',
  data () {
    return {
			thing: {

			},
      // objects: null,
      uuid: this._uid
    }
  },
  sockets: {
    connect: function(){
      // console.log("socket connect vue side")
    },
    // giveObjects(data){
    //   // console.log(data)
    //   if(this.uuid == data.id){
    //     this.objects = data.objects
    //   }
    // }
  },
  created () {
    // if(this.count !== 0){
    //   this.getObjects({
    //     count: this.count,
    //     sort: 'alphabetical',
    //     sortDirection: 'ascending',
    //     id: this.uuid
    //   })
    // } else {
    //   this.objects = null
    // }
	},
	computed: {
		props: {
			get(){
				return this.entity
			}
		}
	},
  methods: {
    // getObjects(opts){
    //   this.$socket.emit('getObjects', opts)
    // }
  },
  props: {
    "siteTitle": {}
  },
  components: {
  },
  watch: {
    // '$store.state.thing': function(){
    //   this.thing = this.$store.state.thing
    // },
  },  
  route: {
    canActivate(){
      return true
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import 'src/styles/vars'
.thing
  width: 100%
  max-width: 100%
  overflow: hidden
  // background: $grey
</style>
