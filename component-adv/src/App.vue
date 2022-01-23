<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
    <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template v-slot:default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </course-goals> -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGolas from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    // "badge-list": BadgeList,
    // "user-info": UserInfo,
    // "course-goals": CourseGoals,
    "active-goals": ActiveGolas,
    "manage-goals": ManageGoals,
  },

  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponents(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
