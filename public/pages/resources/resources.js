// JavaScript
document.addEventListener("DOMContentLoaded", function () {
	var tabs = document.querySelectorAll(".tabs_wrap ul li");
	var qoms = document.querySelectorAll(".QOM");
	var videos = document.querySelectorAll(".Videos");
	var articles = document.querySelectorAll(".Articles");
	var all = document.querySelectorAll(".item_wrap");
  
	function showTabContents(tabValue) {
	  all.forEach((item) => {
		item.style.display = "none";
	  });
  
	  if (tabValue === "QOM") {
		qoms.forEach((QOM) => {
		  QOM.style.display = "block";
		});
	  } else if (tabValue === "Videos") {
		videos.forEach((Videos) => {
		  Videos.style.display = "block";
		});
	  } else if (tabValue === "Articles") {
		articles.forEach((articles) => {
		  articles.style.display = "block";
		});
	  }
	}
  
	tabs.forEach((tab) => {
	  tab.addEventListener("click", () => {
		tabs.forEach((tab) => {
		  tab.classList.remove("active");
		});
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");
		showTabContents(tabval);
	  });
	});
  
	// Show QOM contents by default when the page loads
	showTabContents("QOM");
  });
  
// For video pop up

  $(document).ready(function () {
	// Add a click event handler to video thumbnails
	$(".video-play-btn").on("click", function () {
	  const videoSrc = $(this).data("video-url");
	  const $popup = $(".video-popup");
	  const $iframe = $popup.find(".player");
  
	  // If the popup is open and the same video is clicked, close the popup
	  if ($popup.hasClass("open") && $iframe.attr("src") === videoSrc) {
		$popup.removeClass("open");
		$iframe.attr("src", "");
	  } else {
		// Open the popup and set the video src if it's not empty
		$popup.addClass("open");
		if (videoSrc) {
		  $iframe.attr("src", videoSrc);
		}
	  }
	});
  
	// Add a click event handler to the close button
	$(".video-popup-close").on("click", function () {
	  const $popup = $(".video-popup");
	  const $iframe = $popup.find(".player");
  
	  // Close the popup and remove the video src
	  $popup.removeClass("open");
	  $iframe.attr("src", "");
	});
  });
  
  