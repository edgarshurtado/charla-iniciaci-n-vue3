<template>
  <body>
    <header>
      <h1>
        <img :src="vueLogo" style="height: 35px; margin-left: 16px" />
        uscador de eventos
      </h1>
    </header>
    <section class="events-list">
      <div class="container mt-3 mb-3">
        <div class="row">
          <div class="group">
            <input
              required
              type="text"
              :value="inputSearch"
              @input="searchInputHandler"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Buscar</label>
          </div>
        </div>
        <div style="text-align: end">
          <input id="" name="" type="checkbox" v-model="onlyFutureEvents" />
          Sólo eventos futuros
        </div>
        <div class="row">
          <div
            v-for="programmingEvent in eventsList"
            class="card"
            :key="programmingEvent.name"
          >
            <img class="card__img" :src="programmingEvent.imgUrl" />
            <div class="card__text">
              <div class="card__title">{{ programmingEvent.name }}</div>
              <div class="card__description">
                <div
                  class="card__event-remaing-time card__event-remaining-time--past"
                >
                  Pasado
                </div>
                <div class="card__event-day">
                  {{
                    programmingEvent.startDate.toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// DATA
const vueLogo = "assets/vue-logo.png";

const eventsList = [
  {
    name: "Vue.js Nation",
    startDate: new Date(2022, 0, 26),
    imgUrl: "assets/vue_js_nation.jpeg",
  },
  {
    name: "Lechazo Conf",
    startDate: new Date(2020, 4, 20),
    imgUrl: "assets/lechazoconf.svg",
  },
  {
    name: "VueConf Toronto",
    startDate: new Date(2022, 10, 1),
    imgUrl: "assets/vue_conf_toronto.jpeg",
  },
  {
    name: "Vue Conf US",
    startDate: new Date(2022, 3, 23),
    imgUrl: "assets/vue_conf_us.jpeg",
  },
  {
    name: "Vuejs.de Conf",
    startDate: new Date(2022, 7, 5),
    imgUrl: "assets/vuejs_conf_de.jpeg",
  },
  {
    name: "Vue Day",
    startDate: new Date(2022, 10, 18),
    imgUrl: "assets/vue_day.jpeg",
  },
  {
    name: "VueJS Live",
    startDate: new Date(2022, 7, 28),
    imgUrl: "assets/vue_live.jpeg",
  },
];

// LIST FILTERING
const inputSearch = ref("");

function searchInputHandler(event: Event) {
  inputSearch.value = (event.target as HTMLInputElement).value;
}

const onlyFutureEvents = ref(false);
</script>
