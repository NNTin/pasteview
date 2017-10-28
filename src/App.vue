<template>
  <div id="app"
    style="{  font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    margin-top: 60px;  }">
    <top @input="onInputChild" :pastebinURL="pastebinURL"></top>
    <textview @pastebinURLChange="onPastebinURLChange" :textFormat="textFormat"></textview>


    <!--<test :textFormat="textFormat"></test>-->

  </div>
</template>

<script>
import textview from './components/textview'
import test from './components/test'
import top from './components/top'
export default {
  name: 'app',
  components: {
    top,
    textview,
    test
  },
  data () {
		return {
      textFormat: {},
      pastebinURL: ''
		}
	},
	methods: {
    onInputChild (value) {
      this.changeTextFormat = value
    },
    onPastebinURLChange (value) {
      this.pastebinURL = value
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
</style>
