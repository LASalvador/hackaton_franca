<template>
  <v-footer
    id="core-footer"
    absolute
    height="82">
  </v-footer>
</template>
<script>
  /* eslint-disable */
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/dashboard' },
      { name: 'Creative Tim', Link: 'https://www.creative-tim.com' },
      { name: 'About Us', Link: 'https://creative-tim.com/presentation' },
      { name: 'Blog', Link: 'https://blog.creative-tim.com' }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
