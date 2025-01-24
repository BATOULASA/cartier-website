const fabButton = document.getElementById('fabButton');
const fabOptions = document.getElementById('fabOptions');

// Toggle FAB options visibility on button click
fabButton.addEventListener('click', () => {
  if (fabOptions.style.display === 'flex') {
    fabOptions.style.display = 'none';
  } else {
    fabOptions.style.display = 'flex';
  }
});