const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "yusuf",
          name: "Yusuf",
          phone: "011111111",
          email: "yusuf@test.com",
        },
        {
          id: "mehrab",
          name: "Mehrab",
          phone: "011111111",
          email: "mehrab@test.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{ friend.name}}</h2>
        <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
        </button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "yusuf",
        name: "Yusuf",
        phone: "011111111",
        email: "yusuf@test.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
