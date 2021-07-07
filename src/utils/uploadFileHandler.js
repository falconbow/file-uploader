import {generateSuccessMessage, generateErrorMessage} from './toastr/messages'

export default function(files) {
  const fileList = [...files]
  fileList.map(async (file)=> {
    let filesToUpload = []
    let fileToAdd = {}
    if(file.type.includes('image') && !this.images.some((fileToCheck) => fileToCheck.name == file.name)) {
      console.log(this.$store.getters?.getImages)
      await this.encoder(file, (data) => {
        fileToAdd.id = this.generateId()
        fileToAdd.name = file.name
        fileToAdd.type = file.type
        fileToAdd.encoding = `data:${file.type};base64,${data.base64}`
        filesToUpload.push(fileToAdd)
        this.$toastr.Add(generateSuccessMessage(file.name))
        console.log(`%cУспешно: ${file.name}`, 'color: #a76bcf; font-size: 30px; background-color: #290e05')
        console.log(fileToAdd.encoding)
        this.$store.dispatch('addFiles', filesToUpload)
      })
    }
    else if(this.images.some((fileToCheck) => fileToCheck.name == file.name)){
      this.$toastr.Add(generateErrorMessage(file.name, 'Файл с таким именем уже существует'))
    }
    else{
      fileToAdd.name= file.name
      fileToAdd.type= file.type
      filesToUpload.push(fileToAdd)
      this.$toastr.Add(generateErrorMessage(file.name))
      console.log(`%cНеподходящий формат: ${file.name}`, 'color: crimson; font-size: 30px; background-color: #290e05')
      this.$store.dispatch('addFiles', filesToUpload)
    }
  })
}
