<template>
  <section class="container list-all-items">
    <h2 class="content-block-header">All recipes</h2>

    <article class="content-block list-item" v-for="item of items" v-bind:key="item.id">
      <prismic-rich-text :field="item.data.title"/>
      <prismic-rich-text :field="item.data.excerpt"/>
      <p class="list-item-link" v-on:click="$emit('read-list-item', item.uid)">Read the full recipe</p>
    </article>
  </section>
</template>

<script>
var PrismicDOM = require("prismic-dom");

export default {
  name: "ListAll",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "recipe"), {
          orderings: "[document.first_publication_date]"
        })
        .then(response => {
          this.items = response.results;
        });
    }
  },
  beforeMount() {
    this.getContent();
  }
};
</script>
