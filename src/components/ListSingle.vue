<template>
  <section class="list-item-card">
    <a href="/" class="hideCard">Close recipe</a>
    <img :src="singleListItem.heroImg" class="list-item-image" :alt="singleListItem.title">
    <h3 class="list-item-title">{{singleListItem.title}}</h3>
    <prismic-rich-text :field="singleListItem.copy"/>
  </section>
</template>

<script>
var PrismicDOM = require("prismic-dom");
export default {
  name: "ListSingle",
  props: {
    singleListItem: {
      type: [Object],
      default: "Loading"
    }
  },
  methods: {
    hideRecipeCard() {
      const body = document.querySelector("body");
      body.classList.remove("open-card");
    }
  }
};
</script>
