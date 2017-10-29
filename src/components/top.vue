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
			<vue-slider :tooltip=false v-on:input="textFormatChange" :min="25" :max="75" width="300%" v-model="textFormat.textSize"></vue-slider>
		</div>
		<div id="buttons">
			<button v-on:click="save">Save</button>
			<button v-on:click="reset">Reset</button>

		</div>
		<p v-bind:style="{
										backgroundColor: textFormat.colorsBackground.hex,
										color: textFormat.colorsText.hex
										 }">test text</p>

		<label><a :href="pastebinURL">{{pastebinURL}}</a></label>

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
		}
	},

	data () {
		return {
			textFormat: {
				textSize: 40,
				columnSize: 20,
				colorsBackground: {hex: '#FFE8E8'},
				colorsText: {hex: '#000909'}

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

			console.log(localStorage)
 		},
		reset: function () {
			this.textFormat.textSize = 40
			this.textFormat.columnSize = 20
			this.textFormat.colorsBackground.hex = '#FFE8E8'
			this.textFormat.colorsText.hex = '#000909'

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
			this.textFormat.colorsBackground.hex = localStorage.getItem('colorsBackgroundHex')
			this.textFormat.colorsText.hex = localStorage.getItem('colorsTextHex')
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
</style>
