<template lang="html">
  <div class="tag-links" v-if="$page.frontmatter.tags">
    <hr />
    Tags:
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}"
      class="tag"
      >
      {{'#' + tag}}
    </router-link>
  </div>
</template>

<style scoped>
div.tag-links {
  padding-top: 2em;
}
</style>