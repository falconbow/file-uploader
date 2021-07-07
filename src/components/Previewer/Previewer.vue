<template>
  <div class="previewer">
    <div class="previewer__gallery-item" v-for="image in this.images.reverse()" :key="image.id">
      <img class="previewer__gallery-item-image" :src='image.encoding' alt="pikcha"/>
      <span>{{ image.name }}</span>
    </div>
  </div>
</template>


<script>
import  '../../assets/mixins.scss'
export default {
  name: 'Previewer',

  computed: {
    images() {
      return this.$store.getters.getImages
    }
  },
}
</script>

<style lang="scss">
@import "../../assets/mixins.scss";
.previewer {
  display: flex;
  align-items: flex-start;
  width: 70vw;
  max-height: 35vh;
  border: 3px solid hotpink;
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
