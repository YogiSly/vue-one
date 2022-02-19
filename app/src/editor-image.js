const axios = require("axios")
module.exports = class EditorImage {
  constructor(element, virtualElement) {
    this.element = element
    this.virtualElement = virtualElement

    this.element.addEventListener("click", () => this.onClick())

    this.imgUpLoader = document.querySelector("#img-upload")

  }
  onClick() {
    this.imgUpLoader.click()

    this.imgUpLoader.onchange = () => {
      if (this.imgUpLoader.files && this.imgUpLoader.files[0]) {
        window.vue.enableLoader()
        let formData = new FormData()
        formData.append("image", this.imgUpLoader.files[0])
        axios
          .post("./api/uploadImage.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }

          }) 
          .then((res)=>{
            this.virtualElement.src = this.element.src = "./img/" + res.data.src
            this.imgUpLoader.value = ""
            window.vue.disableLoader()
          })
          .catch(()=> window.vue.errorNotification("Ошибка загрузки изображения"))
          .finally(()=>{
            this.imgUpLoader.value = ""
            window.vue.disableLoader()
          })
      }
    }
  }
}