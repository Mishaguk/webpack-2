import menuItem from './menuItem.hbs';
import menu from './menu.json';
import './styles.css';

const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('.menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const setTheme = (checked) => {
  if (checked) {
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
  } else {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
  }
};

const saveTheme = (checked) => {
  localStorage.setItem('theme', JSON.stringify({ isDark: checked }));
};

const loadTheme = () => {
  const { isDark } = JSON.parse(localStorage.getItem('theme'));

  setTheme(isDark);
  refs.checkbox.checked = isDark;
};

const handleCheckboxChange = (e) => {
  setTheme(e.target.checked);
  saveTheme(e.target.checked);
};

const itemsMarkup = menu.map((item) => menuItem(item)).join('');

refs.menu.insertAdjacentHTML('beforeend', itemsMarkup);
refs.checkbox.addEventListener('change', handleCheckboxChange);

loadTheme();
