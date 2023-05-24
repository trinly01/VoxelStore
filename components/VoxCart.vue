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
      <v-card
        class="mx-auto no-gutter no-padding no-shadow"
      >
        <v-list-item three-line>
          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          />
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-spacer />
          <v-btn
            outlined
            rounded
            text
          >
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="cart-checkout">
      checkout
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-component {
  padding: 32px 32px 24px;
}

.cart-header {

  border-bottom: 1px solid rgba(26, 26, 26, 0.1);
  padding: 0px 0px 24px;
  gap: 24px;
}

.title {
  font-family: 'Instrument Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
}
</style>
