<template lang='pug'>
	.thing
		template(
			v-if=`(typeof thing == 'undefined' || typeof thing == 'function' || typeof thing == 'string' || typeof thing == 'number' || typeof thing == 'boolean') `
		)
			input(type="text" v-model='thingValue').thing.value
		template(
			v-if=`typeof thing !== 'undefined' && (thing instanceof Object || thing instanceof Array) ` 
			v-for='(key, index) in meta.keys' 
		)

			//- .thing {{ "prop" + " " + "key" + " " + "index" }}
			//- .thing {{ prop + " " + key + " " + index}}
			//- v-model='meta.keys[key]'
			input.thing(
				v-model='meta.keys[key]'
				type="text" 
				@click='toggleProp({key})')
			//- .thing {{ key }}
			//- .thing {{ thing[key] }}
			//- .thing {{ ( meta && meta.show && meta.show[key] ) }}
			//- thing(
			//- 	v-if='meta && meta.show && meta.show[key]'
			//- 	:props=`
			//- 	{
			//- 		thing: thing[key]	
			//- 	}
			//- 	`
			//- )
</template>

<script>
export default {
  name: "thing",
  data() {
    return {
			thing: undefined,
      meta: {
        show: {},
        keys: {}
      },
      uuid: this._uid,
			schema: this.dupe(
				this.merge(
					this.dupe(this.getsmart(this.$options, 'schema', {})),
					this.dupe(this.getsmart(this.props, 'schema', {})),
				)
			),
			things: this.merge(
				this.merge(
					this.dupe(this.getsmart(this.$options, 'schema', {})),
					this.dupe(this.getsmart(this.props, 'schema', {})),
				),
				this.dupe(this.props) || {}
			),
			backup: this.merge(
				this.merge(
					this.dupe(this.getsmart(this.$options, 'schema', {})),
					this.dupe(this.getsmart(this.props, 'schema', {})),
				),
				this.dupe(this.props) || {}
			),
    };
  },
  updated() {
    if (
      this.thing &&
      this.thing.updated &&
      typeof this.thing.updated == "function"
    ) {
      this.thing.updated({ vue: this });
    }

		this.manageKeys()

  },
  created() {
    if (!window.V) window.V = this && this.$set(this, "thing", this);

    if (
      this.thing &&
      this.thing.created &&
      typeof this.thing.created == "function"
    ) {
      this.thing.created({ vue: this });
    }

		this.manageKeys()

  },
  methods: {
		manageKeys(args){
			try {
				this.$set(this, "meta", this.meta || { keys: {} });
				this.$set(this.meta, "keys", this.meta.keys || {});
				let keys = Object.keys(this.thing);
				for (let propDex in keys) {
					let prop = keys[propDex]
					// if (typeof propDex == "string") {
						this.meta.keys[prop] = prop
						// this.$set(this.meta.keys, prop, prop);
					// }
				}
			} catch(err){console.error(err)}
		},
    toggleProp(args) {
      // console.log('args', args)
      // console.log('args.key instanceof Number', args.key instanceof Number)
      // console.log('args.key instanceof String', args.key instanceof String)
      // console.log('args.key', args.key)
      // console.log('args && args.key && this.meta', (args && (typeof args.key !== undefined) && this.meta))
      if (args && typeof args.key !== undefined && this.meta) {
        // console.log('doing1')
        if (!this.meta.show) {
          this.meta.show = {};
        }
        // console.log('doing2')
        console.log("switching to ", !this.meta.show[args.key]);
        this.$set(
          this.meta.show,
          args.key,
          !this.meta.show[args.key]
        );
      }
    },
    showProp(args) {
      if (
        args &&
        (args.key ||
          args.key instanceof Number ||
          args.key instanceof String) &&
        this.meta &&
        this.meta.show &&
        this.meta.show instanceof Array
      ) {
        return this.meta.show[args.key] ? true : false;
      }
      return false;
    }
  },
  computed: {
    thingValue: {
      get() {
        if (
          typeof this.thing == "undefined" ||
          typeof this.thing == "string" ||
          typeof this.thing == "number"
        ) {
          return this.thing;
        } else if (typeof this.thing == "function") {
          if (this.thing.toString && typeof this.thing.toString == "function")
            return this.thing.toString();
        } else {
          return "There was an error in Dingern";
        }
      },
      set(value) {
        if (
          typeof value == "undefined" ||
          typeof value == "string" ||
          typeof value == "number"
        ) {
          this.$set(this, "thing", value);
        } else if (typeof value == "function") {
          if (value.toString && typeof value.toString == "function") {
          }
          // this.$set(this, 'thing', eval(value.toString())
        } else {
          return "There was an error in Dingern";
        }
      }
    }
  },
  components: {},
  watch: {
		'props': {
			handler: function(n,o){
				if(!this.equal(n,o)){
					this.setsmart(this, 'things', { ...this.things, ...this.dupe(this.props) })
					this.setsmart(this, 'backup', { ...this.things, ...this.dupe(this.props) })
					this.setsmart(this, 'schema', { ...this.schema, ...this.dupe(this.props.schema) })
				}
			},
			deep: true
		},
  },
	props: {
		props: {}
	},
  route: {
    canActivate() {
      return true;
    }
  }
};
</script>

