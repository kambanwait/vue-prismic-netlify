<template>
  <div id="app">
    <Intro v-bind:count="count" v-on:read-list-item="showSingleListItem"/>
    <ListAll v-on:read-list-item="showSingleListItem"/>
    <ListSingle v-bind:singleListItem="singleListItemData"/>
  </div>
</template>

<script>
var PrismicDOM = require("prismic-dom");
import Intro from "./components/Intro";
import ListAll from "./components/ListAll";
import ListSingle from "./components/ListSingle";
import "./assets/js/main.js";

export default {
  name: "App",
  components: {
    Intro,
    ListAll,
    ListSingle
  },
  data() {
    return {
      count: 0,
      singleListItemData: {
        title: "",
        heroImg: "",
        copy: ""
      }
    };
  },
  methods: {
    getCount() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "recipe"))
        .then(response => {
          this.count = response.results_size;
        });
    },
    showSingleListItem(uid) {
      this.$prismic.client.getByUID("recipe", uid).then(response => {
        this.singleListItemData.title = PrismicDOM.RichText.asText(
          response.data.title
        );
        this.singleListItemData.heroImg = response.data.hero_image.url;
        this.singleListItemData.copy = response.data.copy;
      });
    }
  },
  beforeMount() {
    this.getCount();
  }
};
</script>

<style lang="scss">
@import "../src/assets/css/main.scss";
</style>
