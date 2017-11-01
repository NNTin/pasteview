<template>
	<div>
		<a id="githubmark" href="https://github.com/nntin/pasteview">
			<img src="../assets/githubmark.png">
		</a>
		<div>
			<div v-show="pastebinURL">
				<label>Displaying following paste:<a :href="pastebinURL">{{pastebinURL}}</a></label>
				<label>Word count: {{wordCount}}</label>
				<br/>
				<br/>
			</div>
			<div id="sliders">
				<div id="text-slider">
					<label id="description">Text Slider</label>
					<vue-slider :show="showSlider" :tooltip=false v-on:input="textFormatChange" :min="20" :max="75" width="620%" v-model="textFormat.textSize"></vue-slider>
				</div>
				<br/>
				<div id="chrome-color">
					<label id="description">Background Color</label>
					<chrome-picker v-model="textFormat.colorsBackground"/>
				</div>
				<div id="chrome-color">
					<label id="description">Text Color</label>
					<chrome-picker v-model="textFormat.colorsText"/>
				</div>
			</div>
			<div id="buttons">
				<div>
					<button title="Save slider and color settings" :style="getSaveButtonStyle" v-on:click="save">Save</button>
					<button title="Reset settings to default" :style="getButtonStyle('#FFFFFF','#000000')" v-on:click="reset">Reset</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#FFFFFF','#A7660C')" v-on:click="setColor('#FFFFFF','#A7660C')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#FFFFFF','#A70C0C')" v-on:click="setColor('#FFFFFF','#A70C0C')">Set color</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#FFFFFF','#770CA7')" v-on:click="setColor('#FFFFFF','#770CA7')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#FF9393','#FFFFFF')" v-on:click="setColor('#FF9393','#FFFFFF')">Set color</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#C79347','#FFFFFF')" v-on:click="setColor('#C79347','#FFFFFF')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#4793C7','#FFFFFF')" v-on:click="setColor('#4793C7','#FFFFFF')">Set color</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#383838','#FFFFFF')" v-on:click="setColor('#383838','#FFFFFF')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#FFBABA','#000000')" v-on:click="setColor('#FFBABA','#000000')">Set color</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#BAFF71','#000000')" v-on:click="setColor('#BAFF71','#000000')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#83BDFF','#000000')" v-on:click="setColor('#83BDFF','#000000')">Set color</button>
			</div>
		</div>
		</div>

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
		wordCount: {
			type: Number,
			default: 0
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
		},
		setColor: function (backgroundColor, textColor) {
			this.textFormat.colorsBackground =
			{
				hex: backgroundColor,
				a: 1
			}
			this.textFormat.colorsText =
			{
				hex: textColor,
				a: 1
			}
		},
		getButtonStyle: function (backgroundColor, textColor) {
			return {
				width: "48%",
			  color: textColor,
			  fontSize: '12px',
			  background: backgroundColor,
			  padding: '10px 20px 10px 20px',
			  border: 'solid #000000 3px'
			}
		}

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
	},
	computed: {
		getSaveButtonStyle: {
			get: function () {
				return {
					width: "48%",
				  color: this.textFormat.colorsText.hex,
				  fontSize: '12px',
				  background: this.textFormat.colorsBackground.hex,
				  padding: '10px 20px 10px 20px',
				  border: 'solid #000000 3px'
				}
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
	div#chrome-color, div#text-slider, div#buttons, div#sliders{
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
