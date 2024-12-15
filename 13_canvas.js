// ------------------------ Class Based Approach ------------------------

// Class to create and manage a canvas element with animations.
class CreateCanvas {
  // Constructor to initialize the canvas with given configuration.
  constructor(config) {
    this.canvas = document.querySelector(config.canvasElement); // Select the canvas element from the DOM.
    this.context = this.canvas.getContext("2d"); // Get the 2D rendering context for the canvas.
    this.defaultImages = config.defaultImages || []; // Set default images, or an empty array if not provided.
    this.mobileImages = config.mobileImages || []; // Set mobile images, or an empty array if not provided.
    this.coverImages = config.coverImages || false; // Determine if images should cover the canvas (boolean).
    this.pinCanvas = config.pinCanvas || false; // Determine if the canvas should be pinned during scroll (boolean).
    this.triggerElement = document.querySelector(config.triggerElement); // Select the trigger element from the DOM.
    this.startTrigger = config.startTrigger || "bottom bottom"; // Set the start position for the scroll animation.
    this.endTrigger = config.endTrigger || "bottom center"; // Set the end position for the scroll animation.

    this.resizeHandler = this.debounce(() => this.handleResize(), 250); // Debounce function to limit resize event handling frequency.

    window.addEventListener("resize", this.resizeHandler); // Add event listener for window resize.

    this.initialize(); // Call the initialize method to set up the canvas.
  }

  // Method to initialize the canvas by loading images and setting up animations.
  async initialize() {
    try {
      await this.loadImages(); // Load images based on screen size.
      this.setCanvasSize(); // Set the size of the canvas.
      this.setupAnimation(); // Set up the scroll-triggered animation.
      this.render(this.images[0]); // Render the first image onto the canvas.
    } catch (error) {
      console.error("Failed to initialize canvas:", error); // Log an error if initialization fails.
    }
  }

  // Method to load images based on the current screen width.
  async loadImages() {
    // Check if the screen width is less than 640px and mobile images are available.
    if (window.innerWidth < 640 && this.mobileImages.length > 0) {
      this.images = await this.loadImagesArray(this.mobileImages); // Load mobile images if conditions are met.
    } else {
      this.images = await this.loadImagesArray(this.defaultImages); // Otherwise, load default images.
    }
    // If no images are loaded, throw an error.
    if (this.images.length === 0) {
      throw new Error("No images loaded.");
    }
  }

  // Helper method to load an array of image paths and return loaded images.
  async loadImagesArray(imagePaths) {
    // Map each image path to a promise that resolves when the image is loaded.
    const promises = imagePaths.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image(); // Create a new image object.
        img.onload = () => resolve(img); // Resolve the promise when the image is successfully loaded.
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`)); // Reject the promise if the image fails to load.
        img.src = src; // Set the source of the image to start loading.
      });
    });
    // Wait for all promises to resolve and return the array of loaded images.
    return Promise.all(promises);
  }

  // Method to set up the animation sequence using GSAP library.
  setupAnimation() {
    // Object to keep track of the current frame in the animation.
    const imageSeq = { frame: 0 };
    // Use GSAP to animate the frame property based on scroll position.
    gsap.to(imageSeq, {
      frame: this.images.length - 1, // Animate from first to last image.
      snap: "frame", // Snap to the nearest frame.
      ease: "none", // No easing, for a smooth animation.
      scrollTrigger: {
        trigger: this.triggerElement, // Element that triggers the animation.
        scroller: "body", // Scroll container, usually the body element.
        start: this.startTrigger, // Start position of the scroll animation.
        end: this.endTrigger, // End position of the scroll animation.
        scrub: 0.15, // Smoothness of the animation scrubbing.
        pin: this.pinCanvas, // Whether to pin the canvas during animation.
      },
      onUpdate: () => this.render(this.images[imageSeq.frame]), // Callback to render the current frame.
    });
  }

  // Method to render a given image onto the canvas.
  render(image) {
    // The clearRect function is used here to clear the canvas before drawing a new image.
    // It takes four parameters: x and y coordinates of the top-left corner, and the width and height of the rectangle to clear.
    // In this case, we're clearing the entire canvas, so we start at the top-left corner (0,0) and clear a rectangle that is as wide and as tall as the canvas itself.
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Check if there is an image to draw.
    if (image) {
      // If coverImages is true, we want to scale the image to cover the entire canvas.
      // This involves some calculations to maintain the aspect ratio and to center the image on the canvas.
      if (this.coverImages) {
        // Calculate the scale ratio to maintain aspect ratio.
        const ratio = Math.min(
          this.canvas.width / image.width,
          this.canvas.height / image.height
        );
        // Calculate new dimensions based on the scale ratio.
        const newWidth = image.width * ratio;
        const newHeight = image.height * ratio;
        // Calculate offsets to center the image on the canvas.
        const offsetX = (this.canvas.width - newWidth) / 2;
        const offsetY = (this.canvas.height - newHeight) / 2;
        // The drawImage function is used here to draw the scaled image onto the canvas.
        // It takes nine parameters: the image element, source x and y coordinates, source width and height (to specify a portion of the source image),
        // destination x and y coordinates, and destination width and height (to control the size and position of the image on the canvas).
        this.context.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          offsetX,
          offsetY,
          newWidth,
          newHeight
        );
      } else {
        // If coverImages is false, we draw the image at its original size.
        // Here, the drawImage function only needs five parameters: the image element, destination x and y coordinates, and destination width and height.
        // Since we're not scaling or cropping the image, the source dimensions and coordinates are not needed.
        this.context.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
      }
    }
  }

  // Method to set the size of the canvas based on its container's dimensions.
  setCanvasSize() {
    // Get the width and height of the canvas container.
    const { offsetWidth: width, offsetHeight: height } = this.canvas;
    // Set the canvas dimensions to match the container.
    this.canvas.width = width;
    this.canvas.height = height;
  }

  // Utility function to limit the frequency of function execution.
  // This function ensures that expensive tasks (like resizing) are not executed too frequently.
  // It prevents performance issues caused by frequent event triggers.
  debounce(func, wait) {
    // Declare a variable to hold the timeout ID.
    let timeout;

    // Return a new function that manages the timeout and executes the original function.
    return function executedFunction(...args) {
      // Define an inner function called 'later'.
      const later = () => {
        // Clear any existing timeout.
        clearTimeout(timeout);
        // Execute the original function with the provided arguments.
        func(...args);
      };

      // Clear any existing timeout.
      clearTimeout(timeout);
      // Set a new timeout to execute the 'later' function after the specified wait time.
      timeout = setTimeout(later, wait);
    };
  }

  // Method to handle window resize events.
  handleResize() {
    // Update the canvas size to match the new window size.
    this.setCanvasSize();
    // Re-render the first image on the resized canvas.
    this.render(this.images[0]);
  }
}

// ------------------------ Function Based Approach ------------------------

// Function to create and manage a canvas element with animations.
function createCanvas(config) {
  // Destructure properties from the config object.
  const {
    canvasElement,
    defaultImages,
    mobileImages,
    triggerElement,
    startTrigger,
    endTrigger,
    pinCanvas = false,
    coverImages = false,
  } = config;

  // Get the canvas element and its 2D rendering context.
  const canvas = document.querySelector(canvasElement);
  const context = canvas.getContext("2d");
  let images;

  // Debounce function to limit the frequency of function execution.
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  // Initialize the canvas.
  async function initializeCanvas() {
    try {
      await loadImages();
      setCanvasSize();
      setupAnimation();
      render(images[0]);
    } catch (error) {
      console.error("Failed to initialize canvas:", error);
    }
  }

  // Load images based on screen size.
  async function loadImages() {
    if (window.innerWidth < 640 && mobileImages) {
      images = await loadImagesArray(mobileImages);
    } else {
      images = await loadImagesArray(defaultImages);
    }
    if (images.length === 0) {
      throw new Error("No images loaded.");
    }
  }

  // Load an array of image paths and return loaded images.
  async function loadImagesArray(imagePaths) {
    const promises = imagePaths.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
      });
    });
    return Promise.all(promises);
  }

  // Set up the animation using GSAP.
  function setupAnimation() {
    const imageSeq = { frame: 0 };
    gsap.to(imageSeq, {
      frame: images.length - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: triggerElement,
        scroller: "body",
        start: startTrigger,
        end: endTrigger,
        scrub: 0.15,
        pin: pinCanvas,
      },
      onUpdate: () => render(images[imageSeq.frame]),
    });
  }

  // Render a given image onto the canvas.
  function render(image) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (image) {
      if (coverImages) {
        const ratio = Math.min(
          canvas.width / image.width,
          canvas.height / image.height
        );
        const newWidth = image.width * ratio;
        const newHeight = image.height * ratio;
        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;
        context.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          offsetX,
          offsetY,
          newWidth,
          newHeight
        );
      } else {
        context.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
    }
  }

  // Set the canvas size based on its container's dimensions.
  function setCanvasSize() {
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  // Debounced version of the resize handler.
  const debouncedSetCanvasSize = debounce(setCanvasSize, 250);

  // Add event listener for window resize using the debounced function.
  window.addEventListener("resize", debouncedSetCanvasSize);

  // Call the initialization function.
  initializeCanvas();
}

// ================= How to use both ====================

const canvasConfig = {
  canvasElement: "#canvas-1",
  defaultImages: [
    "./assets/images/canvas1/01.png",
    "./assets/images/canvas1/02.png",
    "./assets/images/canvas1/03.png",
    "./assets/images/canvas1/04.png",
    "./assets/images/canvas1/05.png",
    "./assets/images/canvas1/06.png",
    "./assets/images/canvas1/07.png",
    "./assets/images/canvas1/08.png",
    "./assets/images/canvas1/09.png",
    "./assets/images/canvas1/10.png",
    "./assets/images/canvas1/11.png",
    "./assets/images/canvas1/12.png",
    "./assets/images/canvas1/13.png",
    "./assets/images/canvas1/14.png",
    "./assets/images/canvas1/15.png",
    "./assets/images/canvas1/16.png",
    "./assets/images/canvas1/17.png",
    "./assets/images/canvas1/18.png",
    "./assets/images/canvas1/19.png",
    "./assets/images/canvas1/20.png",
    "./assets/images/canvas1/21.png",
    "./assets/images/canvas1/22.png",
    "./assets/images/canvas1/23.png",
    "./assets/images/canvas1/24.png",
    "./assets/images/canvas1/25.png",
    "./assets/images/canvas1/26.png",
    "./assets/images/canvas1/27.png",
    "./assets/images/canvas1/28.png",
    "./assets/images/canvas1/29.png",
    "./assets/images/canvas1/30.png",
    "./assets/images/canvas1/31.png",
    "./assets/images/canvas1/32.png",
    "./assets/images/canvas1/33.png",
    "./assets/images/canvas1/34.png",
    "./assets/images/canvas1/35.png",
    "./assets/images/canvas1/36.png",
    "./assets/images/canvas1/37.png",
    "./assets/images/canvas1/38.png",
    "./assets/images/canvas1/39.png",
    "./assets/images/canvas1/40.png",
  ],
  // mobileImages: [],
  triggerElement: "#guide-section",
  startTrigger: "bottom bottom",
  endTrigger: "bottom center",
  pinCanvas: false,
  // coverImages: true,
};

const canvas = new CreateCanvas(canvas1Config);

createCanvas(canvasConfig);
