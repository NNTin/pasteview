<template>
  <div class="app" :style="getStyle">

    <top v-show="showTop" @input="onInputChild" :pastebinURL="pastebinURL" :wordCount="wordCount" :showSlider="showTop"></top>
    <button id="configureButton" v-on:click="toggleShowTop" v-show="!showTop">configure</button>
    <button id="hideButton" v-on:click="toggleShowTop" v-show="showTop">hide</button>
    <!-- <textindex></textindex> -->
    <textview @pastebinURLChange="onPastebinURLChange" @wordCount="onWordCount" :textFormat="textFormat"></textview>

  </div>
</template>

<script>
import textview from './components/textview'
import top from './components/top'
// import textindex from './components/textindex'

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
      { p: 'og:image', c: 'https://i.imgur.com/hkQ8Mo6.jpg' },
      { p: 'og:type', c: 'article' },
      { p: 'og:url', c: 'nntin.github.io/pasteview/' },
      { p: 'og:description', c: 'View pastes from Pastebin' }

      // ...
    ]
  },
  components: {
    top,
    // textindex,
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
* {
    margin: 0;
}
html,body {
  height: 100%;
}

button#configureButton {
  margin-left: 20px;
  margin-top: 10px;
}
button#hideButton {
  margin-left: 20px;
}


.app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  height: 100%
}


</style>
