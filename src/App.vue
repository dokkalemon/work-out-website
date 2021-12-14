<template>
  <div id="app">
    <Header :headerArray="headerItem"/>
    
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },

  data() {
    return {
      headerItem: [
        {
          label: 'Home',
          url: '/',
          activeState: true,
        },
        {
          label: 'Chi Siamo',
          url: '/chi-siamo',
          activeState: false,
        },
        {
          label: 'Il Nostro Istituto',
          url: '/il-nostro-istituto',
          activeState: false,
        },
        {
          label: 'Contattaci',
          url: '/contattaci',
          activeState: false,
        },
      ]
    }
  }

}
</script>

<style lang="scss">
//import global
@import './styles/global.scss'

</style>