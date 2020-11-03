// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

let path = require('path')
let fs = require('fs')
let compileTemplate = require('lodash.template')

module.exports = function (ctx) {
	var boot = []
	files = fs.readdirSync(path.join(__dirname, 'src', '/boot/') )
	for(file in files){
		if(file.indexOf('ignore') < 0 && /.*\.js/.test(files[file])){
			boot.push(files[file].slice(0,files[file].length-3))
		}
	}


	
  let ret = {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/cli-documentation/boot-files
    boot,

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.sass'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v4',
      'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
		framework: {
			all: true,
			config: {
				loadingBar: { 
					skipHijack: true 
				}
			}
		},
    // framework: {
    //   // iconSet: 'ionicons-v4', // Quasar icon set
    //   // lang: 'de', // Quasar language pack

    //   // Possible values for "all":
    //   // * 'auto' - Auto-import needed Quasar components & directives
    //   //            (slightly higher compile time; next to minimum bundle size; most convenient)
    //   // * false  - Manually specify what to import
    //   //            (fastest compile time; minimum bundle size; most tedious)
    //   // * true   - Import everything from Quasar
    //   //            (not treeshaking Quasar; biggest bundle size; convenient)
    //   all: 'auto',
    //   // components: [],
    //   // directives: [],

    // },

    // https://quasar.dev/quasar-cli/cli-documentation/supporting-ie
    supportIE: true,

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
			devtool: 'source-map',
      // showProgress: false,
      // gzip: true,
      // analyze: true,
      // preloadChunks: false,
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/cli-documentation/handling-webpack
      extendWebpack (cfg) {
				
				cfg.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'

        // cfg.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /node_modules/,
        //   options: {
        //     formatter: require('eslint').CLIEngine.getFormatter('stylish')
        //   }
        // })

				cfg.module.rules.push({
					test: /\.pug$/,
					loader: 'pug-plain-loader'
				})

				// cfg.module.rules.push({
				// 	test: /\.sass$/,
				// 	use: [
				// 		'vue-style-loader',
				// 		'css-loader',
				// 		{
				// 			loader: 'sass-loader',
				// 			options: {
				// 				indentedSyntax: true,
				// 			},
				// 			// sass-loader version >= 8
				// 			sassOptions: {
				// 				indentedSyntax: true
				// 			}
				// 		}
				// 	]
				// })

      }
    },
		sourceFiles: {
			rootComponent: 'src/components/root.vue',
			rootId: "root",
		},
    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      // https: true,
			port: 9876,
      open: false // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'dingern',
        // short_name: 'dingern',
        // description: 'everything',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    // https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // id: 'dingern',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'dingern'
      }
    },
		templates: {
			"app.js": compileTemplate(fs.readFileSync('src/templates/app.js', 'utf-8')),
			"client-entry.js": compileTemplate(fs.readFileSync('src/templates/client-entry.js', 'utf-8')),
		}
  }

	ret.htmlVariables = { ...ret	}

	return ret
}
