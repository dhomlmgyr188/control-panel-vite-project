(function () {
  const closeBanner = document.querySelectorAll(".js-banner-close");
  closeBanner.forEach((closeBanner) => {
    closeBanner.addEventListener("click", (event) => {
      const banner = event.target.parentNode;
      banner.classList.add("collabse");

      banner.addEventListener("transitionend", function (event) {
        if (event.target === this) {
          this.remove();
        }
      });
    });
  });
})();

const ctx = document.getElementById("example-chart");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "ابريل",
      "مارس",
      "فبراير",
      "يناير",
      "اغسطس",
      "يوليو",
      "يونيو",
      "مايو",
      "ديسمبر",
      "نوفمبر",
      "اكتوبر",
      "سبتمبر",
    ],
    datasets: [
      {
        label: "مبيعات الشهر",
        data: [332, 98, 123, 23, 345, 42, 213, 1, 234, 234, 211, 234],
        borderWidth: 1,
        borderColor: "#071ADB",
        backgroundColor: "transparent",
        lineTension: 0.2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        position: "top",
      },
    },
  },
});

const navigation = document.querySelector(".c-table__navigation");
const randomArry = (myLength, max) =>
  Array.from({ length: myLength }, () => Math.round(Math.random() * max));

navigation.addEventListener("click", () => {
  chart.data.datasets[0].data = randomArry(12, 1200);
  chart.update();
});

(function () {
  const tabs = document.querySelectorAll(".js-tabs");

  Array.from(tabs, (tab) => {
    const tabsLinks = tab.querySelectorAll(".js-tab-link");
    let currentActiveTab = tab.querySelector(".js-tab-link.is-active");
    const toggleTab = (toggledTabLink = currentActiveTab) => {
      currentActiveTab = toggledTabLink;
      toggledTabLink.classList.toggle("is-active");

      const toggledTabData = toggledTabLink.dataset.index;
      const toggledTabArea = tab.querySelector(
        `.js-tab-area[data-indexed=${toggledTabData}]`,
      );
      toggledTabArea.classList.toggle("is-active");
    };

    if (!currentActiveTab) {
      toggleTab(tabsLinks[0]);
    }

    tabsLinks.forEach((tabsLink) => {
      tabsLink.addEventListener("click", function (event) {
        if (currentActiveTab === this) {
          return;
        }

        if (currentActiveTab) {
          toggleTab();
        }

        toggleTab(this);
      });
    });
  });
})();
