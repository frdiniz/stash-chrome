function dumpBookmarks () {
    var bookmarksTreeNodes = chrome.bookmarks.getTree(
        function(bookmarkTreeNodes) {

          $.ajax({
            type: 'PATCH',
            url: 'https://jsonbin.org/frdiniz/clipboard',
            dataType: "json",
            headers: { "token": "9a19bc4d-cdfc-4e86-94af-6a2d58dd1dc1" },
            data: JSON.stringify(bookmarkTreeNodes),
            contentType: 'application/json',
            statusCode: { 200: function () {
              return setStatus();
            }}
          });

        });
}

function setStatus () {
  $('#result').html('200 Success');
  $('#status').addClass('text-success');
}

$(document).ready(function () {
  dumpBookmarks();
});