export const actions = {
  addFiles ({commit}, files) {
    commit('addFiles', files)
  },
  encodeImage ({commit}, file, base) {
    commit('encodeImage', file, base)
  }
}
