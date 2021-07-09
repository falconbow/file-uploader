import readFile from "./readFile";

export default async function handleSubmit() {
  await Promise.all(
    this.images.map(async (image) => {
      const base64 = await readFile(image.file, "readAsDataURL");
      console.log(base64);
    })
  );
  this.$refs.fileInput.value = "";
  this.files = [];
}
