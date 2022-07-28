<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Label",
  props: {
    text: String,
  },
});
</script>

<template>
  <span>
    <span class="red big">{{ text }}</span></span
  >
</template>

<style scoped>
.red {
  color: red;
}

.big {
  font-size: 36px;
}
</style>
