<template>
  <div class="cart-component">
    <div class="cart-header row justify-center align-center">
      <h1 class="title">
        Your Cart ({{ totalItems }})
      </h1>
      <span class="flex-grow-1" />
      <div class="button-container">
        <v-btn color="black" icon class="depressed" aria-label="Close cart" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="cart-items">
      <!-- {{ cart }} -->
      <div v-for="item in cart" :key="'cart'+item.id" class="row item">
        <div class="img-container">
          <img :src="item.image" :alt="item.title + ' product image'" class="product-image" loading="lazy">
        </div>
        <div class="col item-details">
          <div class="item-title ellipsis">
            {{ item.title }}
          </div>
          <div class="row price sub-details mt-auto">
            {{ $n(item.price, 'currency') }} &nbsp; &nbsp; &nbsp;
            <span v-show="item.qty > 1">Qty: {{ item.qty }}</span>
            <v-spacer />
            <a class="price" @click="removeItem(item.id)">
              Remove
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-show="cart.length" class="cart-checkout">
      <div class="row mt-auto total" aria-live="polite">
        Total
        <v-spacer />
        {{ $n(cartTotal, 'currency') }}
      </div>
    </div>
    <v-btn v-show="cart.length" class="checkout" depressed height="59">
      Continue to Checkout
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['totalItems']),
    cart () {
      const result = []
      const map = new Map()

      for (const item of this.$store.state.cart.cart) {
        if (map.has(item.id)) {
          // If the item is already in the map, increment the quantity
          const existingItem = map.get(item.id)
          existingItem.qty += 1
          existingItem.subTotal = existingItem.qty * item.price
        } else {
          // If the item is not in the map, add it with quantity 1
          const newItem = { ...item, qty: 1, subTotal: item.price }
          map.set(item.id, newItem)
          result.push(newItem)
        }
      }

      return result

      // return this.$store.state.cart.cart
    },
    cartTotal () {
      return this.cart
        .map(item => item.price * item.qty)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
  },
  mounted () {
    this.initCart()
  },
  methods: {
    ...mapActions('cart', ['initCart', 'removeItem'])
  }
}
</script>

<style scoped lang="scss">

.cart-component {
  padding: $padding-large $padding-large $padding-medium;

  .cart-header {
    border-bottom: 1px solid $border-color;
    padding: 0 $padding-medium $padding-small;
    gap: $gap-medium;
  }

  .cart-items {
    padding-top: $gap-large;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: $padding-small;
    gap: $gap-small;
    width: 102px;
    height: 102px;
    background: #FFFFFF;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }

  .item-details {
    min-height: 72px;
  }

  .sub-details {
    padding: $padding-medium $padding-small;
  }

  .gap-12 {
    gap: 12px;
  }

  .title {
    font-family: $font-family;
    font-style: normal;
    font-weight: $font-weight-bold;
    font-size: $font-size-large;
    line-height: $line-height-large;
  }

  .item-title {
    font-family: $font-family;
    font-style: normal;
    font-weight: $font-weight-bold;
    font-size: $font-size-medium;
    line-height: $line-height-medium;
  }

  .price {
    font-family: $font-family;
    font-style: normal;
    font-weight: $font-weight-medium;
    font-size: $font-size-medium;
    color: $color-light;
  }
}

.checkout {
  margin-top: 34px;
  width: 100%;
  height: 59px;
  background: linear-gradient(0deg, $gradient-color-1, $gradient-color-1), $gradient-color-2;
  border-radius: $border-radius;
  font-family: $font-family;
  font-style: normal;
  font-weight: $font-weight-bold;
  font-size: $font-size-medium;
  line-height: $line-height-medium;
  text-edge: cap;
  color: #FFFFFF;
}

.total {
  padding-top: $padding-medium;
  font-family: $font-family;
  font-style: normal;
  font-weight: $font-weight-bold;
  font-size: $font-size-large;
  line-height: $line-height-large;
  color: $color-dark;
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 70px;
  object-fit: contain;
}

.item {
  padding-bottom: 14px;
}

@mixin n($value, $format) {
  $formattedValue: $value + ' currency format'; // Replace with your currency formatting logic
  @if $format == 'currency' {
    content: #{$formattedValue};
  }
}

.cart-component {
  padding: 32px 32px 24px;
}

.cart-header {
  border-bottom: 1px solid rgba(26, 26, 26, 0.1);
  padding: 0px 0px 24px;
  gap: 24px;
}

.cart-items {
  padding-top: 48px;
}

.img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  width: 102px;
  height: 102px;
  background: #FFFFFF;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 8px;
}

.item-details {
  min-height: 72px;
}

.sub-details {
  padding: 24px 16px;
}

.gap-12 {
  gap: 12px;
}

.title {
  font-family: 'Instrument Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
}

.item-title {
  font-family: 'Instrument Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.price {
  // margin-top: 16px;
  font-family: 'Instrument Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  // line-height: 20px;
  color: rgba(26, 26, 26, 0.5);
}

</style>
