<template>
  <article class="content-block latest-list-item">
    <h2 class="content-block-header">Latest recipe</h2>

    <h3 class="list-item-title">{{title}}</h3>
    <prismic-rich-text :field="excerpt"/>
    <p class="list-item-link" v-on:click="$parent.$emit('read-list-item', id)">Read the full recipe</p>
  </article>
</template>

<script>
var PrismicDOM = require("prismic-dom");

export default {
  name: "Latest",
  data() {
    return {
      title: "",
      excerpt: "",
      id: ""
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "recipe"), {
          orderings: "[my.blog_post.date desc]",
          pageSize: 1
        })
        .then(response => {
          this.title = PrismicDOM.RichText.asText(
            response.results[0].data.title
          );
          this.excerpt = response.results[0].data.excerpt;
          this.id = response.results[0].uid;
        });
    }
  },
  beforeMount() {
    this.getContent();
  }
};
</script>
