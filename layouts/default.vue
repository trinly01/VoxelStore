<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="elevation-0 white"
    >
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <div class="row justify-center align-center max-width-1400 mobile-padding">
            <v-toolbar-title>
              <vox-logo />
            </v-toolbar-title>
            <v-spacer />
            <v-btn
              depressed
              icon
              @click.stop="rightDrawer = !rightDrawer"
            >
              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21H2C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V7C0 6.45 0.195833 5.97917 0.5875 5.5875C0.979167 5.19583 1.45 5 2 5H4C4 3.61667 4.4875 2.4375 5.4625 1.4625C6.4375 0.4875 7.61667 0 9 0C10.3833 0 11.5625 0.4875 12.5375 1.4625C13.5125 2.4375 14 3.61667 14 5H16C16.55 5 17.0208 5.19583 17.4125 5.5875C17.8042 5.97917 18 6.45 18 7V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21ZM6 5H12C12 4.16667 11.7083 3.45833 11.125 2.875C10.5417 2.29167 9.83333 2 9 2C8.16667 2 7.45833 2.29167 6.875 2.875C6.29167 3.45833 6 4.16667 6 5ZM16 19V7H2V19H16ZM9 13C10.2333 13 11.35 12.5917 12.35 11.775C13.35 10.9583 13.8417 10.0417 13.825 9.025C13.825 8.74167 13.7333 8.5 13.55 8.3C13.3667 8.1 13.1333 8 12.85 8C12.6167 8 12.4083 8.075 12.225 8.225C12.0417 8.375 11.9083 8.6 11.825 8.9C11.6417 9.53333 11.2833 10.0417 10.75 10.425C10.2167 10.8083 9.63333 11 9 11C8.36667 11 7.77917 10.8083 7.2375 10.425C6.69583 10.0417 6.34167 9.53333 6.175 8.9C6.09167 8.58333 5.96667 8.35417 5.8 8.2125C5.63333 8.07083 5.43333 8 5.2 8C4.91667 8 4.67917 8.1 4.4875 8.3C4.29583 8.5 4.2 8.74167 4.2 9.025C4.2 10.0417 4.69167 10.9583 5.675 11.775C6.65833 12.5917 7.76667 13 9 13Z" fill="#1A1A1A" />
              </svg>
              <v-badge
                v-show="totalItems"
                color="deep-purple accent-4"
                :content="totalItems"
              />
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main class="no-padding">
      <!-- <v-container> -->
      <Nuxt />
      <!-- </v-container> -->
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      :overlay-opacity="0.1"
      width="460"
    >
      <vox-cart @close="rightDrawer = false" />
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <v-row justify="center" align="center" class="footer">
        <v-col cols="12" class="d-flex justify-center align-center">
          <div class="row justify-center align-center max-width-1400 mobile-padding">
            <vox-logo />
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Voxel Store'
    }
  },
  computed: {
    ...mapGetters('cart', ['totalItems']),
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>

<style lang="scss">

$max-width: 1400px;

@mixin mobile-padding {
  padding: 0 20px;
}

@mixin padding($top, $right, $bottom, $left) {
  padding: $top $right $bottom $left !important;
}

$mobile-breakpoint: 1024px;
$small-breakpoint: 500px;

.max-width-1400 {
  max-width: $max-width;
}

@media (max-width: $mobile-breakpoint) {
  .mobile-padding {
    @include mobile-padding;
  }
}

.footer {
  box-sizing: border-box;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 64px;
  border-top: 1px solid rgba(26, 26, 26, 0.1);
}

.hide-on-mobile {
  display: block !important;
}

.show-on-mobile {
  display: none !important;
}

@media (max-width: $small-breakpoint) {
  .padding-20 {
    @include padding(20px, 20px, 0px, 20px);
  }

  .hide-on-mobile {
    display: none !important;
  }

  .show-on-mobile {
    display: block !important;
  }
}

.no-shadow {
  box-shadow: none !important;
}

.no-padding {
  padding: 0;
  margin: 0;
}

.sub-text {
  width: 268px;
  height: 20px;
  font-family: 'Instrument Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgba(26, 26, 26, 0.5);
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>
