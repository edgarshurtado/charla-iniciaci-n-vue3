<template>
  <EventSearchPage />
</template>

<script lang="ts">
import EventSearchPage from "@/pages/event-search-page/EventSearchPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    EventSearchPage,
  },
});
</script>
