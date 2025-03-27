// 1. Arrays for months, tips, and specials (all 0-based)
var months = [
    // 0
    'January', 
    // 1
    'February', 
    // 2
    'March', 
    // 3
    'April', 
    // 4
    'May', 
    // 5
    'June',
    // 6
    'July', 
    // 7
    'August', 
    // 8
    'September', 
    // 9
    'October', 
    // 10
    'November', 
    // 11
    'December'
  ];
  
  // tips[0] = Winter, tips[1] = Spring, tips[2] = Summer, tips[3] = Fall
  var tips = [
    // 0 = Winter
    "<p>Those of us who live through our gardens know how bittersweet it can be... " +
    "Hellebores are the perfect winter garden companion...</p>",
    
    // 1 = Spring
    "<p>Spring is a time of renewal for both the gardener and the garden. " +
    "Suggestions: Transplants of tomatoes by mid-March...</p>",
    
    // 2 = Summer
    "<p><strong>Summer is the TIME</strong><ul><li>Select rose bushes...</li>" +
    "<li>Transplants of peppers, eggplant...</li></ul></p>",
    
    // 3 = Fall
    "<p>Fall is the best time to plant in north Texas. Milder temperatures... " +
    "With the changing season comes the changing of our color plantings...</p>"
  ];
  
  // specials[0] = January, specials[1] = February, ..., specials[11] = December
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
    // 2. Get the current date (or use a test date if needed)
    // let today = new Date(2025, 10, 5); // For testing November (10)
    let today = new Date(); // For testing December (11)
    let monthNum = today.getMonth();  // 0-based: 0=Jan, 11=Dec
    let year = today.getFullYear();
  
    // 3. Update the #month text with the current month name
    $("#month").text("Tips for " + months[monthNum]);
  
    // 4. Update #specials with the special for the current month
    $("#specials h3").nextAll().remove();
    $("#specials").append(specials[monthNum]);
  
    // 5. Determine the season based on the current month
    let seasonIndex, seasonName, seasonColor, seasonBG;
    
    // Winter: December (11), January (0), February (1)
    if (monthNum === 11 || monthNum === 0 || monthNum === 1) {
      seasonIndex = 0; // tips[0] = Winter
      seasonName = "Winter";
      seasonColor = "#3333ff";
      seasonBG = "winterbg.jpg";
    }
    // Spring: March (2), April (3), May (4)
    else if (monthNum >= 2 && monthNum <= 4) {
      seasonIndex = 1; // tips[1] = Spring
      seasonName = "Spring";
      seasonColor = "#008000";
      seasonBG = "springbg.jpg";
    }
    // Summer: June (5), July (6), August (7)
    else if (monthNum >= 5 && monthNum <= 7) {
      seasonIndex = 2; // tips[2] = Summer
      seasonName = "Summer";
      seasonColor = "#FF6600";
      seasonBG = "summerbg.jpg";
    }
    // Fall: September (8), October (9), November (10)
    else {
      seasonIndex = 3; // tips[3] = Fall
      seasonName = "Fall";
      seasonColor = "#990000";
      seasonBG = "fallbg.jpg";
    }
  
    // 6. Update the body background image based on the season
    $("body").css("background-image", "url('" + seasonBG + "')");
  
    // 7. Update the #seasontips div with the tip for the current season
    $("#seasontips").html(tips[seasonIndex]);
  
    // 8. Change the text color of <strong>, <h1>, <h2>, and <h3> to match the season
    $("strong, h1, h2, h3").css("color", seasonColor);
  
    // 9. Add a seasonal class to #specials (e.g., "Winter", "Spring", etc.)
    $("#specials").addClass(seasonName);
  
    // 10. If it's December, add a "Happy Holidays!" message under #slogan
    if (monthNum === 11) {
      $("#slogan").append("<h3>Happy Holidays!</h3>");
    } else {
      $("#slogan h3:contains('Happy Holidays!')").remove();
    }
  
    // 11. Update the footer year
    $("#copy").text("© " + year + " by Patti Burks");
  });