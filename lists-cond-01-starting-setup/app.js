const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },

  computed: {
    goalCheck() {
      return this.goals.length === 0;
    },
    goalList() {
      return this.goals.length > 0;
    },
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
