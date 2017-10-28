<template>
	<div>

		<a id="githubmark" href="https://github.com/nntin/pasteview">
		  <img src="../assets/githubmark.png">
		</a>
		<div id="chrome-color"><chrome-picker v-model="textFormat.colorsBackground"/></div>
		<div id="chrome-color"><chrome-picker v-model="textFormat.colorsText"/></div>
		<p v-bind:style="{
										backgroundColor: textFormat.colorsBackground.hex,
										color: textFormat.colorsText.hex
										 }">test text</p>

		<label><a :href="pastebinURL">{{pastebinURL}}</a></label>

		<vue-slider :tooltip=false v-on:input="textFormatChange" :min="25" :max="75" width="50%" v-model="textFormat.textSize"></vue-slider>
		<div id="textArea">
			<div id="column1">
		     <vue-slider :tooltip=false v-on:input="textFormatChange" :min="0" :max="35" v-model="textFormat.columnSize" :speed="0"></vue-slider>
	    </div>
			<div id="column2">
				<label>&nbsp;</label>
			</div>
	    <div id="column3">
				<vue-slider :reverse=true :tooltip=false v-on:input="textFormatChange" :min="0" :max="35" v-model="textFormat.columnSize" :speed="0"></vue-slider>
		    <!--<vue-slider :tooltip=false :min="65" :max="100" v-model="columnSize2" :speed="0"></vue-slider>-->
	    </div>
		</div>
	</div>
</template>
<script>
import vueSlider from 'vue-slider-component'
import { Chrome } from 'vue-color'



export default {
	name: 'top',
	components: {
		vueSlider,
		'chrome-picker': Chrome
	},
	props: {
		pastebinURL: {
			type: String,
			default: ''
		}
	},

	data () {
		return {
			textFormat: {
				textSize: 40,
				columnSize: 20,
				colorsBackground: {hex: '#FFDADA'},
				colorsText: {hex: '#180F38'}

			}
		}
	},
	methods: {
		textFormatChange: function(){
			this.$emit('input', this.textFormat);
		}
	},
	computed: {
		// columnSize2: {
		// 	get: function() {
		// 		return 100 - this.textFormat.columnSize;
		// 	},
		// 	set: function (someNumber) {
		// 		this.textFormat.columnSize = 100 - someNumber
		// 	}
		// }
	}
}
</script>

<style>
	div#column1, div#column2, div#column3{
		float:left;
		width:33%;
	}
	div#chrome-color{
		display: inline-block;
	}
	a#githubmark{
	float:right;
	}
</style>
