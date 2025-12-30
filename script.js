const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function addTodo(){
  const text = input.value.trim();
  if(!text) return;
  const li = document.createElement('li');
  li.className = 'todo-item';
  const left = document.createElement('div');
  left.className = 'left';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-checkbox';
  const span = document.createElement('span');
  span.textContent = text;
  const del = document.createElement('button');
  del.className = 'delete-btn';
  del.textContent = 'Delete';
  del.addEventListener('click', ()=>{
    list.removeChild(li);
  });

  checkbox.addEventListener('change', ()=>{
    if(checkbox.checked) li.classList.add('completed');
    else li.classList.remove('completed');
  });

  left.appendChild(checkbox);
  left.appendChild(span);
  li.appendChild(left);
  li.appendChild(del);
  list.appendChild(li);
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') addTodo();
});

// Theme toggle and persistence
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  if(themeToggle) themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const savedTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);
if(themeToggle){
  themeToggle.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
}
