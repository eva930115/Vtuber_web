(function () {
  ("use strict");

  $(window).resize(function () {
    resizeSidebar();
    closeSidebar();
  });

  function resizeSidebar() {
    const width = $("#bar").width();
    const pageWidth = $("#navbar").width();
    const marginLeft = pageWidth / 2 + 1;
    $(".sidebar").css({ width: `${width}px`, marginRight: `${marginLeft}px` });
  }

  // 關閉side bar
  function closeSidebar() {
    $(".sidebar").removeClass("active");
    resetSidebarList();
    $(".sidebar-list:first").addClass("active");
  }

  // list 重置
  function resetSidebarList() {
    $(".sidebar-list").removeClass("active");
  }

  $(".navbar-toggler").on("click", function () {
    $(".sidebar").addClass("active");
  });

  $(".sidebar>.left").on("click", closeSidebar);
  $(".close-side-bar").on("click", closeSidebar);

  $(".sidebar li").on("click", function () {
    $(`div[dataPrev="${this}"]`).css({ dispaly: "block" });
  });

  // 往下層分類
  $(".sidebar li[data-lv]").on("click", function () {
    const lv = this.dataset.lv;
    const div = $(`div[data-prelv="${lv}"]`);

    if (div.length > 0) {
      resetSidebarList();
      div.addClass("active");
    }
  });

  // 返回上一個分類
  $(".sidebar h3").on("click", function () {
    const div = $(this).parent();
    const preLv = div[0].dataset.prelv;

    resetSidebarList();
    $(`[data-lv="${preLv}"]`).parent().parent().addClass("active");
  });

  function showConsole() {
    [...arguments].forEach(function (value, index) {
      console.log("nav", value);
    });
  }

  resizeSidebar();
})();
