<template>
  <div>
    <header class="header">
      <div
        class="header-hero-image"
        v-bind:style="{ 'background-image': 'url(' + heroImage + ')' }"
      ></div>
      <p class="list-item-count">{{count}} recipes</p>

      <transition name="fade">
        <h1 class="site-title">{{title}}</h1>
      </transition>
    </header>

    <div class="container introduction">
      <article class="content-block intro">
        <h2 class="content-block-header">{{introTitle}}</h2>
        <prismic-rich-text :field="introCopy"/>
      </article>
      <Latest/>
    </div>
  </div>
</template>

<script>
var PrismicDOM = require("prismic-dom");

import Latest from "./Latest";

export default {
  name: "Intro",
  props: {
    count: {
      type: [Number],
      default: "Counting"
    }
  },
  components: {
    Latest
  },
  data() {
    return {
      title: "",
      heroImage: "",
      introTitle: "",
      introCopy: ""
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("home").then(response => {
        this.title = PrismicDOM.RichText.asText(response.data.title);
        this.heroImage = response.data.logo.url;
        this.introTitle = PrismicDOM.RichText.asText(response.data.intro_title);
        this.introCopy = response.data.intro_copy;
      });
    }
  },
  beforeMount() {
    this.getContent();
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
