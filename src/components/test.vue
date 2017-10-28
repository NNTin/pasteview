<template>
  <div class="test">
    <h1>{{textFormat.textSize}}</h1>
    <input type="text" v-model="title"><br />
    <h1>{{title}}</h1>
    <p>{{user.firstName}}</p>
    <p v-if="showName" v-text="user.firstName"></p>
    <p v-else="showName">Nobody</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello Tin')">Say Greeting</button>
    <br/>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <hr />
    <label>First Name: </label><input type="text" v-model="user.firstName">
    <br />
    <label>Last Name: </label><input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      textFormat: {
        type: Object,
        default: {
          textSize: 75,
          columnSize: 0
        }
      }
    },
    data() {
      return {
        title: 'Hello World',
      user: {
        firstName: 'John',
        lastName: 'Doe'
      },
      showName: true,
      items: [
        {title:'Item One'},
        {title:'Item Two'},
        {title:'Item Three'},
        {title:'Item Four'}
      ]
      }
    },
    methods: {
      greet: function(greeting){
        alert(greeting);
      },
      pressKey: function(e) {
      console.log(e.target.value);
      },
      enterHit: function() {
        console.log('You hit enter')
      }
    },
    computed: {
      fullName: function(){
        return this.user.firstName + ' ' + this.user.lastName + ' ' + this.msg;
      }
    },
    created: function() {
      this.$http.get('https://pastebin.com/raw/FrJPEEwY')
        .then(function(response){
          //console.log(response.data)
        })
    }
  }
</script>

<style>

</style>
