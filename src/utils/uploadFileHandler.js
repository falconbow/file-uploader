async function uploadFileHandler(files) {
  const dataUrls = [];
  const fileList = [...files];
  this.setFiles(fileList);

  fileList.forEach((file) => {
    if (!file.type.includes("image")) {
      return;
    }

    if (this?.images?.some((image) => image.file.name == file.name)) {
      return;
    }

    dataUrls.push({
      file,
      url: URL.createObjectURL(file),
    });
  });
  this.$store.dispatch("addFiles", dataUrls);
}

export default uploadFileHandler;
