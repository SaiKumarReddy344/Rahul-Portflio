document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add fade-in animation to elements as they appear in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Apply animations to sections
  document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
  });
  
  // Contact button click handler
  document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = 'mailto:pranavifaces@gmail.com';
    });
  });

  

  document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu-items').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.tech-icons-track');
  const items = document.querySelectorAll('.tech-icon-item');
  
  // Clone each item and append to the track
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
});


const track = document.getElementById("techTrack");
let speed = 1;

function scrollLoop() {
  track.scrollLeft += speed;

  const firstItem = track.children[0];
  const firstItemRight = firstItem.getBoundingClientRect().right;
  const containerLeft = track.getBoundingClientRect().left;

  if (firstItemRight < containerLeft) {
    track.appendChild(firstItem);
    track.scrollLeft -= firstItem.offsetWidth + 48; // 48 = gap + margin
  }

  requestAnimationFrame(scrollLoop);
}

// Optional pause on hover


document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});



window.addEventListener("load", () => {
  const loader = document.getElementById("loader-container");
  const content = document.getElementById("main-content");

  if (loader && content) {
    const MIN_LOAD_TIME = 2000; // 2 seconds minimum
    const startTime = performance.now();

    const showContent = () => {
      const elapsed = performance.now() - startTime;
      const waitTime = Math.max(0, MIN_LOAD_TIME - elapsed);

      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
      }, waitTime);
    };

    // Wait for DOM + assets (images etc.)
    if (document.readyState === "complete") {
      showContent();
    } else {
      window.addEventListener("DOMContentLoaded", showContent);
    }
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const toast = document.getElementById("toast");

  if (form && toast) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          form.reset();
          showToast("Message sent successfully!", true);
        } else {
          showToast("Failed: " + (result.message || "Unknown error"), false);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        showToast("Error: Please try again later.", false);
      }
    });
  } else {
    
  }

  function showToast(message, shouldRedirect) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hidden");

      if (shouldRedirect) {
        window.location.href = "index.html";
      }
    }, 2000);
  }
});




