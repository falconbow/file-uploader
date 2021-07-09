export const mutations = {
  addFiles(state, files) {
    state.loadedFiles = state.loadedFiles.concat(files);
  },
};
