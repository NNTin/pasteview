<template>
  <div id="app">

    <top v-show="showTop" @input="onInputChild" :pastebinURL="pastebinURL" :showSlider="showTop"></top>
    <button v-on:click="toggleShowTop" v-show="!showTop">configure</button>
    <button v-on:click="toggleShowTop" v-show="showTop">hide</button>
    <textview @pastebinURLChange="onPastebinURLChange" :textFormat="textFormat"></textview>

  </div>
</template>

<script>
import textview from './components/textview'
import top from './components/top'


export default {
  name: 'app',
  components: {
    top,
    textview,
  },
  data () {
		return {
      textFormat: {colorsBackground: {}, colorsText: {}},
      pastebinURL: '',
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
