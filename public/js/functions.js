export function initializeTabs(activeClass, ...tabsData) {
    var tabs = document.querySelectorAll(".tabs_wrap ul li");
    var tabContents = document.querySelectorAll(".item_wrap");
  
    function showTabContents(tabValue) {
      tabContents.forEach((item) => {
        item.style.display = "none";
      });

      function showDefaultTabContent() {
        var activeTab = document.querySelector(".tabs_wrap ul li." + activeClass);
        if (activeTab) {
          var tabValue = activeTab.getAttribute("data-tabs");
          showTabContents(tabValue);
        }
      }
  
      tabsData.forEach(({ tab, contentClass }) => {
        if (tabValue === tab) {
          var selectedTabs = document.querySelectorAll("." + contentClass);
          selectedTabs.forEach((selectedTab) => {
            selectedTab.style.display = "block";
          });
        }
      });
    }

    function showDefaultTabContent() {
        var activeTab = document.querySelector(".tabs_wrap ul li." + activeClass);
        if (activeTab) {
          var tabValue = activeTab.getAttribute("data-tabs");
          showTabContents(tabValue);
        }
      }
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
          tab.classList.remove(activeClass);
        });
        tab.classList.add(activeClass);
        var tabval = tab.getAttribute("data-tabs");
        showTabContents(tabval);
      });
    });
  
    // Show default tab contents when the page loads
    showDefaultTabContent();
  }

  export function initializeVideoPopup() {
    // Get elements
    const videoPlayBtns = document.querySelectorAll(".video-play-btn");
    const videoPopup = document.querySelector(".video-popup");
    const videoPopupCloseBtn = document.querySelector(".video-popup-close");
    const videoIframe = videoPopup.querySelector(".player");
  
    function toggleVideoPopup(videoSrc) {
      if (videoPopup.classList.contains("open") && videoIframe.src === videoSrc) {
        videoPopup.classList.remove("open");
        videoIframe.src = "";
      } else {
        videoPopup.classList.add("open");
        if (videoSrc) {
          videoIframe.src = videoSrc;
        }
      }
    }
  
    // Add click event handlers
    videoPlayBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const videoSrc = this.getAttribute("data-video-url");
        toggleVideoPopup(videoSrc);
      });
    });
  
    videoPopupCloseBtn.addEventListener("click", function () {
      videoPopup.classList.remove("open");
      videoIframe.src = "";
    });
  }
  