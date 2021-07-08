<template>
  <div class="nav"><span class="nav__header">File uploader</span></div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
@import "../../assets/scss/mixins.scss";
@import "../../assets/scss/variables.scss";
.nav {
  width: 100vw;
  height: 9vh;
  border-bottom: 2px solid $richLavender;
  @include flex-center;
  &__header {
    font-family: "Montserrat-Bold", Serif;
    font-size: 30px;
  }
}
</style>
