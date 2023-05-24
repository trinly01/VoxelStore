<template>
  <v-col cols="12" class="no-padding">
    <div class="d-flex justify-center align-center">
      <div class="product-grid max-width-1400">
        <div v-for="item in filteredProducts" :key="'product'+item.id" class="product">
          <img :src="item.image" :alt="item.title" class="product-image" loading="lazy">
          <div class="product-details">
            <a class="product-title ellipsis">
              {{ item.title }}
            </a>
            <div class="product-price">
              {{ $n(item.price, 'currency') }}
            </div>
            <button class="add-to-cart-button" @click="addToCart(item)">
              <svg
                style="margin-right: 11px;"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 14C6.71667 14 6.47917 13.9042 6.2875 13.7125C6.09583 13.5208 6 13.2833 6 13V8H1C0.716667 8 0.479167 7.90417 0.2875 7.7125C0.0958333 7.52083 0 7.28333 0 7C0 6.71667 0.0958333 6.47917 0.2875 6.2875C0.479167 6.09583 0.716667 6 1 6H6V1C6 0.716667 6.09583 0.479167 6.2875 0.2875C6.47917 0.0958333 6.71667 0 7 0C7.28333 0 7.52083 0.0958333 7.7125 0.2875C7.90417 0.479167 8 0.716667 8 1V6H13C13.2833 6 13.5208 6.09583 13.7125 6.2875C13.9042 6.47917 14 6.71667 14 7C14 7.28333 13.9042 7.52083 13.7125 7.7125C13.5208 7.90417 13.2833 8 13 8H8V13C8 13.2833 7.90417 13.5208 7.7125 13.7125C7.52083 13.9042 7.28333 14 7 14Z" fill="#1A1A1A" />
              </svg>

              Add to Cart
            </button>
          </div>
        </div>
        <!-- Add more product items as needed -->
      </div>
    </div>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filteredProducts () {
      const tab = this.$store.state.filter.tab
      if (tab === 'all') {
        return this.products
      }
      return this.products.filter(p => p.category === tab)
    }
  },
  methods: {
    ...mapActions('cart', ['addToCart'])
  }
}
</script>

<style scoped lang="scss">
$product-width: 341px;
$product-height: 503px;
$product-gap: 12px;

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 42px;
  gap: $product-gap;

  .product {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 32px;

    width: 341px;
    height: 503px;

    border: 1px solid rgba(26, 26, 26, 0.1);
    border-radius: 12px;

    .product-image {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px;

      width: 100%;
      height: 280px;
      min-height: 280px;
      object-fit: contain; /* Adjust the value as per your requirement */
    }

    .product-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0px;
      gap: 6px;

      width: 293px;
      height: 100%;
    }

    .product-title {
      font-family: 'Instrument Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #1A1A1A;
      margin-bottom: 6px;
    }

    .product-price {
      font-family: 'Instrument Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: rgba(26, 26, 26, 0.5);
    }

    .add-to-cart-button {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 56px;
      margin-top: auto;
      background: #F4F4F4;
      border-radius: 12px;
    }
  }
}
</style>
