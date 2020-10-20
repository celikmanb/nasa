<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    >
    <router-link class="router" to="/" >Daily Images</router-link>
    <router-link class="router" to="/epic" >Earth Image</router-link>
    <router-link class="router" to="/library">Library</router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
  .router {
    color:white;
    text-decoration: none;
    margin-right: 15px;
    &:hover {
      color: #E53935;
    }
  }
</style>
