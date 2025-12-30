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
