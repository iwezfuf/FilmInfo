/**
 * Listen for clicks on the buttons.
 */
function listenForClicks() {
  document.getElementById("submit").addEventListener("click", (e) => {
      var name = document.getElementById("name").value;
      var sites = ["imdb.com/", "rottentomatoes.com", "letterboxd.com", "rogerebert.com"]
      for (let i = 0; i < sites.length; i++) {
        let url = "https://www.google.com/search?q=" + "\"" + name + "\" " + "site:" + sites[i] + "&btnI=&sourceid=navclient&gfns=1";
        browser.tabs.create({url: url});
      }
      window.close()
  });
}
/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 */
browser.tabs.executeScript({file: "/content_scripts/fun.js"})
.then(listenForClicks);