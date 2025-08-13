AOS.init();

new Typed("#typed", {
  strings: ["Web Designer", "PCB Designer" , "Tech Enthusiast"],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

function openModal(content) {
  document.getElementById('modal-text').innerText = content;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
