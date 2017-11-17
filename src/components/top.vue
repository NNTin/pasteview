<template>
	<div id="top">
		<div class="github-corner">
		  <svg width="120" height="120" viewBox="0 0 250 250" :style="getOctocatStyle">
					<a :fill="textFormat.colorsBackground.hex" href="https://github.com/NNTin/pasteview" style="pointer-events:auto">
				    <path d="M0,0 L250,250 L250,0 Z"></path>
					</a>
					<path :fill="textFormat.colorsText.hex" d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" ></path>
			    <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
						fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
			    <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
					<g class="octo-glasses" visibility="hidden">
						<svg :fill="textFormat.colorsText.hex" width="640" height="480">
						 <defs>
						  <symbol id="glasses" viewBox="0 0 512 512">
						   <path d="m465.4,247c-2.2,-22 -12.4,-43 -28.9,-58.4c-17.1,-15.9 -39.3,-24.7 -62.7,-24.7c-41.5,0 -77.3,27.4 -88.5,67c-7,-7 -18.5,-11.7 -29.3,-11.7c-10.8,0 -22.3,4.7 -29.3,11.7c-11.2,-39.6 -47,-67 -88.5,-67c-23.3,0 -45.6,8.7 -62.7,24.6c-16.5,15.5 -26.7,36.5 -28.9,58.5l-14.6,0l0,18l14.6,0c2.2,22 12.4,43 28.9,58.4c17.1,15.9 39.3,24.7 62.7,24.7c50.8,0 92.1,-41.2 92.1,-92c0,-0.1 0,-0.1 0,-0.1l0,0c0,-9.9 11.5,-21.6 25.7,-21.6s25.7,11.7 25.7,21.6l0,0c0,0 0,0 0,0.1c0,50.8 41.3,92 92.1,92c23.3,0 45.6,-8.7 62.7,-24.7c16.5,-15.4 26.7,-36.5 28.9,-58.5l14.6,0l0,-18l-14.6,0l0,0.1z"/>
						  </symbol>
						 </defs>
						 <g>
						  <g />
							  <use x="530" y="-70" xlink:href="#glasses" transform="rotate(45 100,75) matrix(0.185,0,0,0.185,0,0) "/>
						 </g>
						</svg>
					</g>
		  </svg>
		</div>

		<div>
			<div v-show="pastebinURL">
				<label>Displaying paste: <a :href="pastebinURL">{{pastebinURL}}</a></label>
				<label>Word count: {{wordCount}}</label>
				<br/>
				<br/>
			</div>
			<div id="sliders">

				<div id="text-slider">
					<label id="description">Text Slider</label>
					<vue-slider :show="showSlider" :tooltip=false v-on:input="textFormatChange" :min="20" :max="75" v-model="textFormat.textSize"></vue-slider>
				</div>

				<div>
					<div id="chrome-color">
						<label id="description">Background Color</label>
						<chrome-picker v-model="textFormat.colorsBackground"/>
					</div>
					<div id="chrome-color">
						<label id="description">Text Color</label>
						<chrome-picker v-model="textFormat.colorsText"/>
					</div>
				</div>


			</div>
			<div id="buttons">
					<button title="Save slider and color settings" :style="getSaveButtonStyle" v-on:click="save">Save</button>
					<button title="Reset settings to default" :style="getButtonStyle('#FFFFFF','#000000')" v-on:click="reset">Reset</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#FF9393','#FFFFFF')" v-on:click="setColor('#FF9393','#FFFFFF')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#C79347','#FFFFFF')" v-on:click="setColor('#C79347','#FFFFFF')">Set color</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#4793C7','#FFFFFF')" v-on:click="setColor('#4793C7','#FFFFFF')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#383838','#FFFFFF')" v-on:click="setColor('#383838','#FFFFFF')">Set color</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#FFFFFF','#A7660C')" v-on:click="setColor('#FFFFFF','#A7660C')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#FFFFFF','#A70C0C')" v-on:click="setColor('#FFFFFF','#A70C0C')">Set color</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#FFFFFF','#770CA7')" v-on:click="setColor('#FFFFFF','#770CA7')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#FFBABA','#000000')" v-on:click="setColor('#FFBABA','#000000')">Set color</button>
					<br/>
					<button title="Set color" :style="getButtonStyle('#BAFF71','#000000')" v-on:click="setColor('#BAFF71','#000000')">Set color</button>
					<button title="Set color" :style="getButtonStyle('#83BDFF','#000000')" v-on:click="setColor('#83BDFF','#000000')">Set color</button>
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
				width: "40%",
			  color: textColor,
			  fontSize: '12px',
			  background: backgroundColor,
			  padding: '10px 20px 10px 20px',
			  border: 'solid #000000 3px',
				marginTop: '7px',
				marginRight: '0px'
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
					width: "40%",
				  color: this.textFormat.colorsText.hex,
				  fontSize: '12px',
				  background: this.textFormat.colorsBackground.hex,
				  padding: '10px 20px 10px 20px',
				  border: 'solid #000000 3px'
				}
			}
		},
		getOctocatStyle: {
			get: function () {
				return {
					fill: this.textFormat.colorsText.hex,
					color: this.textFormat.colorsBackground.hex,
					zIndex: 5,	//todo: remove this
					pointerEvents: "none",
					position: 'absolute',
					top: 0,
					border: 0,
					right: 0
				}
			}
		}
	}
}
</script>

<style>
	.github-corner:hover .octo-arm{
		animation: octocat-wave 400ms linear infinite
  }

	.github-corner:hover .octo-glasses{
		/*visibility: visible;*/
		-webkit-animation:fadeinout 1200ms ease-in-out infinite;
	}

	@-webkit-keyframes fadeinout{
	    0%,100%{opacity:0;visibility:visible;}
	    50%{opacity:1;}
	}

  @keyframes octocat-wave {
    0%,50%,100% {
      transform: rotate(0)
    }
    25% {
      transform: rotate(-25deg)
    }
    75% {
      transform: rotate(10deg)
    }
  }

  @media (max-width:500px) {
    .github-corner:hover .octo-arm {
      animation: none
    }
    .github-corner .octo-arm {
      animation: octocat-wave 400ms linear infinite
    }
  }
	div#top{
		text-align: center;
	}
	div#column1, div#column2, div#column3{
		float:left;
		width:33%;
	}
	div#chrome-color, #sliders{
		display: inline-block;
	}
	label#description{
		display: block;
		text-align: center;
		line-height: 150%;
	}
	div#textArea{
		padding-top: 10px;
		padding-bottom: 10px;
	}
	div#buttons{
		display: inline-block;
		width: 32%;
	}
</style>
