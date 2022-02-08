const $ = require("jquery")

function getPagesList() {
  $("h1").remove()
  $.get("./api/", (data) => {
    data.forEach(file => {
      $('body').append("<h1>" + file + "</h1>")
    });
  }, "JSON")
}

getPagesList();

$("#create-file").click(() => {
  $.post("./api/createNewHtmlPage.php", {
    "name": $("input").val()
  }, (data)=>{
    getPagesList();
  }).
  fail(()=>{
    alert("Такая страница уже существует!")
  })
})

$("#delete-file").click(() => {
  $.post("./api/deleteFile.php", {
    "name": $("input").val()
  }, (data)=>{
    getPagesList();
  }).
  fail(()=>{
    alert("Файл не найден!")
  })
})