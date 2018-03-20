document.addEventListener("DOMContentLoaded", function() {
  displayStars(".star-rating .stars");

  menuToggle("#menutoggle");

  var elem = document.querySelector('.carousel');
  if (document.body.contains(elem)) {
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: false,
      pageDots: false,
      selectedAttraction: 0.1,
      friction: 0.5,
      groupCells: 2,
      arrowShape: {
        x0: 10,
        x1: 60, y1: 50,
        x2: 75, y2: 40,
        x3: 35
      }
    });
  }

});


// Set width of star ratings
function displayStars (selector, ratio) {
  var ratio = typeof ratio != "undefined" ? ratio : 5;
  let stars =  document.querySelector(selector);
  if (stars) {
    let overlay = document.querySelector(selector + " span");
    let rating = stars.dataset.rating;
    overlay.style.width = (rating / ratio) * 100 + "%";
  }

}

function menuToggle (selector) {
  document.querySelector(selector).addEventListener("click", function(e) {
    var menu = document.getElementById(this.dataset.id);
    if (menu) { menu.classList.toggle("active"); }
    e.preventDefault();
  });
}


