// Gallery Popup Functionality with Swiper
class GalleryPopup {
  constructor() {
    this.popup = document.getElementById("galleryPopup");
    this.closeBtn = document.getElementById("galleryClose");
    this.prevBtn = document.getElementById("galleryPrev");
    this.nextBtn = document.getElementById("galleryNext");
    this.overlay = document.querySelector(".popup-overlay");
    this.swiperWrapper = document.getElementById("popupSwiperWrapper");

    this.images = [];
    this.swiper = null;

    this.init();
  }

  init() {
    // 갤러리 이미지 데이터 수집
    this.collectImages();

    // Swiper 슬라이드 생성
    this.createSlides();

    // 이벤트 리스너 등록
    this.bindEvents();
  }

  collectImages() {
    const galleryItems = document.querySelectorAll(".galleryCon ul li");
    this.images = Array.from(galleryItems).map((item, index) => {
      const img = item.querySelector("img");
      const title = item.querySelector("p");
      return {
        src: img.src,
        alt: img.alt,
        title: title.textContent.trim(),
        titleKey: title.getAttribute("data-i18n"),
        index: index,
      };
    });
  }

  createSlides() {
    this.swiperWrapper.innerHTML = "";

    this.images.forEach((image, index) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";

      slide.innerHTML = `
        <img src="${image.src}" alt="${image.alt}" />
        <div class="popup-image-info">
          <p data-i18n="${image.titleKey}">${image.title}</p>
        </div>
      `;

      this.swiperWrapper.appendChild(slide);
    });
  }

  bindEvents() {
    // 갤러리 아이템 클릭 이벤트
    document.querySelectorAll(".galleryCon ul li").forEach((item, index) => {
      item.addEventListener("click", () => {
        this.openPopup(index);
      });
    });

    // 팝업 닫기 이벤트
    this.closeBtn.addEventListener("click", () => this.closePopup());
    this.overlay.addEventListener("click", () => this.closePopup());

    // 네비게이션 버튼 이벤트
    this.prevBtn.addEventListener("click", () => {
      if (this.swiper) this.swiper.slidePrev();
    });
    this.nextBtn.addEventListener("click", () => {
      if (this.swiper) this.swiper.slideNext();
    });

    // 키보드 이벤트
    document.addEventListener("keydown", (e) => {
      if (!this.popup.classList.contains("active")) return;

      switch (e.key) {
        case "Escape":
          this.closePopup();
          break;
        case "ArrowLeft":
          if (this.swiper) this.swiper.slidePrev();
          break;
        case "ArrowRight":
          if (this.swiper) this.swiper.slideNext();
          break;
      }
    });

    // 언어 변경 이벤트 리스너
    document.addEventListener("languageChanged", () => {
      if (this.popup.classList.contains("active")) {
        this.updateSlideTexts();
      }
    });
  }

  openPopup(index) {
    this.popup.classList.add("active");
    document.body.style.overflow = "hidden"; // 스크롤 방지

    // Swiper 초기화
    this.initSwiper(index);
  }

  closePopup() {
    this.popup.classList.remove("active");
    document.body.style.overflow = ""; // 스크롤 복원

    // Swiper 파괴
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = null;
    }
  }

  initSwiper(initialSlide = 0) {
    this.swiper = new Swiper("#popupSwiper", {
      initialSlide: initialSlide,
      loop: true,
      centeredSlides: true,
      spaceBetween: 0,
      slidesPerView: 1,
      allowTouchMove: true,
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      on: {
        init: () => {
          this.updateSlideTexts();
        },
        slideChange: () => {
          this.updateSlideTexts();
        },
      },
    });
  }

  updateSlideTexts() {
    if (!this.swiper) return;

    const slides = this.swiper.slides;
    slides.forEach((slide, index) => {
      const titleElement = slide.querySelector("p[data-i18n]");
      if (titleElement && window.i18next) {
        const titleKey = titleElement.getAttribute("data-i18n");
        titleElement.textContent = window.i18next.t(titleKey);
      }
    });
  }
}

// DOM이 로드된 후 갤러리 팝업 초기화
document.addEventListener("DOMContentLoaded", () => {
  new GalleryPopup();
});
