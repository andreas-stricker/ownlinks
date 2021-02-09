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
      <img :src="button.content.image" alt="Blogpost" />
    </div>
    <div class="text flex-auto text-left p-4">
      <h2 class="text-white font-semibold text-md">{{ button.content.title }}</h2>
      <p class="description text-sm font-normal">{{ button.content.description }}</p>
    </div>
    <a :href="button.content.link.url" target="_blank" rel="noopener"></a>
    <div class="linkArrow flex justify-center flex-col text-2xl p-4 pl-2">
      <fa :icon="['fas', 'angle-right']"></fa>
    </div>
  </div>
  
  </template>
  
</template>

<script>
import StoryblokClient from "storyblok-js-client";
const ACCESS_TOKEN = "nQxNx40KL0o68W0Qsk3DYQtt";

let storyapi = new StoryblokClient({
  accessToken: ACCESS_TOKEN,
});

export default {
  props: ['blok'],
  data() {
    return {
      // buttons: [
      //   {
      //     id: 1,
      //     title: "Hier steht eine Headline",
      //     description: "Hier steht die Beschreibung",
      //     img: "",
      //     link: "#",
      //   },
      //   {
      //     id: 2,
      //     title: "Hier steht eine Headline",
      //     description: "Hier steht die Beschreibung",
      //     img: "",
      //     link: "#",
      //   },
      // ],
      buttons: [],
      
    };
  },
  created() {
    // 4. Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    window.storyblok.init({
      accessToken: ACCESS_TOKEN,
    });
    window.storyblok.on("change", () => {
      // this will indicate to load the home story, exchange that with the full slug of your content
      // either it is the page URL or hardcoded as in the example below
      this.getButtons("buttons", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getButtons("buttons", "draft");
      } else {
        this.getButtons("buttons", "published");
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
          console.log('result:');
          console.log(this.buttons);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style lang="scss" scoped>
.button {
  background-color: #2d2f39;
  transition: background 0.25s ease-out;
  position:relative;

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
  
  a{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
  }

  &:hover {
    background-color: #3b3d46;

    .linkArrow {
      transform: translateX(0.45rem);
    }
  }
}
</style>
