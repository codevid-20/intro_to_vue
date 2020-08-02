console.log('hello');

var app = new Vue({
  el: "#app",
  data: {
    greeting: "Hello from Buffalo!",
    name: "Jessica",
    showInfo: false,
    fruits: ["pineapple", "mango", "cherry"]
  },
  methods: {
    changeGreeting: function() {
      console.log('changing greeting...');
      this.greeting = "goodbye from toronto";
    },
    toggleInfo: function() {
      console.log('toggling info...');
      // if (this.showInfo === true) {
      //   this.showInfo = false;
      // } else {
      //   this.showInfo = true;
      // }
      this.showInfo = !this.showInfo;
    }
  }
});



