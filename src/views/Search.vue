<template>
  <div class="wraper">
    <Claim />
    <SearchInput />
  </div>
</template>

<script>
// @ is an alias to /src
import Claim from "@/components/Claim.vue";
import SearchInput from "@/components/SearchInput.vue";

const API = "https://images-api.nasa.gov";
console.log(API);

export default {
  name: "search",
  components: { Claim, SearchInput },

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
  background-image: url("../img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
  color: #fff;
  height: 100vh;
}
</style>
