// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headings.forEach(heading => {
  let letters = heading.textContent.split("");
  heading.textContent = "";

  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "fade-in";
    heading.appendChild(span);
  });
});

const spans = document.querySelectorAll('.fade-in');

spans.forEach((span, index) => {
  span.addEventListener('click', () => {
    span.classList.add('fade-out');
    if (index === spans.length - 1) {
      setTimeout(() => {
        window.location.href = "https://github.com/Ajay-Dhangar";
      }, 1000);
    }
  });
});

