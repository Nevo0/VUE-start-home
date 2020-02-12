<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img :src="photo" alt />
      </div>
      <div class="description">
        <h2 class="title">{{title}}</h2>
        <p class="decription">{{description}}</p>
      </div>
    </div>
    <div class="close" @click="$emit('closeModal')"></div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      photo: null,
      title: null
    };
  },
  mounted() {
    // console.log(this.item);
    this.photo = this.item.links[0].href;
    this.title = this.item.data[0].title;
    this.description = this.item.data[0].description;
    console.log(this.item.data[0].title);
  }
};
</script>

<style lang='scss' scoped>
.outerWrapper {
  background-color: #f6f6f6;
  color: #000;
  position: fixed;
  max-width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  @media (min-width: 624px) {
    max-width: 80%;
    height: 70%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 1024px) {
    max-width: 70%;
    height: 60%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.3);
  }
}

.close {
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 2 0px;
  padding: 30px;
  right: 10px;
  top: 10px;
  &::after,
  &::before {
    position: absolute;
    right: 20px;
    top: 30px;
    width: 20px;
    height: 3px;
    content: "";
    background-color: #000;
    display: block;
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
}

.innerWrapper {
  display: flex;
  height: 100%;
  padding: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .photo {
    width: 90%;
    height: auto;
    background: balck;
    img {
      width: 100%;
    }
  }
  @media (min-width: 624px) {
    // flex-direction: row;
    .photo {
      min-width: 40%;
      margin-right: 15px;
    }
  }
}
</style>
