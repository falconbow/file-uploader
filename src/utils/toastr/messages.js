const message = {
  progressBarValue: 0,
  clickClose: true
}

export const generateSuccessMessage = (fileName) => {
  const singleMessage = {...message}
  singleMessage.title = 'Успешно загружено'
  singleMessage.msg = fileName
  singleMessage.type = 'success'
  return singleMessage
}

export const generateErrorMessage = (fileName, title) => {
  const singleMessage = {...message}
  singleMessage.title = title || 'Неподходящий формат'
  singleMessage.msg = fileName
  singleMessage.type = 'error'
  return singleMessage
}

