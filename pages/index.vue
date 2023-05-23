<template>
  <v-row justify="center" align="center">
    <vox-hero />
    <vox-filter />
    <vox-products :products="products" />
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      products: []
    }
  },
  async mounted () {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    this.products = [...data]
    window.console.log(data)
  }
}
</script>
