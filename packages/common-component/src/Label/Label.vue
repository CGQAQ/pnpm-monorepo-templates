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
  <span>{{ text }}</span>
</template>
