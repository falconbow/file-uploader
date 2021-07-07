export const getters = {
  getImages: state => state.loadedFiles.filter(loadedFile => loadedFile.type.includes('image')),
  getNonImages: state => state.loadedFiles.filter(loadedFile => !loadedFile.type.includes('image'))
}


