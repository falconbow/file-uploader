<template>
  <div class="uploader">
    <label for="upload" class="uploader__label">
      <span v-if="!this.files.length" class="uploader__label-title"
        >Перенесите файлы сюда!
      </span>
      <div class="uploader__result" v-else>
        <span>Загруженные файлы:</span>
        <span v-for="file in this.files" :key="file.name">
          <span>{{ file.name }}</span>
        </span>
      </div>
      <input
        ref="fileInput"
        id="upload"
        class="uploader__input"
        type="file"
        @change="(event) => uploadFileHandler(event.target.files)"
        multiple
      />
    </label>
    <button class="uploader__submit" @click="this.handleSubmit">
      Загрузить
    </button>
  </div>
</template>

<script>
import uniqid from "uniqid";
import readFile from "../../utils/encoder";
import uploadFileHandler from "../../utils/uploadFileHandler";
import handleSubmit from "../../utils/handleSubmit";
export default {
  name: "Uploader",

  data: function () {
    return {
      files: [],
    };
  },

  computed: {
    images() {
      return this.$store.getters.getImages;
    },
  },

  methods: {
    uploadFileHandler,
    handleSubmit,
    readFile,
    generateId: function () {
      return uniqid();
    },
    setFiles: function (files) {
      this.files = files;
      console.log();
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
@import "../../assets/scss/mixins.scss";

.uploader {
  @include flex-center-column;
  &__label {
    display: inline-block;
    position: relative;
    width: 30vw;
    height: 50vh;
    border: 3px solid $lavender;
    border-radius: 13px;
    &-title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
    }
    &:hover {
      border: 3px solid $richLavender;
    }
  }
  &__submit {
    font-family: "Montserrat-Bold", Serif;
    width: 44%;
    height: 9%;
    margin: 10px;
    align-self: center;
    border: 2px solid $lavender;
    background-color: transparent;
    border-radius: 13px;
    &:focus {
      outline: none;
      border: 2px solid transparent;
      box-shadow: 0 0 0 2pt $richLavender;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  &__result {
    width: 100%;
    height: 90%;
    @include flex-center-column;
  }
}

input[type="file"] {
  position: absolute;
  top: 0;
  opacity: 0;
  display: inline-block;
  width: 90%;
  height: 90%;
  border: 3px solid crimson;
  z-index: 2;
}
</style>
