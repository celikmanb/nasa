<template>
  <v-container>
    <h2 class="text-center mb-3">Nasa Public API</h2>
    <v-row class="text-center">
      <v-col cols="6">
        <h2>Daily APOD Image</h2>
        <p><b>Image Title: </b>{{this.apod_data.title}}</p>
        <p><b>Explanation: </b>{{this.apod_data.explanation}}</p>   
      </v-col>
      <v-col cols="6">
        <v-img :src="this.apod_data.url"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    
  }),
  computed: {
      ...mapState({
        apod_loading: state => state.Nasa.apod_loading,
        apod_data: state => state.Nasa.apod_data,
        apod_error: state => state.Nasa.apod_error
      })
    },
  methods: {
    ...mapActions({
      fetchApod: 'Nasa/fetchApod'
    }),
  },
  created() {
    this.fetchApod();
  }
}
</script>
