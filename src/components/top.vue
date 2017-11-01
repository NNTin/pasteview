<template>
	<div>

		<a id="githubmark" href="https://github.com/nntin/pasteview">
		  <img src="../assets/githubmark.png">
		</a>

		<div id="chrome-color">
			<label id="description">Background Color</label>
			<chrome-picker v-model="textFormat.colorsBackground"/>
		</div>
		<div id="chrome-color">
			<label id="description">Text Color</label>
			<chrome-picker v-model="textFormat.colorsText"/>
		</div>
		<div id="chrome-color">
			<label id="description">Text Slider</label>
			<vue-slider :show="showSlider" :tooltip=false v-on:input="textFormatChange" :min="25" :max="75" width="300%" v-model="textFormat.textSize"></vue-slider>
		</div>
		<div id="buttons">
			<button title="Save slider and color settings" v-on:click="save">Save</button>
			<button title="Reset settings to default" v-on:click="reset">Reset</button>
		</div>

		<label><a :href="pastebinURL">{{pastebinURL}}</a></label>

		<div id="textArea">
			<div id="column1">
		     <vue-slider :show="showSlider" :tooltip=false v-on:input="textFormatChange" :min="0" :max="35" v-model="textFormat.columnSize" :speed="0"></vue-slider>
	    </div>
			<div id="column2">
				<label>&nbsp;</label>
			</div>
	    <div id="column3">
				<vue-slider :show="showSlider" :reverse=true :tooltip=false v-on:input="textFormatChange" :min="0" :max="35" v-model="textFormat.columnSize" :speed="0"></vue-slider>
	    </div>
		</div>
	</div>
</template>
<script>
import vueSlider from 'vue-slider-component'
import { Chrome } from 'vue-color'
import Vue from 'vue'

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
		},
		showSlider: {
			type: Boolean,
			default: true
			}
	},

	data () {
		return {
			textFormat: {
				textSize: 40,
				columnSize: 20,
				colorsBackground: {
					hex: '#FFFFFF',
					hsl: {
						h: 0,
						s: 0,
						l: 1,
						a: 1
					},
					hsv: {
						h: 0,
						s: 0,
						v: 1,
						a: 1
					},
					rgba: {
						r: 255,
						g: 255,
						b: 255,
						a: 1
					},
					a: 1
				},
				colorsText: {
					hex: '#000000',
					hsl: {
						h: 0,
						s: 0,
						l: 0,
						a: 1
					},
					hsv: {
						h: 0,
						s: 0,
						v: 0,
						a: 1
					},
					rgba: {
						r: 0,
						g: 0,
						b: 0,
						a: 1
					},
					a: 1
				}
			}
		}
	},
	methods: {
		textFormatChange: function(){
			this.$emit('input', this.textFormat);
		},
		save: function (){
			localStorage.setItem('textSize', this.textFormat.textSize)
			localStorage.setItem('columnSize', this.textFormat.columnSize)
			localStorage.setItem('colorsBackgroundHex', this.textFormat.colorsBackground.hex)
			localStorage.setItem('colorsTextHex', this.textFormat.colorsText.hex)
			console.dir(this.textFormat.colorsText.hex)
			console.dir(this.textFormat.colorsText)



			//console.log(localStorage)
 		},
		reset: function () {
			this.textFormat.textSize = 40
			this.textFormat.columnSize = 20

			this.textFormat.colorsBackground =
			{
				hex: '#FFFFFF',
				a: 1
			}
			this.textFormat.colorsText =
			{
				hex: '#000000',
				a: 1
			}
			localStorage.setItem('textSize', this.textFormat.textSize)
			localStorage.setItem('columnSize', this.textFormat.columnSize)
			localStorage.setItem('colorsBackgroundHex', this.textFormat.colorsBackground.hex)
			localStorage.setItem('colorsTextHex', this.textFormat.colorsText.hex)



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
	},
	created: function () {
		if(localStorage.textSize){
			this.textFormat.textSize = localStorage.getItem('textSize')
			this.textFormat.columnSize = localStorage.getItem('columnSize')
			this.textFormat.colorsBackground =
			{
				hex: localStorage.getItem('colorsBackgroundHex'),
				a: 1
			}
			this.textFormat.colorsText =
			{
				hex: localStorage.getItem('colorsTextHex'),
				a: 1
			}
		}
	}
}
</script>

<style>
	div#column1, div#column2, div#column3{
		float:left;
		width:33%;
	}
	div#chrome-color, div#buttons{
		display: inline-block;
	}
	a#githubmark{
		float:right;
	}
	label#discription{
		display: block;
		text-align: center;
		line-height: 150%;
		font-size: .85em;
	}
	div#textArea{
		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
