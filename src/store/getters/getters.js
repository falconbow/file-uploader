
const state = {
  loadedFiles: []
}

const getters = {
  getImages: state => state.loadedFiles.filter(loadedFile => loadedFile.type.includes('image')),
  getNonImages: state => state.loadedFiles.filter(loadedFile => !loadedFile.type.includes('image'))
}

 const actions = {
  addFiles ({commit}, files) {
    commit('addFiles', files)
},
encodeImage ({commit}, file, base) {
    commit('encodeImage', file, base)
}
}

const mutations = {
  addFiles (state, files){
    state.loadedFiles = state.loadedFiles.concat(files)
},
encodeImage(state, image, base){
    state.loadedFiles.map((file) => image.name === file[0] ? [...file, base] : file)
}
}

export default {
  state, getters, actions, mutations
}
