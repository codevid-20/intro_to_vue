console.log('hello');

var app = new Vue({
  el: "#app",
  data: {
    greeting: "Hello from Buffalo!",
    name: "Jessica"
  },
  methods: {
    changeGreeting: function() {
      console.log('changing greeting...');
      this.greeting = "goodbye from toronto";
    }
  }
});
