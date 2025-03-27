// Arrays for months, seasonal tips, and monthly specials
var months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Seasonal tips array: Index 0 = Winter, 1 = Spring, 2 = Summer, 3 = Fall
  var tips = [
    // Winter tip (for December, January, February)
    "<p>Those of us who live through our gardens know how bittersweet it can be when summer’s lush growth gives way to winter’s chill. Hellebores provide a splash of color during the coldest months.</p>",
    // Spring tip (for March, April, May)
    "<p>Spring is a time of renewal for both the gardener and the garden. Consider planting transplants of tomatoes by mid-March and fertilizing once the warm-season grasses start growing.</p>",
    // Summer tip (for June, July, August)
    "<p><strong>Summer is the TIME</strong><ul><li>Select rose bushes from our huge variety.</li><li>Plant transplants of peppers, eggplant, and herbs.</li><li>Don’t forget to water regularly!</li></ul></p>",
    // Fall tip (for September, October, November)
    "<p>Fall is the ideal time for planting trees and shrubs as cooler temperatures and increased rainfall aid establishment. Update your garden with seasonal mums and pansies for a burst of color.</p>"
  ];
  
  // Monthly specials array: one entry per month (0 = January, 11 = December)
  var specials = [
    "<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this January.</p>",
    "<p>Roses for your sweetheart!</p><p>All roses are $24.99 this February.</p>",
    "<p>Add some color to your garden!</p><p>This March all petunias are $10.99 for a flat of 16.</p>",
    "<p>Time to fertilize!</p><p>All fertilizers 20% off in April.</p>",
    "<p>Geraniums: 6 inch pot is only $6.99 all May!</p>",
    "<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot in June.</p>",
    "<p><strong>BOGO</strong></p><p>All containers, buy one, get one 1/2 price in July.</p>",
    "<p>Cacti and succulents, 25% off in August!</p>",
    "<p>Get ready for fall!</p><p>Mums: 6 inch pot $5.99 in September.</p>",
    "<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins and gourds on sale this October.</p>",
    "<p>Trees and shrubs: 1/2 price - in stock only in November.</p>",
    "<p>Christmas trees!</p><p>We have sizes from 3' to 15' and many varieties this December.</p>"
  ];
  
  $(document).ready(function() {
    // Get the current date (or use a test date if needed)
    // let today = new Date(2025, 11, 1); // Uncomment to test December
    let today = new Date();
    let monthNum = today.getMonth(); // 0-based index (0 = January)
    let year = today.getFullYear();
  
    // Update the #month text with the current month name
    $("#month").text("Tips for " + months[monthNum]);
  
    // Update #specials with the special for the current month:
    // Remove any paragraphs following the h3 header and then append the current special.
    $("#specials h3").nextAll().remove();
    $("#specials").append(specials[monthNum]);
  
    // Determine season based on month number:
    // Winter: December (11), January (0), February (1)
    // Spring: March (2), April (3), May (4)
    // Summer: June (5), July (6), August (7)
    // Fall: September (8), October (9), November (10)
    let seasonIndex, seasonName, seasonColor, seasonBG;
    if (monthNum === 11 || monthNum === 0 || monthNum === 1) {
      seasonIndex = 0;
      seasonName = "Winter";
      seasonColor = "#3333ff"; // Example text color for winter
      seasonBG = "winterbg.jpg";
    } else if (monthNum >= 2 && monthNum <= 4) {
      seasonIndex = 1;
      seasonName = "Spring";
      seasonColor = "#008000"; // Example text color for spring
      seasonBG = "springbg.jpg";
    } else if (monthNum >= 5 && monthNum <= 7) {
      seasonIndex = 2;
      seasonName = "Summer";
      seasonColor = "#FF6600"; // Example text color for summer
      seasonBG = "summerbg.jpg";
    } else {
      seasonIndex = 3;
      seasonName = "Fall";
      seasonColor = "#990000"; // Example text color for fall
      seasonBG = "fallbg.jpg";
    }
  
    // Update the body background image based on season
    $("body").css("background-image", "url('" + seasonBG + "')");
  
    // Update the #seasontips div with the tip for the current season
    $("#seasontips").html(tips[seasonIndex]);
  
    // Change the color of <strong>, <h1>, <h2>, and <h3> to match the season
    $("strong, h1, h2, h3").css("color", seasonColor);
  
    // Add a seasonal class to #specials (e.g., "Winter", "Spring", "Summer", "Fall")
    $("#specials").addClass(seasonName);
  
    // If it's December, add a “Happy Holidays!” message under #slogan
    if (monthNum === 11) {
      $("#slogan").append("<h3>Happy Holidays!</h3>");
    } else {
      $("#slogan h3:contains('Happy Holidays!')").remove();
    }
  
    // Update the footer copyright with the current year
    $("#copy").text("© " + year + " by Patti Burks");
  });