// THIS IS FOR DIMA...
 // BELOW IS THE BRUTE FORCE METHOD
 // AFTER THAT IS THE SIMPLER BUT MORE TECHNICAL METHOD TO DO THE SAME THING

 $(".tab1").click(function(){
  $(".folder2, .folder3, .folder4").css({"z-index":0})
  $(".folder1").css({"z-index":1})
})

$(".tab2").click(function(){
  $(".folder1, .folder3, .folder4").css({"z-index":0})
  $(".folder2").css({"z-index":1})
})

$(".tab3").click(function(){
  $(".folder1, .folder2, .folder4").css({"z-index":0})
  $(".folder3").css({"z-index":1})
})

$(".tab4").click(function(){
  $(".folder1, .folder2, .folder3").css({"z-index":0})
  $(".folder4").css({"z-index":1})
})




// $(".tab").click(function(){
//     $(".folder").css({"z-index":0})
//     folderClass = ".folder" + $(this).attr("class").replace("tab tab","");    
//     $(folderClass).css({"z-index":1})
// })

// Get all accordion tabs and panels
const tabs = document.querySelectorAll('.accordion .tab');
const panels = document.querySelectorAll('.accordion .panel');

// Add click event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Toggle active class on clicked tab
    tab.classList.toggle('active');
    
    // Toggle active class on corresponding panel
    const panel = tab.nextElementSibling;
    panel.classList.toggle('active');
    
    // Hide all other panels
    panels.forEach(p => {
      if (p !== panel) {
        p.classList.remove('active');
        p.previousElementSibling.classList.remove('active');
      }
    });
  });
});
