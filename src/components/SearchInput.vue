<template>
  <div class="componet search">
    <div class="search">
      <label for="search"></label>
      <input id="search" name="search" placeholder="City" v-model="searchValue" />
      <button v-on:click="handleInput">Search</button>
    </div>
    <div class="results"></div>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  margin-top: 10px;
  label {
    font-family: "Montserrat", sans-serif;
  }
  input {
    background: none;
    height: 30px;
    border: 0;
    border-bottom: 1px solid rgb(253, 239, 113);
    color: rgb(247, 246, 196);
  }
  button {
    margin: 10px;
    padding: 5px 10px;
    background-color: rgb(253, 239, 113);
    border: none;

    button:hover {
      background-color: rgb(253, 157, 113);
      color: rgb(240, 255, 255);
    }
  }
}
</style>
