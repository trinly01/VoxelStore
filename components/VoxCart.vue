<template>
  <div class="cart-component">
    <div class="cart-header row justify-center align-center">
      <div class="title">
        Your Cart ({{ totalItems }})
      </div>
      <span class="flex-grow-1" />
      <div class="button-container">
        <v-btn color="black" icon @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="cart-items">
      <!-- {{ cart }} -->
      <div v-for="item in cart" :key="'cart'+item.id" class="row item">
        <div class="img-container">
          <img :src="item.image" :alt="item.title" class="product-image" loading="lazy">
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
      checkout
    </div>
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
        } else {
          // If the item is not in the map, add it with quantity 1
          const newItem = { ...item, qty: 1 }
          map.set(item.id, newItem)
          result.push(newItem)
        }
      }

      return result

      // return this.$store.state.cart.cart
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

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 70px;
  object-fit: contain; /* Adjust the value as per your requirement */
}

.item {
  padding-bottom: 14px;
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
