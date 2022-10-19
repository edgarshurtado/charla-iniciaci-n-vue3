<template>
  <div class="card">
    <img class="card__img" :src="imgUrl" />
    <div class="card__text">
      <div class="card__title">{{ name }}</div>
      <div class="card__description">
        <div
          :class="[
            'card__event-remaing-time',
            { 'card__event-remaining-time--past': !isFutureDate(startDate) },
          ]"
        >
          {{ humanizeDays(daysUntilEvent(startDate)) }}
        </div>
        <div class="card__event-day">
          {{
            startDate.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import dates from "@/utils/dates";

defineProps({
  name: String,
  imgUrl: String,
  startDate: Date,
});

const { isFutureDate, daysUntilEvent, humanizeDays } = dates();
</script>
