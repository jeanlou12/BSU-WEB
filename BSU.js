// Smooth scroll for sidebar links
document.querySelectorAll('.sidebar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Highlight active section link (optional)
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
  
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const link = document.querySelector(`.sidebar a[href="#${id}"]`);
  
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        document.querySelectorAll('.sidebar a').forEach(el => el.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  });

  /*mission and vision*/
  function toggleFlip(card) {
    card.classList.toggle('flipped');
  }
  

  // Courses.js
  function toggleInfo(button) {
    const info = button.nextElementSibling;
    if (info.style.display === "block") {
      info.style.display = "none";
      button.textContent = "More Info";
    } else {
      info.style.display = "block";
      button.textContent = "Less Info";
    }
  }
  
  