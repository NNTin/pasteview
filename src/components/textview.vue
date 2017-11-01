<template>
  <div class=textviewcss>
    <p v-html=pastebinText :style="getStyle"></p>
    <!-- backgroundColor is throwing an error, no idea how to fix -->

  </div>
</template>

<script>
  export default {
    name: 'textview',
    props: {
      textFormat: {
        type: Object,
        default: {
          textSize: -1,
          columnSize: -1,
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
    data() {
      return {
        pastebinText: 'The paste you provided is invalid.\n\
Either the paste does not exist on Pastebin or the paste was submitted from a non-pro Pastebin account.\n\n\
Example usage:\n<a href="https://pastebin.com/32z9wKpi">https://pastebin.com/32z9wKpi</a>\n\
-->\n\
<a href="https://nntin.github.io/pasteview/?paste=32z9wKpi">https://nntin.github.io/pasteview/?paste=32z9wKpi</a>'.replace(/\n/g, "<br />"),
        pastebinURL: 'https://pastebin.com/raw/FrJPEEwY'
      }
    },
    methods: {

    },
    created: function() {
      var url_string = document.URL;
      var url = new URL(url_string);
      var paste = url.searchParams.get("paste");
      if (!paste) {
        this.pastebinText =
'Goal of project: Make reading pastes from Pastebin more enjoyable.\n\n\
Functionality:\n\
* customize reading area\n\
* customize font size\n\
* customize background and font color\n\
* save settings (on page reload you have your old settings) and reset settings\n\
* show/hide settings\n\n\
Example usage:\n<a href="https://pastebin.com/32z9wKpi">https://pastebin.com/32z9wKpi</a>\n\
-->\n\
<a href="https://nntin.github.io/pasteview/?paste=32z9wKpi">https://nntin.github.io/pasteview/?paste=32z9wKpi</a>'.replace(/\n/g, "<br />")
      }
      else {
        var new_url_string = 'https://pastebin.com/raw/' + paste
        this.pastebinURL = 'https://pastebin.com/' + paste
        this.$emit('pastebinURLChange', this.pastebinURL);
        this.$http.get(new_url_string)
          .then(function(response){
            if (response.status == 200){
              this.pastebinText = response.data.replace(/\n/g, "<br />");
            }
            else {
              console.log('Unhandled status')
            }
          },
          function(error) {
            console.log('Error: Paste is invalid or it is a non-pro paste.')
          })
      }

    },
    computed: {
      getStyle: {
        get: function () {
          return { fontSize: this.textFormat.textSize/2 + 'px',
                   paddingLeft: this.textFormat.columnSize + '%',
                   paddingRight: this.textFormat.columnSize + '%',
                   backgroundColor: this.textFormat.colorsBackground.hex,
                   color: this.textFormat.colorsText.hex
          }
        }
      }
    }
  }
</script>

<style>
</style>
