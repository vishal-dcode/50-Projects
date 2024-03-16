const html = document.querySelector('html');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeButtons = document.querySelectorAll('.theme-btn');

themeToggleBtn.addEventListener('click', (e) => {
  const target = e.target;
  console.log(target);

  if (target.classList.contains('theme-btn')) {
    const selectedTheme = target.getAttribute('data-theme');
    console.log(selectedTheme);

    html.setAttribute('data-theme', selectedTheme);

    // Remove the 'active' class from all buttons and add it only to the selected button
    themeButtons.forEach((button) => {
      button.classList.remove('active');
    });
    target.classList.add('active');
  }
});
