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
      console.log(this.$data);
      this.greeting = "goodbye from toronto";
    }
  }
});
