tippy(".w30s-column-515325 .w30s-widget-childs .menuItem-product", {
  arrow: false,
  interactive: true,
  placement: "bottom",
  allowHTML: true,
  content: () => {
    return `<div class="prd-menu" style="min-width: 1200px;">
    <div class="prd-menu-main container-fluid p-0">
      <div class="row g-0">
        <ul class="prd-cate list-group col-3">
          <li class="prd-cate-heading list-group-item border-0 prd-cate-item">
            <a href="./server.html">Máy chủ - Server</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./server.html">Máy chủ vật lý - Dedicated</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./server.html">Máy chủ Ảo - VPS</a>
          </li>
        </ul>
        <ul class="prd-cate list-group col-3">
          <li class="prd-cate-heading prd-cate-item list-group-item border-0">
            <a href="./ssl.html">Bảo mật SSl</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./ssl.html">Digicert SSL</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./ssl.html">Geotrust SSL</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./ssl.html">Comodo SSL</a>
          </li>
        </ul>
        <ul class="prd-cate list-group col-3">
          <li class="prd-cate-heading prd-cate-item list-group-item border-0 ">
            <a href="./email.html">Email</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./email.html">Email Marketing</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./email.html">Email dành cho doanh nghiệp</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./email.html">Email dành cho cá nhân</a>
          </li>
        </ul>
        <ul class="prd-cate list-group col-3">
          <li class="prd-cate-heading list-group-item border-0 prd-cate-item">
            <a href="./hosting.html">Hosting</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./hosting.html">Hosting Cá nhân - Sinh viên</a>
          </li>
          <li class="prd-cate-item list-group-item border-0">
            <a href="./hosting.html">Hosting Doanh nghiệp</a>
          </li>
        </ul>
      </div>
    </div>
  </div>`;
  },
});

tippy(".w30s-column-515325 .w30s-widget-childs .menuItem-services", {
  arrow: false,
  interactive: true,
  placement: "bottom",
  allowHTML: true,
  content: `
        <ul class="subMenu-services list-group">
            <li class="list-group-item border-0"><a href="./service-advise.html">
            Tư vấn dịch vụ</a></li>
        </ul>
    `,
});

tippy(".w30s-column-515325 .w30s-widget-childs .menuItem-news", {
  arrow: false,
  interactive: true,
  placement: "bottom",
  allowHTML: true,
  content: `
          <ul class="subMenu-services list-group">
              <li class="list-group-item border-0">
                <a href="./news.html">Tin ưu đãi</a>
              </li>
              <li class="list-group-item border-0">
                <a href="./news.html">Tin công ty</a>
              </li>
              <li class="list-group-item border-0">
                <a href="./news.html">Tin tức công nghệ</a>
              </li>
          </ul>
      `,
});

tippy(".w30s-column-515325 .w30s-widget-childs .menuItem-library", {
  arrow: false,
  interactive: true,
  placement: "bottom",
  allowHTML: true,
  content: `
          <ul class="subMenu-library list-group">
              <li class="list-group-item list-video border-0">
                <div>
                    <i class="fa-solid fa-caret-right"></i>
                    <a href="./video.html">Video</a>
                </div>

                <ul class="menu-list-video">
                    <li><a href="./video.html">Hướng dẫn sử dụng</a></li>
                    <li><a href="./video.html">Dịch vụ cung cấp</a></li>
                </ul>
              </li>
              <li class="list-group-item list-image border-0">
                <div>
                    <i class="fa-solid fa-caret-right"></i>
                    <a href="./images.html">Thư viện ảnh</a>
                </div>

                <ul class="menu-list-image">
                    <li><a href="./images.html">Hướng dẫn thông tin</a></li>
                    <li><a href="./images.html">Ngày hội việc làm</a></li>
                    <li><a href="./images.html">Hôị thảo</a></li>
                </ul>
              </li>
          </ul>
      `,
});
