<template>
  <div class="cart-component">
    <div class="cart-header row justify-center align-center">
      <div class="title">
        Your Cart (2)
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
      <div v-for="item in cart" :key="item.id" class="row">
        <div class="img-container">
          a
        </div>
        <div class="col item-details">
          <div class="item-title">
            asdasd asd asd as dasd as
          </div>
          <div class="row price sub-details mt-auto">
            $123.31
            <span class="flex-grow-1" />
            <a class="price">
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
export default {
  computed: {
    cart () {
      return this.$store.state.cart.cart
    }
  }
}
</script>

<style scoped lang="scss">
.cart-component {
  padding: 32px 32px 24px;
}

.cart-header {

  border-bottom: 1px solid rgba(26, 26, 26, 0.1);
  padding: 0px 0px 24px;
  gap: 24px;
}

.cart-items {
  padding-top: 64px;
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
