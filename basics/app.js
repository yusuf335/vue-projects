const app = Vue.createApp({
  data: function () {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master the course and learn Vue!",
      vueLink: "https://v3.vuejs.org/guide/installation.html#vue-devtools",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random(0, 1);
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
