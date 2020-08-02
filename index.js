console.log('hello');

var app = new Vue({
  el: "#app",
  data: {
    greeting: "Hello from Buffalo!",
    name: "Jessica",
    showInfo: false,
    fruits: ["pineapple", "mango", "cherry"],
    newFruit: "add new fruit here"
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
    },
    addFruit: function() {
      console.log('adding fruit...');
      // get the user input 
      console.log(this.newFruit)
      // add that user input to the array
      this.fruits.push(this.newFruit);
    }
  }
});



