<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header"></slot>
      <!-- <h2>Default</h2> -->
    </header>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
