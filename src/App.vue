<template>
  <EventSearchPage />
</template>

<script lang="ts">
import EventSearchPage from "@/pages/EventSearchPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    EventSearchPage,
  },
});
</script>
