const tabs = document.querySelectorAll('.tab');
const rows = document.querySelectorAll('tbody tr');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const race = tab.dataset.race;
    rows.forEach((row) => {
      row.hidden = race !== 'all' && row.dataset.place !== race;
    });
  });
});
