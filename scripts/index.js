const url = "https://restcountries.eu/rest/v2/name/eesti";
fetch(url)
  .then((responce) => responce.json())
  .then((parcedResponce) => console.log(parcedResponce[0]));

//можно обрабатывать клик
$(function () {
  $("<button>Ajax</button>")
    .appendTo("#here")
    .click(function (e) {
      $.ajax({
        url: "https://restcountries.eu/rest/v2/name/united",
        success: [processData],
        error: [processError],
      });

      // e.preventDefault();
    });

  function processData(data, status, jqxhr) {
    var template = $("#flowerTmpl");
    template.tmpl(data).appendTo("#row1");
  }

  function processError(jqxhr, status, errorMsg) {
    console.log(jqxhr, status, errorMsg);
  }
});
