var baseUrl = "https://pixabay.com/api/?key=18456055-eada9c3423dd28dd686f2293d";

function fetchArticles(query = "") {
  $.ajax({
    url: baseUrl + query,
    success: [processData],
    error: [processError],
  });
}

$(fetchArticles());

$(".js-list").click(categoryHandler);

function categoryHandler(e) {
  if (!$(e.target).hasClass("tag-list__item")) {
    return;
  }

  clearList();

  var requestParam = "&q=" + e.target.textContent;
  fetchArticles(requestParam);
}

function clearList() {
  $(".js-list")[0].innerHTML = "";
}

function processData(data, status, jqxhr) {
  var template = $("#template");
  template.tmpl(data.hits).appendTo(".js-list");
}

function processError(jqxhr, status, errorMsg) {
  console.log(jqxhr, status, errorMsg);
}
