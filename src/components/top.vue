<template>
	<div>
    <img src="../assets/githubmark.png">
		<label><a :href="pastebinURL">{{pastebinURL}}</a></label>
		<vue-slider v-on:input="textFormatChange" :min="10" :max="75" width="50%" v-model="textFormat.textSize"></vue-slider>
		<div id="textArea">
			<div id="column1">
		     <vue-slider v-on:input="textFormatChange" :min="0" :max="35" v-model="textFormat.columnSize" :speed="0"></vue-slider>
	    </div>
			<div id="column2">
				<label>&nbsp;</label>
			</div>
	    <div id="column3">
		     <vue-slider :min="65" :max="100" v-model="columnSize2" :speed="0"></vue-slider>
	    </div>
		</div>
	</div>
</template>
<script>
import vueSlider from 'vue-slider-component';

export default {
	name: 'top',
	components: {
		vueSlider
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
				columnSize: 20
			}
		}
	},
	methods: {
		textFormatChange: function(){
			this.$emit('input', this.textFormat);
		}
	},
	computed: {
		columnSize2: {
			get: function() {
				return 100 - this.textFormat.columnSize;
			},
			set: function (someNumber) {
				this.textFormat.columnSize = 100 - someNumber
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
</style>
