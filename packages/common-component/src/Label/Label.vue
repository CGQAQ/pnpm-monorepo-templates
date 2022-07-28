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
  <span class="red big">{{ text }}</span>
</template>

<style scoped>
.red {
  color: red;
}

.big {
  font-size: 36px;
}
</style>
