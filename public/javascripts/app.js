$( document ).ready(function(){
  console.log("jquery working!!");

  $(".addButton").click(function(){
    console.log("button clicked")
    event.preventDefault();
    var newBookTitleVal = $("#newBookTitle").val();
    var newBookGenreVal = $("#newBookGenre").val();
    var newBookImgVal = $("#newBookImg").val();
    var newBookDescrVal = $("#newBookDescr").val();
    // var newBookAuthorVal = $("#newBookAuthor").val();
    var obj = {
      objTitle: newBookTitleVal,
      objGenre: newBookGenreVal,
      objImg: newBookImgVal,
      objDescr: newBookDescrVal
      // objAuthor: newBookAuthorVal
    };
    console.log(obj);

    $.post("/addBookToTable", obj, function(data){
      console.log("book info added to table")
    })
  })
});
