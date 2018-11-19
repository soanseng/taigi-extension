// create a context menu
browser.contextMenus.create({
    id: "poj",
    title: "白話字",
    contexts: ["selection"]
});


browser.contextMenus.create({
  id: "kiplmj",
  title: "教育部羅馬字",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "huayu",
  title: "對應華語",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "taibu",
  title: "漢羅併用",
  contexts: ["selection"]
});

// add action listener to the context menu
browser.contextMenus.onClicked.addListener(
  (info, tab) => {
    let url;
    switch (info.menuItemId) {
      case "poj":
        url = `https://chhoe.taigi.info/search?method=basic&searchMethod=equals&spelling=${info.selectionText}&spellingMethod=poj_unicode`
        break;
      case "huayu":
        url = `https://chhoe.taigi.info/search?hoabun=${info.selectionText}&method=basic&searchMethod=equals&spellingMethod=poj_input`
        break;
      case "taibu":
        url = `https://chhoe.taigi.info/search?method=basic&searchMethod=equals&spellingMethod=kiplmj_input&taibun=${info.selectionText}`
        break;
      case "kiplmj":
        url = `https://chhoe.taigi.info/search?method=basic&searchMethod=equals&spelling=${info.selectionText}&spellingMethod=kiplmj_unicode`
        break

    }
    browser.tabs.create({url: url})
  });


