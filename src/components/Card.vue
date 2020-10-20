<template>
  <v-container>
    <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="item.links[0].href"
    ></v-img>

    <v-card-title>{{item.data[0].title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <!-- <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div> -->

      <div>{{item.data[0].description}}</div>
    </v-card-text>

    <!-- <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title> -->

  </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Card',
    props: [ 'item' ],

    data: () => ({
    }),
  }
</script>
