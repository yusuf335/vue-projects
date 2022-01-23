<template>
  <ul>
    <learning-resourse
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resourse>
  </ul>
</template>

<script>
import LearningResourse from './LearningResourse.vue';
export default {
  components: {
    LearningResourse,
  },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
