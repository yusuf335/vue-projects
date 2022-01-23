const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },

    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("Computed");
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Been Hashem";
      }
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
