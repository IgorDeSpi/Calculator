const btn = ['(', ')', '%', 'AC','7', '8', '9', '/','4', '5', '6', '*','1', '2', '3', '-','0', '.', '=', '+',];

const body = document.querySelector('body');

const section = document.createElement('section');
section.className = 'grid';
body.appendChild(section);

const result = document.createElement('div');
result.className = 'para';
section.appendChild(result);

const p2 = document.createElement('p');
p2.className = 'p2';
p2.textContent = ''
result.appendChild(p2);

const p = document.createElement('p');
p.className = 'p';
p.textContent = ''
result.appendChild(p);

for (let i = 0; i < btn.length; i++){
  const bouton = document.createElement('div');
  bouton.className ='btn';
  bouton.textContent = btn[i];
  section.appendChild(bouton);
}