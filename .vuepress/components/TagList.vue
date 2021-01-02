<template lang="html">
  <div>
    <span v-for="el in sortedTags">
      <h2 :id="el.tag">
        <router-link
          :to="{ path: `/tags.html#${el.tag}`}"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{el.tag}}
      </h2>
      <ul>
        <li v-for="page in el.page">
          <router-link
            :to="{ path: page.path}">{{page.title}}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
import _ from "underscore";

export default {
  computed: {
    tags() {
      let tags = {};
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }
      return tags;
    },

    sortedTags() {
      let sortedTags = [];
      let tags = this.tags;

      const sortedTagNames = _.sortBy(Object.keys(this.tags));
      sortedTagNames.forEach(tagName => {
        sortedTags.push({
          tag: tagName,
          page: _.sortBy(tags[tagName], el => el.title.toLowerCase())
        });
      });

      return sortedTags;
    }
  }
};
</script>
