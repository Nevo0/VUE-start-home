<template>
  <div class="wraper">
    <div class="search">
      <label for="search">Search</label>
      <input id="search" name="search" placeholder="City" v-model="searchValue" />
      <button v-on:click="handleInput">Search</button>
    </div>
    <div class="results">
      <ul>
        <li v-for="item in results" :key="item.data[0].nasa_id">
          <p>{{item.data[0].description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

const API = "https://images-api.nasa.gov";
console.log(API);

export default {
  name: "search",
  data() {
    return {
      searchValue: "",
      results: []
    };
  },
  methods: {
    handleInput(e) {
      // console.log(this);
      // console.log(e);
      if (true) {
        fetch(`${API}/search?q=${this.searchValue}&media_type=image`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data.collection.items);
            this.results = data.collection.items;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}
.search {
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  label {
    font-family: "Montserrot, sans-serif";
  }
  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid #000;
  }
}
</style>
