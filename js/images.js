document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');
  
    images.forEach(img => {
      const overlay = img.parentNode.querySelector('.spinner-overlay');
  
      // Add a spinner element if not already present (just for completeness)
      if (!overlay.querySelector('.spinner')) {
        const spinner = document.createElement('div');
        spinner.className = 'spinner';
        overlay.appendChild(spinner);
      }
  
      // Function to hide the overlay and stop the spinner
      function hideOverlay() {
        overlay.style.display = 'none';
      }
  
      // Function to handle image load
      function handleImageLoad() {
        if (img.complete && img.naturalWidth !== 0) {
          const colorThief = new ColorThief();
          try {
            // Get the dominant color from the image
            const color = colorThief.getColor(img);
            overlay.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`;
          } catch (error) {
            console.error("Error extracting color: ", error);
            // Set a fallback color if color extraction fails
            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          }
          // Hide the overlay after setting the color
          hideOverlay();
        }
      }
  
      // Set up event listeners for image loading
      img.addEventListener('load', handleImageLoad);
      img.addEventListener('error', function() {
        overlay.textContent = 'Failed to load image';
        overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Red tint on error
      });
  
      // Check if image is already loaded when script runs (for cached images)
      if (img.complete) {
        handleImageLoad();
      }
    });
  });
  