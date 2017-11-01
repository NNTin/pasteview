<template>
  <div id="app" :style="getStyle">

    <top v-show="showTop" @input="onInputChild" :pastebinURL="pastebinURL" :wordCount="wordCount" :showSlider="showTop"></top>
    <button v-on:click="toggleShowTop" v-show="!showTop">configure</button>
    <button v-on:click="toggleShowTop" v-show="showTop">hide</button>
    <textview @pastebinURLChange="onPastebinURLChange" @wordCount="onWordCount" :textFormat="textFormat"></textview>

  </div>
</template>

<script>
import textview from './components/textview'
import top from './components/top'


export default {
  name: 'app',
  head: {
    title: {
      inner: "PasteView"
    },
    meta: [
      { name: 'application-name', content: 'PasteView' },
      { name: 'description', content: 'View pastes from Pastebin', id: 'desc' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content: 'PasteView' },
      // with shorthand
      { n: 'twitter:description', c: 'View pastes from Pastebin'},
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: 'PasteView' },
      { itemprop: 'description', content: 'View pastes from Pastebin' },
      // ...
      // Facebook / Open Graph
      { property: 'og:title', content: 'PasteView' },
      // with shorthand
      { p: 'og:image', c: 'https://i.imgur.com/N0u1eS0.png' },
      { p: 'og:type', c: 'article' },
      { p: 'og:url', c: 'nntin.github.io/pasteview/' },
      { p: 'og:description', c: 'View pastes from Pastebin' }

      // ...
    ]
  },
  components: {
    top,
    textview,
  },
  data () {
		return {
      textFormat: {colorsBackground: {}, colorsText: {}},
      pastebinURL: '',
      wordCount: 0,
      showTop: false
		}
	},
	methods: {
    onInputChild (value) {
      this.changeTextFormat = value
    },
    onPastebinURLChange (value) {
      this.pastebinURL = value
    },
    onWordCount(value){
      this.wordCount = value
    },
    toggleShowTop () {
      this.showTop = !this.showTop
    }
	},
  computed: {
    changeTextFormat: {
      get: function () {
        return this.textFormat
      },
      set: function (textFormat) {
        this.textFormat = textFormat
      }
    },
    getStyle: {
      get: function () {
        return {
          backgroundColor: this.textFormat.colorsBackground.hex,
          color: this.textFormat.colorsText.hex
        }
      }
    }
  }
}
</script>

<style>
div#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin-top: 60px;
}


</style>
