<template>
  <div>
    <label for="upload" class="uploader" >!!!
    <input id="upload" class="uploader" type="file" @change="uploadFileHandler" multiple/>
    </label>
    <div v-for="image in this.images" :key="image.id">
    <img id="zadnica" :src='image.encoding' alt="pikcha"/>
    </div>
  </div>
</template>

<script>
import uniqid from 'uniqid'
import encoder from '../../utils/encoder'
import uploadFileHandler from '../../utils/uploadFileHandler'
export default {
  name: 'Uploader',

  computed: {
    images() {
      return this.$store.getters.getImages
    }
  },

  methods: {
    uploadFileHandler,
    encoder,
    generateId: function (){
      return uniqid()
    }
  },
}
</script>

<style lang="scss">
#uploader{
  display: inline-block;
  width: 50%;
  height: 50%;
  border: 5px solid dodgerblue;
  z-index: 2;
}
.uploader {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 5px solid dodgerblue;
}
.uploader:hover {
  border: 5px solid hotpink;
 }
input[type='file']{
  position: absolute;
  opacity: 0;
  z-index: 2;
}
</style>
