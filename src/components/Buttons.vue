<template>
  <!-- <div v-for="button in buttons" class="button flex rounded-lg mb-7 ml-3">
    <div class="imgWrap -ml-3 mt-2 shadow-2xl">
      <img src="/src/assets/img/blogpost.png" alt="Blogpost" />
    </div>
    <div class="text flex-auto text-left p-4">
      <h2 class="text-white font-semibold text-md">{{ button.title }}</h2>
      <p class="description text-sm font-normal">{{ button.description }}</p>
    </div>
    <a href="{{button.link}}" target="_blank" rel="noopener"></a>
    <div class="linkArrow flex justify-center flex-col text-2xl p-4 pl-2">
      <fa :icon="['fas', 'angle-right']"></fa>
    </div>
  </div> -->

  <template v-for="button in buttons" :key="button._uid">
    <div class="button flex rounded-lg mb-7 ml-3">
      <div class="imgWrap -ml-3 mt-2 shadow-2xl">
        <img
          :src="button.content.image"
          :alt="'Teaserbild ' + button.content.title"
        />
      </div>
      <div class="text flex-auto text-left p-4">
        <h2 class="text-white font-semibold text-md">
          {{ button.content.title }}
        </h2>
        <p class="description text-sm font-normal">
          {{ button.content.description }}
        </p>
      </div>
      <a :href="button.content.link.url" target="_blank" rel="noopener"></a>
      <div class="linkArrow flex justify-center flex-col text-2xl p-4 pl-2">
        <fa :icon="['fas', 'angle-right']"></fa>
      </div>
    </div>
  </template>


  <div v-if="recommendations.length > 0">
  <h3 class="pb-5 pt-3">Recommendations</h3>

  <template v-for="recomBtn in recommendations" :key="recomBtn._uid">
    <div class="button flex rounded-lg mb-7 ml-3">
      <div class="imgWrap -ml-3 mt-2 shadow-2xl">
        <img :src="recomBtn.content.image" :alt="recomBtn.content.title" />
      </div>
      <div class="text flex-auto text-left p-4">
        <h2 class="text-white font-semibold text-md">
          {{ recomBtn.content.title }}
        </h2>
        <p class="description text-sm font-normal">
          {{ recomBtn.content.description }}
        </p>
      </div>
      <a :href="recomBtn.content.link.url" target="_blank" rel="noopener"></a>
      <div class="linkArrow flex justify-center flex-col text-2xl p-4 pl-2">
        <fa :icon="['fas', 'angle-right']"></fa>
      </div>
    </div>
  </template>
  </div>

  <div v-if="coupons.length > 0">
    <h3 class="pb-5 pt-3">Coupons</h3>

    <template v-for="couponBtn in coupons" :key="couponBtn._uid">
      <div class="button flex rounded-lg mb-7 ml-3">
        <div class="imgWrap -ml-3 mt-2 shadow-2xl">
          <img :src="couponBtn.content.image" :alt="couponBtn.content.title" />
        </div>
        <div class="text flex-auto text-left p-4">
          <h2 class="text-white font-semibold text-md">
            {{ couponBtn.content.title }}
          </h2>
          <p class="description text-sm font-normal">
            {{ couponBtn.content.description }}
          </p>
        </div>
        <a
          :href="couponBtn.content.link.url"
          target="_blank"
          rel="noopener"
        ></a>
        <div class="linkArrow flex justify-center flex-col text-2xl p-4 pl-2">
          <fa :icon="['fas', 'angle-right']"></fa>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import StoryblokClient from "storyblok-js-client";
const ACCESS_TOKEN = "nQxNx40KL0o68W0Qsk3DYQtt";

let storyapi = new StoryblokClient({
  accessToken: ACCESS_TOKEN,
});

export default {
  props: ["blok"],
  data() {
    return {
      buttons: [],
      recommendations: [],
      coupons: [],
    };
  },
  created() {
    window.storyblok.init({
      accessToken: ACCESS_TOKEN,
    });
    window.storyblok.on("change", () => {
      this.getButtons("buttons", "draft");
      this.getRecommendations("recommendations", "draft");
      this.getCoupons("coupons", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getButtons("buttons", "draft");
        this.getRecommendations("recommendations", "draft");
        this.getCoupons("coupons", "draft");
      } else {
        this.getButtons("buttons", "published");
        this.getRecommendations("recommendations", "published");
        this.getCoupons("coupons", "published");
      }
    });
  },
  methods: {
    getButtons(folder, version) {
      storyapi
        .get("cdn/stories/?starts_with=" + folder, {
          version: version,
        })
        .then((response) => {
          this.buttons = response.data.stories;
          // console.log(this.buttons);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRecommendations(folder, version) {
      storyapi
        .get("cdn/stories/?starts_with=" + folder, {
          version: version,
        })
        .then((response) => {
          this.recommendations = response.data.stories;
          // console.log(this.buttons);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCoupons(folder, version) {
      storyapi
        .get("cdn/stories/?starts_with=" + folder, {
          version: version,
        })
        .then((response) => {
          this.coupons = response.data.stories;
          // console.log(this.buttons);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style lang="scss" scoped>
h3 {
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  font-weight: 600;
  text-transform: uppercase;
}
.button {
  background-color: #2d2f39;
  transition: background 0.25s ease-out;
  position: relative;

  .imgWrap {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }

  .description {
    color: #a9b4c1;
  }

  .linkArrow {
    transition: transform 0.25s ease-out;
  }

  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover {
    background-color: #3b3d46;

    .linkArrow {
      transform: translateX(0.45rem);
    }
  }
}
</style>
