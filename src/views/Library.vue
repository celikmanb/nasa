<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2>NASA Image and Video Library</h2>
      </v-col>
      <v-col cols="8">  
        <v-text-field v-model="input" label="Please write something to search"></v-text-field>
      </v-col>
      <v-col cols="4">
          <v-btn @click="search()">Search</v-btn>
      </v-col>
      <v-row v-if="library_request_success">
        <v-col v-for="(item,key) in this.library_data.collection.items" cols="4" :key="key">
          <Card :item="item"></Card>
        </v-col>
      </v-row>
    </v-row>

  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import Card from '../components/Card'

export default {
  name: 'Library',
  components: {
    Card,
  },
  data: () => ({
    input: '',
    imageUrl: '',
    rules: {
          required: value => !!value || 'Required.',
    }
    
  }),
  computed: {
      ...mapState({
        library_loading: state => state.Nasa.library_loading,
        library_data: state => state.Nasa.library_data,
        library_error: state => state.Nasa.library_error,
        library_request_success: state => state.Nasa.library_request_success
      })
    },
  methods: {
    ...mapActions({
      fetchLibrary: 'Nasa/fetchLibrary'
    }),
    search() {
      console.log(this.input);
      const data = {
        input: this.input
      }; 
      this.fetchLibrary(data);
    }
  },
  created() {
  }
}
</script>
