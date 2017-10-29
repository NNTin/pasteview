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
          colorsBackground: {hex: '#FAA3FF'},
  				colorsText: {hex: '#B5F8EC'}
        }
      }
    },
    data() {
      return {
        pastebinText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
        this.pastebinText = "You haven't provided a paste.".replace(/\n/g, "<br />")
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
