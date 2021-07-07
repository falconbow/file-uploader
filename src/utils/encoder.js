export default function (file, callback) {
  let encodedFile = {};
  function readerOnload(e){
    let base64 = btoa(e.target.result);
    encodedFile.base64 = base64;
    callback(encodedFile)
  }
  let reader = new FileReader();
  reader.onload = readerOnload;
  reader.readAsBinaryString(file);
}
