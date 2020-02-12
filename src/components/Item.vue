<template>
  <div :style="style" class="item"></div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      photo: this.item.links[0].href,
      titel: this.item.data[0].title,

      style: { backgroundImage: `url("${this.item.links[0].href}")` }
    };
  },
  mounted() {
    // console.log(this.item);
    console.log(this.item.links[0].href);
  }
};
</script>

<style>
.item {
  color: #000;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
