var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number1: 0,
    number2: 0,
    number3: 0,
    sum: ""
  },
  methods: {
    computeSum: function() {
      console.log('computing sum...');
      console.log(this.number1, this.number2, this.number3);
      console.log(typeof parseInt(this.number1));
      console.log(parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3));
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    secondButton: function() {
      console.log('here is the second button');
    }
  }
});


// what do we need to do in order to make this calculator work?

  // v-model to track the user input from the text boxes
  // make a function that runs based on..event listener
  // logic to do the math
// show the sum to the user
