// Section switcher for non-scrolling page changes
const navLinks = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('.content');

function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('active'));
  sections.forEach(section => section.classList.remove('active'));
}

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    removeActiveClasses();
    this.classList.add('active');
    const targetId = this.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});


document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const excerpt = this.previousElementSibling;
    if (excerpt.classList.contains('expanded')) {
      excerpt.classList.remove('expanded');
      this.textContent = 'More';
    } else {
      excerpt.classList.add('expanded');
      this.textContent = 'Less';
    }
  });
});
