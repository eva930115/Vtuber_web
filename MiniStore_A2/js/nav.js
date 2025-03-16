(function () {
  "use strict";

  $(window).resize(function () {
    sidebarResize();
    closeSideBar();
  });

  sidebarResize();

  function sidebarResize() {
    const width = $("#bar .center-div").width();
    const pageWidth = $("#navbar").width();
    const marginLeft = (pageWidth - width) / 2 + 1;
    $(".sidebar").width(width);
    $(".sidebar").css({ marginRight: `${marginLeft}px` });
  }

  $(".navbar-toggler").on("click", function () {
    $(".sidebar").addClass("active");
  });

  $(".sidebar .left").on("click", closeSideBar);
  $(".close-side-bar i").on("click", closeSideBar);

  $(".sidebar li").on("click", function (e) {
    const li = this;
    $(`div[dataPrev="${li}"]`).css({ dispaly: "block" });
  });

  // 往下層分類
  $(".sidebar li[data-lv]").on("click", function () {
    const lv = this.dataset.lv;
    const div = $(`div[data-prelv="${lv}"]`);

    if (div.length !== 0) {
      listReset();
      div.addClass("active");
    }
  });

  // 返回上一個分類
  $(".sidebar h3").on("click", function () {
    const div = $(this).parent();
    const preLv = div[0].dataset.prelv;

    listReset();
    console.log($(`div[data-prelv="${preLv}"]`));
    $(`[data-lv="${preLv}"]`).parent().parent().addClass("active");
  });

  // 關閉side bar
  function closeSideBar() {
    $(".sidebar").removeClass("active");

    listReset();
    $(".sidebar-list").eq(0).addClass("active");
  }

  // list 重置
  function listReset() {
    $(".sidebar-list").removeClass("active");
  }
})();
