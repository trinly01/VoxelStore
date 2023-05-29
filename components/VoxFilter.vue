<template>
  <v-col cols="12" class="no-padding">
    <div class="d-flex justify-center align-center">
      <v-tabs
        :model-value="$store.state.filter.tab"
        class="no-gutter max-width-1400 hide-on-mobile"
        color="#1A1A1A"
        align-tabs="center"
        height="64px"
      >
        <v-tab
          v-for="cat in categories"
          :key="cat"
          :value="cat"
          height="64px"
          @click="setTab(cat)"
        >
          {{ cat }}
        </v-tab>
      </v-tabs>
      <v-select
        :value="$store.state.filter.tab"
        :items="categories"
        color="black"
        outlined
        class="padding-20 show-on-mobile"
        style="text-transform: capitalize;"
        @change="setTab"
      />
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
  mounted () {
    setTimeout(() => {
      document.querySelector('div.v-slide-group__prev.v-slide-group__prev--disabled').remove()
    }, 500)
  },
  methods: {
    ...mapMutations('filter', ['setTab'])
  }
}
</script>

<style scoped lang="scss">

@mixin center-flexbox {
  justify-content: center;
  align-items: center;
}

.capitalize-first::first-letter {
  text-transform: uppercase;
}

.v-tab,
.v-select-list {
  text-transform: capitalize !important;
}

.center-tabs {
  @include center-flexbox;
}

.no-padding {
  padding: 0;
}

.hide-on-mobile {
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
}

.show-on-mobile {
  display: block;

  @media (min-width: 600px) {
    display: none;
  }
}

.center-tabs {
  @include center-flexbox;
}

.v-tabs-container {
  height: 64px;
}

.v-tab,
.v-select-list {
  height: 64px;
}

.my-v-tab {
  @extend .v-tab;
  @include center-flexbox;
}

.my-v-select-list {
  @extend .v-select-list;
  @include center-flexbox;
}

.my-v-tab,
.my-v-select-list {
  background-color: $primary-color;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

.my-v-select-list {
  color: $secondary-color;
}

</style>
