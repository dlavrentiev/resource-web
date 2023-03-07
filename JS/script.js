// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("title").style.fontSize = "45px";
    document.getElementById("subtitle").style.fontSize = "15px";
    // document.getElementById("title").style.float = "left";
    // document.getElementById("subtitle").style.float = "centre";
    // document.getElementById("subtitle").style.clear = "none";
  } else {
    document.getElementById("title").style.fontSize = "90px";
    document.getElementById("subtitle").style.fontSize = "25px";
    // document.getElementById("title").style.float = "left";
    // document.getElementById("subtitle").style.float = "left";
    // document.getElementById("subtitle").style.clear = "left";
  }
}

// THIS IS FOR DIMA...
 // BELOW IS THE BRUTE FORCE METHOD
 // AFTER THAT IS THE SIMPLER BUT MORE TECHNICAL METHOD TO DO THE SAME THING

  $(".tab1").click(function(){
  $(".folder2, .folder3, .folder4").css({"z-index":2})
  $(".folder1").css({"z-index":3})
})

$(".tab2").click(function(){
  $(".folder1, .folder3, .folder4").css({"z-index":2})
  $(".folder2").css({"z-index":3})
})

$(".tab3").click(function(){
  $(".folder1, .folder2, .folder4").css({"z-index":2})
  $(".folder3").css({"z-index":3})
})

$(".tab4").click(function(){
  $(".folder1, .folder2, .folder3").css({"z-index":2})
  $(".folder4").css({"z-index":3})
})




$(".categorylinks").click(function(){             //add click event to everything with class category links
  var t =  $(this).attr("data-id");               //create a veriable called t and set it to the element you clicke on attribute called "data-id"
  
  $(".categorycontent").css("display","none");    //hides all categorycontent
  $(t).css("display","block");                    //select the elemtn with id t and changed the css element to display block
  
  $(".whatWeClickedOn").removeClass("whatWeClickedOn")
  $(this).addClass("whatWeClickedOn")

})

// $(".tab").click(function(){
//     $(".folder").css({"z-index":0})
//     folderClass = ".folder" + $(this).attr("class").replace("tab tab","");    
//     $(folderClass).css({"z-index":1})
// })

// window.onload = function() {
//   // Hide all category contents by default
//   var categorycontent = document.getElementsByClassName("categorycontent");
//   for (var i = 0; i < categorycontent.length; i++) {
//     categorycontent[i].style.display = "none";
//   }
// };


// function openHandle(evt, handleName) {
//   // Declare all variables
//   var i, categorycontent, categorylinks;

//   // Get all elements with class="categorycontent" and hide them
//   categorycontent = document.getElementsByClassName("categorycontent");
//   for (i = 0; i < categorycontent.length; i++) {
//     categorycontent[i].style.display = "none";
//   }

//   // Get all elements with class="categorylinks" and remove the class "active"
//   categorylinks = document.getElementsByClassName("categorylinks");
//   for (i = 0; i < categorylinks.length; i++) {
//     categorylinks[i].className = categorylinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the link that opened the tab
//   document.getElementById(handleName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// Select cards
const card = document.querySelectorAll('.card');

//Loop through and add margin top to see titles
card.forEach(c => {
  c.style.top = c.dataset.top * 60 + "px";
});
