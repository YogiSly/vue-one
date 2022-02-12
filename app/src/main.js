const Vue = require("vue");
const axios = require("axios");


new Vue({
  el: "#app",
  data: {
    "pageList": [],
    "newPageName": ""
  },
  methods: {
    createPage() {
      axios.post("./api/createNewHtmlPage.php",  {'name': this.newPageName}).then(response => this.updatePageList());
    },
    updatePageList() {
      axios.get("./api/").then((response) => {
        this.pageList = response.data;
      });
    },
    deletePage(page){
      axios.post("./api/deletePage.php",  {'name': page}).then(response => this.updatePageList());
    }
  },
  created() {
    this.updatePageList()
  }
})