<template>
  <v-col cols="12" class="desktop-padding no-padding">
    <!-- {{ $store.state.filter }} -->
    <v-tabs
      :model-value="$store.state.filter.tab"
      class="no-gutter"
      color="deep-purple-accent-4"
      align-tabs="center"
      height="64px"
    >
      <v-tab v-for="cat in categories" :key="cat" :value="cat" height="64px" @click="setTab(cat)">
        {{ cat }}
      </v-tab>
    </v-tabs>
  </v-col>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      categories: []
    }
  },
  async fetch () {
    const response = await this.$axios.get(
      'https://fakestoreapi.com/products/categories'
    )
    const categories = response.data
    this.categories = ['all', ...categories]
  },
  computed: {
    cart () {
      return this.$store.state.filter.tab
    }
  },
  methods: {
    ...mapMutations('filter', ['setTab'])
  }
}
</script>
