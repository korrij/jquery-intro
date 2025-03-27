// 1. Arrays for months, tips, and specials
var months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Index 0 = Winter, 1 = Spring, 2 = Summer, 3 = Fall
  var tips = [
    // Winter
    "<p>Those of us who live through our gardens know how bittersweet it can be..." +
    "Hellebores are the perfect winter garden companion...</p>",
  
    // Spring
    "<p>Spring is a time of renewal for both the gardener and the garden. " +
    "Suggestions for this month: Transplants of tomatoes should be planted by March 15th...</p>",
  
    // Summer
    "<p><strong>Summer is the TIME</strong><ul><li>Select rose bushes...</li>" +
    "<li>Transplants of peppers, eggplant...</li></ul>",
  
    // Fall
    "<p>Fall is the best time to plant in north Texas. Milder temperatures..." +
    "With the changing season comes the changing of our color plantings...</p>"
  ];
  
  var specials = [
    // 0 = January
    "<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this January.</p>",
    // 1 = February
    "<p>Roses for your sweetheart!</p><p>All roses are $24.99 this February.</p>",
    // 2 = March
    "<p>Add some color to your garden!</p><p>This March all petunias are $10.99 for a flat of 16.</p>",
    // 3 = April
    "<p>Time to fertilize!</p><p>All fertilizers 20% off in April.</p>",
    // 4 = May
    "<p>Geraniums: 6 inch pot is only $6.99 all May!</p>",
    // 5 = June
    "<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot.</p>",
    // 6 = July
    "<p><strong>BOGO</strong></p><p>All containers, buy one, get one 1/2 price</p>",
    // 7 = August
    "<p>Cacti and succulents, 25% off in August!</p>",
    // 8 = September
    "<p>Get ready for fall!</p><p>Mums: 6 inch pot $5.99 in September.</p>",
    // 9 = October
    "<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins and gourds on sale this October.</p>",
    // 10 = November
    "<p>Trees and shrubs: 1/2 price - in stock only (November).</p>",
    // 11 = December
    "<p>Christmas trees!</p><p>We have sizes from 3' to 15' and lots of varieties.</p>"
  ];
  
  $(document).ready(function() {
    // 2. Get the current date (or create a test date for demonstration)
    // let today = new Date(2025, 11, 1); // For testing December
    let today = new Date();
    let monthNum = today.getMonth();  // 0-based (Jan=0, Feb=1, etc.)
    let year = today.getFullYear();
  
    // 3. Update the #month text to show the current month name
    $("#month").text("Tips for " + months[monthNum]);
  
    // 4. Update #specials with the specials array for the current month
    //    Remove old paragraphs (if any), then append new content
    $("#specials h3").nextAll().remove();
    $("#specials").append(specials[monthNum]);
  
    // 5. Determine the season based on monthNum
    let seasonIndex, seasonName, seasonColor, seasonBG;
  
    if (monthNum === 11 || monthNum === 0 || monthNum === 1) {
      // Winter
      seasonIndex = 0;
      seasonName = "Winter";
      seasonColor = "#3333ff"; // example color for text
      seasonBG = "winterbg.jpg";
    } else if (monthNum >= 2 && monthNum <= 4) {
      // Spring
      seasonIndex = 1;
      seasonName = "Spring";
      seasonColor = "#008000";
      seasonBG = "springbg.jpg";
    } else if (monthNum >= 5 && monthNum <= 7) {
      // Summer
      seasonIndex = 2;
      seasonName = "Summer";
      seasonColor = "#FF6600";
      seasonBG = "summerbg.jpg";
    } else {
      // Fall (Aug=7, Sep=8, Oct=9, Nov=10 => but in code we used >=8 && <=10)
      seasonIndex = 3;
      seasonName = "Fall";
      seasonColor = "#990000";
      seasonBG = "fallbg.jpg";
    }
  
    // 6. Change the body background image to the seasonal image
    $("body").css("background-image", "url('" + seasonBG + "')");
  
    // 7. Update the #seasontips content with the correct tip for this season
    $("#seasontips").html(tips[seasonIndex]);
  
    // 8. Change the color of <strong>, <h1>, <h2>, <h3> to match the season
    $("strong, h1, h2, h3").css("color", seasonColor);
  
    // 9. Add a class to #specials with the season name (e.g. .Winter, .Summer)
    $("#specials").addClass(seasonName);
  
    // 10. If it's December, add a “Happy Holidays!” message under #slogan
    if (monthNum === 11) {
      $("#slogan").append("<h3>Happy Holidays!</h3>");
    } else {
      // Otherwise remove it if it exists
      $("#slogan h3:contains('Happy Holidays!')").remove();
    }
  
    // 11. Update the footer year
    $("#copy").text("© " + year + " by Patti Burks");
  });