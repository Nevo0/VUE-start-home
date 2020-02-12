<template>
  <div :class="[{ flexStart: step===1 },'wraper']">
    <!-- dodawanie warunkowo klasy i klasy ktroą bedzia mial nasz div -->
    <transition name="slide">
      <div class="logo" v-if="step === 1"></div>
    </transition>
    <transition name="fade">
      <HeroImage v-if="step === 0" />
    </transition>
    <Claim v-if="step === 0" />
    <SearchInput v-model="searchValue" @input="handleInput" :dark="step === 1" />
    <div class="result" v-if="results && !loading && step===1">
      <Item
        v-for="item in results"
        :item="item"
        :key="item.data[0].nasa_id"
        @click.native="handleModalOpen(item)"
      />
    </div>
    <Modal v-if="modalOpen" :item="modalData" @closeModal="modalOpen= false" />
  </div>
</template>

<script>
// @ is an alias to /src
import Claim from "@/components/Claim.vue";
import SearchInput from "@/components/SearchInput.vue";
import HeroImage from "@/components/HeroImage.vue";
import Item from "@/components/Item.vue";
import Modal from "@/components/Modal.vue";

const API = "https://images-api.nasa.gov";
console.log(API);

export default {
  name: "search",
  components: {
    Claim,
    SearchInput,
    HeroImage,
    Item,
    Modal
  },

  data() {
    return {
      loading: false,
      modalData: null,
      modalOpen: false,
      step: 0,
      searchValue: "",
      results: []
    };
  },
  methods: {
    handleModalOpen(item) {
      this.modalOpen = !this.modalOpen;
      this.modalData = item;
      console.log(item);
    },
    handleInput(e) {
      this.loading = true;
      if (true) {
        fetch(`${API}/search?q=${this.searchValue}&media_type=image`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data.collection.items);
            this.results = data.collection.items;
            this.loading = false;
            this.step = 1;
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
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 30px;
  width: 100%;
  color: #fff;
  height: 100vh;
  &.flexStart {
    justify-content: flex-start;
  }

  .fade-enter-active {
    transition: all 0.4s ease;
  }
  .fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-50px);
    opacity: 0;
  }
}
.logo {
  position: absolute;
  top: 10px;
  z-index: 2;
  width: 120px;
  height: 50px;
  background-image: url("../img/nevo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  // background-position: 70% 100%;
}
.logo::after {
  content: "";
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 100%;
  height: 100%;
}

.slide-enter-active {
  transition: all 0.4s ease;
}
.slide-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter, .slide-leave-to
/* .slide-slide-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
p {
  color: black;
}

.result {
  margin: 50px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  @media (min-width: 638px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
