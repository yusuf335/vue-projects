<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #fada5e;
  border: 1px solid #fada5e;
  color: black;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #f1de91;
  border-color: #f1de91;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #f1de91;
}
</style>
