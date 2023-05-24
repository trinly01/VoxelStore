<template>
  <v-col cols="12" class="no-padding">
    <div class="d-flex justify-center align-center">
      <v-tabs
        :model-value="$store.state.filter.tab"
        class="no-gutter max-width-1400"
        color="deep-purple-accent-4"
        align-tabs="center"
        height="64px"
      >
        <v-tab v-for="cat in categories" :key="cat" :value="cat" height="64px" @click="setTab(cat)">
          {{ cat }}
        </v-tab>
      </v-tabs>
    </div>
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
    const response = await this.$axios.get('https://fakestoreapi.com/products/categories')
    const categories = response.data
    this.categories = ['all', ...categories]
  },
  methods: {
    ...mapMutations('filter', ['setTab'])
  }
}
</script>

<style scoped lang="scss">
.center-tabs {
  justify-content: center;
  align-items: center;
}
</style>
