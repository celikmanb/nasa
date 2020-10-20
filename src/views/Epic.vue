<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2>Daily EARTH Image By Rovers</h2>
      </v-col>
      <template v-if="this.epic_request_success">
        <template v-for="item in this.epic_data.photos" >
          <div :key="item.id" style="display: flex; border-style: solid; border-width: 1px; margin: 5px auto;" >
              <v-col cols="6" style="margin: auto;">
                <p class="text-left">Rover Name: {{item.rover.name}}</p>
                <p class="text-left">Date: {{item.earth_date}}</p>
                <p class="text-left">Landing Date: {{item.rover.landing_date}}</p>
                <p class="text-left">Launch Date: {{item.rover.launch_date}}</p>
              </v-col>
              <v-col cols="6">
                <v-img :src="item.img_src" style="width:800px;"></v-img>
              </v-col> 
              </div>
          </template>
      </template>
    </v-row>

  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Epic',
  data: () => ({
    lat: 0,
    lon: 0,
    check: false,
    imageUrl: '',
    rules: {
          required: value => !!value || 'Required.',
    }
    
  }),
  computed: {
      ...mapState({
        epic_loading: state => state.Nasa.epic_loading,
        epic_data: state => state.Nasa.epic_data,
        epic_error: state => state.Nasa.epic_error,
        epic_request_success: state => state.Nasa.epic_request_success
      })
    },
  methods: {
    ...mapActions({
      fetchEpic: 'Nasa/fetchEpic'
    }),
    validate () {
        /* console.log(this.$refs.form.validate())
        this.$refs.form.validate()
        const data = {
          lat: this.lat,
          lon: this.lon
        } */
        this.fetchEpic();
    },
  },
  created() {
    this.fetchEpic();
  }
}
</script>
