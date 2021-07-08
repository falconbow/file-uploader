<template>
  <div class="previewer">
    <div v-if="!this.images.length">Тут будут загруженные изображения.</div>
    <div
      class="previewer__gallery-item"
      v-for="image in this.images"
      :key="image.url"
      v-else
    >
      <img
        class="previewer__gallery-item-image"
        :src="image.url"
        :alt="image.name"
      />
    </div>
  </div>
</template>

<script>
import "../../assets/scss/mixins.scss";
export default {
  name: "Previewer",

  computed: {
    images() {
      return this.$store.getters.getImages;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/mixins.scss";
@import "../../assets/scss/variables";
.previewer {
  display: flex;
  align-items: flex-start;
  width: 70vw;
  max-height: 10vh;
  border: 3px solid $richLavender;
  overflow-x: scroll;
  flex-basis: 100%;
  &__gallery {
    &-item {
      flex: 0 0 auto;
      flex-direction: column;
      width: 20%;
      height: 90%;
      @include flex-center;
      &-image {
        align-self: center;
        object-fit: scale-down;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
