<template>
  <button @click="confirmInput">Click</button>
  <button @click="confirmSave">Save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      saveChanges: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    confirmSave() {
      this.saveChanges = true;
    },
  },
  beforeRouteLeave(to, form, next) {
    console.log(to, form);
    if (this.saveChanges) {
      next();
    } else {
      const userWantedtoLeave = confirm('Are you sure?');
      next(userWantedtoLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
