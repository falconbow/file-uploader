<template>
  <div>
    <label for="upload" class="uploader" >!!!
    <input id="upload" class="uploader" type="file" @change="setFiles" multiple/>
    </label>
    <button @click="() => uploadFileHandler(this.files)">Submit</button>
  </div>
</template>

<script>
import uniqid from 'uniqid'
import encoder from '../../utils/encoder'
import uploadFileHandler from '../../utils/uploadFileHandler'
export default {
  name: 'Uploader',

  data: function() {
    return {
      files: []
    }
  },

  computed: {
    images(){
      return this.$store.getters.getImages
    }

  },

  methods: {
    uploadFileHandler,
    encoder,
    generateId: function (){
      return uniqid()
    },
    setFiles: function(event) {
      this.files = event.target.files
    }
  },
}
</script>

<style lang="scss">
.button {
  z-index: 10;
  margin-top: 100px;
}
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
