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
  asyncData ({ app }) {
    return app.$axios.$get('https://fakestoreapi.com/products')
      .then(data => ({ products: data }))
      .catch((error) => {
        window.console.error('Error fetching product data:', error)
        return { products: [] }
      })
  },
  data () {
    return {
      products: []
    }
  },
  head () {
    let title = 'Voxel Store - '
    let description = 'Voxel Store - products all electronics jewelery me clothing'
    let image = ''
    let rating = ''

    // Check if products data exists
    if (this.products.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.products.length)
      const firstProduct = this.products[randomIndex]
      title = firstProduct.title
      description = firstProduct.description
      image = firstProduct.image
      rating = firstProduct.rating.rate
    }

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
        },
        {
          hid: 'og:rating',
          property: 'og:rating',
          content: rating
        }
        // Add more meta tags as needed
      ]
    }
  },
  mounted () {
    window.console.log('products', this.products)
  }
}
</script>
