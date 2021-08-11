let byPa55 = document.getElementById("byPa55");

byPa55.addEventListener("click", async () => {
    console.log("FFFFFFFFFFFF")
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: bypas55Now,
  });
});

function bypas55Now(){
    var subs = document.getElementsByClassName(
      "overlayFooter__wrapper--3DhFn"
    )[0];
    subs.style["display"] = "none";

    document.styleSheets[0].addRule(
      "body.body--article.body__obscureContent--3qe0X:after",
      "display: none;"
    );
    var fullPage = document.getElementsByClassName(
      "columnArea--fullStory__wrapper--1t4GQ"
    )[0];
    fullPage.style["height"] = "100vh";
    fullPage.style["overflow-y"] = "scroll";
}
