<template>
  <div>
    <div v-for="country in countries" :key="country.id">
      <p>
        <span>{{ country.id }}</span>
        <span>{{ country.name_ja }}</span>
        <span>{{ country.name_en }}</span>
      </p>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: function () {
    return {
      countries: []
    }
  },

  mounted: function () {
    this.fetch()
  },

  methods: {
    fetch: function () {
      const self = this

      axios.get('/countries.json')
        .then((res) => {
          self.countries = res.data
        })
    }
  }

}

</script>
