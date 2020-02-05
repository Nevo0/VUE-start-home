<template>
  <div class="claimWraper">
    <h1 class="claim">Spacer</h1>

    <p
      class="subclaim"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor asperiores commodi cu</p>
    <p class="subclaim">Type anything space-related to start</p>
  </div>
</template>

<script>
export default {
  name: "Claim"
};
</script>

<style lang="scss" scoped>
.claimWraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.claim {
  font-size: 50px;
}
.subclaim {
  font-size: 16px;
  margin: 10px 0 0 0;
}
</style>
