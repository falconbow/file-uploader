export const mutations = {
  addFiles(state, files) {
    state.loadedFiles = state.loadedFiles.concat(files);
  },
  encodeImage(state, image, base) {
    state.loadedFiles.map((file) =>
      image.name === file[0] ? [...file, base] : file
    );
  },
};
