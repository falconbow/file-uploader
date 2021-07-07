<template>
  <div class="main">
    <Navbar/>
  <div class="main__wrapper">
    <Uploader/>
    <Previewer/>
  </div>
  </div>
</template>

<script>
import '../../assets/mixins.scss'
import Navbar from '../Navbar/Navbar'
import Uploader from '../Uploader/Uploader'
import Previewer from '../Previewer/Previewer'
export default {
  name: 'Main',
  components: {
    Navbar,
    Uploader,
    Previewer
  }
}
</script>

<style lang="scss">
@import '../../assets/mixins.scss';
.main__wrapper{
  width: 100vw;
  height: 85vh;
  @include flex-center-column
}
</style>
