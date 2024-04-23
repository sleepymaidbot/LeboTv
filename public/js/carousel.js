class Carousel {
    element = null;
    buttonDisabled = false;
    nav = null;
    items = [];
    size = 3; // number of items to show
    gap = 16; // in px
    activeClass = true;
    itemProps = {
      width: 0,
      left: 0
    };
  
    constructor(element) {
      this.element = element;
      this.items = document.querySelectorAll(".carousel__item");
      this.nav = element.parentElement.querySelectorAll(".carousel__nav__item");
      this.init();
    }
  
    async init() {
      await this.setMinItems();
  
      this.itemProps.width = await this.getSize();
      this.element.style.height = this.items[0].clientHeight + "px";
  
      // Add event listener to buttons
      for (let i = 0; i < this.nav.length; i++) {
        let currentNavElement = this.nav[i];
        this.nav[i].addEventListener("click", () =>
          this.moveHandler(currentNavElement)
        );
      }
  
      // update nodelist
      this.nav = this.element.parentElement.querySelector(".carousel__nav");
      await this.build();
    }
  
    async setMinItems() {
      const minItems = this.size + 2;
      if (this.items.length < minItems) {
        let currentLength = this.items.length;
        for (let i = 0; i < currentLength; i++) {
          let clonedItem = this.items[i].cloneNode(true);
          this.element.append(clonedItem);
        }
        this.items = document.querySelectorAll(".carousel__item");
      }
    }
  
    async getSize() {
      let totalSpacing = this.gap * (this.size - 1); // no need to space for last element
      let width = this.element.clientWidth - totalSpacing; // width without scrollbar
      width = width / this.size;
  
      return width;
    }
  
    async build() {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].style.width = this.itemProps.width + "px";
        // (i - 1) so we start with second item and get clean animation (hides shifting)
        this.items[i].style.left =
          (this.itemProps.width + this.gap) * (i - 1) + "px";
      }
      if (this.activeClass) {
        this.setActiveClass();
      }
  
      this.toString(this.items);
    }
  
    async move(pos) {
      let item = 0;
  
      // Assign cloned item
      if (pos === "next") {
        item = this.items[0];
      } else {
        item = this.items[this.items.length - 1];
      }
  
      let clonedItem = item.cloneNode(true);
  
      if (pos === "next") {
        this.element.append(clonedItem);
      } else {
        this.element.prepend(clonedItem);
      }
      item.remove();
      // Since NodeList and static update it
      this.items = document.querySelectorAll(".carousel__item");
    }
  
    async next() {
      this.move("next");
      this.build();
    }
  
    async prev() {
      this.move("prev");
      this.build();
    }
  
    async setActiveClass() {
      let mean = Math.round(this.size / 2);
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].classList.remove("carousel__item--active");
        if (i === mean) {
          this.items[i].classList.add("carousel__item--active");
        }
      }
    }
  
    async moveHandler(element) {
      if (!this.buttonDisabled) {
        // Disabled button to prevent spam clicking
        this.buttonDisabled = true;
        let direction = element.getAttribute("data-direction");
        if (direction === "next") {
          this.next();
        } else {
          this.prev();
        }
        setTimeout(() => (this.buttonDisabled = false), 800);
      }
    }
  }
  
  const element = document.querySelector(".carousel");
  new Carousel(element);
  