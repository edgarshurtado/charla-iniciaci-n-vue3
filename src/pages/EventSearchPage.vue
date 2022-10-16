<template>
  <body>
    <header>
      <h1>
        <img
          :src="imagesURLs.vueLogo"
          style="height: 35px; margin-left: 16px"
        />
        uscador de eventos
      </h1>
    </header>
    <section class="events-list">
      <div class="container mt-3 mb-3">
        <div class="row">
          <div class="group">
            <input required type="text" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Buscar</label>
          </div>
        </div>
        <div style="text-align: end">
          <input id="" name="" type="checkbox" /> Sólo eventos futuros
        </div>
        <div class="row">
          <div class="card">
            <img class="card__img" :src="imagesURLs.vueNation" />
            <div class="card__text">
              <div class="card__title">Vue.js Nation</div>
              <div class="card__description">
                <div
                  class="card__event-remaing-time card__event-remaining-time--past"
                >
                  Pasado
                </div>
                <div class="card__event-day">26 Ene 2022</div>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card__img" :src="imagesURLs.lechazoConf" />
            <div class="card__text">
              <div class="card__title">Lechazo Conf</div>
              <div class="card__description">
                <div
                  class="card__event-remaing-time card__event-remaining-time--past"
                >
                  Pasado
                </div>
                <div class="card__event-day">20 May 2020</div>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card__img" :src="imagesURLs.vueConfToronto" />
            <div class="card__text">
              <div class="card__title">VueConf Toronto</div>
              <div class="card__description">
                <div class="card__event-remaing-time">11 días</div>
                <div class="card__event-day">1 Nov 2022</div>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card__img" :src="imagesURLs.vueConfUS" />
            <div class="card__text">
              <div class="card__title">Vue Conf US</div>
              <div class="card__description">
                <div
                  class="card__event-remaing-time card__event-remaining-time--past"
                >
                  Pasado
                </div>
                <div class="card__event-day">23 Mar 2022</div>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card__img" :src="imagesURLs.vueConfDe" />
            <div class="card__text">
              <div class="card__title">Vuejs.de Conf</div>
              <div class="card__description">
                <div class="card__event-remaing-time">16 días</div>
                <div class="card__event-day">5 Oct 2022</div>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card__img" :src="imagesURLs.vueDay" />
            <div class="card__text">
              <div class="card__title">Vue Day</div>
              <div class="card__description">
                <div class="card__event-remaing-time">29 días</div>
                <div class="card__event-day">18 Nov 2022</div>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card__img" :src="imagesURLs.vueLive" />
            <div class="card__text">
              <div class="card__title">VueJS Live</div>
              <div class="card__description">
                <div class="card__event-remaing-time">8 días</div>
                <div class="card__event-day">28 Oct 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script lang="ts" setup>
const imagesURLs: { [key: string]: string } = {
  vueLogo: "assets/vue-logo.png",
  vueNation: "assets/vue_js_nation.jpeg",
  lechazoConf: "assets/lechazoconf.svg",
  vueConfToronto: "assets/vue_conf_toronto.jpeg",
  vueConfUS: "assets/vue_conf_us.jpeg",
  vueConfDe: "assets/vuejs_conf_de.jpeg",
  vueDay: "assets/vue_day.jpeg",
  vueLive: "assets/vue_live.jpeg",
};
</script>
