export default async function(event) {
  const fileList = [...event.target.files]
  fileList.map(async (file)=> {
    let filesToUpload = []
    let fileToAdd = {}
    if(file.type.includes('image')) {
      await this.encoder(file, (data) => {
        fileToAdd.id = this.generateId()
        fileToAdd.name = file.name
        fileToAdd.type = file.type
        fileToAdd.encoding = `data:${file.type};base64,${data.base64}`
        filesToUpload.push(fileToAdd)
        console.log(`%cУспешно: ${file.name}`, 'color: #a76bcf; font-size: 30px; background-color: #290e05')
        console.log(fileToAdd.encoding)
        this.$store.dispatch('addFiles', filesToUpload)
      })
    }
    else{
      fileToAdd.name= file.name
      fileToAdd.type= file.type
      filesToUpload.push(fileToAdd)
      console.log(`%cНеподходящий формат: ${file.name}`, 'color: crimson; font-size: 30px; background-color: #290e05')
      this.$store.dispatch('addFiles', filesToUpload)
    }
  })
}
