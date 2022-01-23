const app = Vue.createApp({
  data: function () {
    return {
      myName: "Yusuf",
      myAge: 25,
      image: "3098491.png",
    };
  },
  methods: {
    randomNum: function () {
      return (randomNumber = Math.random());
    },
  },
});

app.mount("#assignment");
