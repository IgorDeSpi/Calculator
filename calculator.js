const btn = ['(', ')', '%', 'AC','7', '8', '9', '÷','4', '5', '6', '*','1', '2', '3', '-','0', '.', '=', '+',];

const body = document.querySelector('body');

const section = document.createElement('section');
section.className = 'grid';
body.appendChild(section);

const result = document.createElement('div');
result.className = 'para';
section.appendChild(result);

const p2 = document.createElement('p');
p2.className = 'p2';
p2.textContent = '0'
result.appendChild(p2);

const p = document.createElement('p');
p.className = 'p';
p.textContent = '0'
result.appendChild(p);

for (let i = 0; i < btn.length; i++){
  const bouton = document.createElement('div');
  bouton.className ='btn';
  bouton.textContent = btn[i];
  section.appendChild(bouton);
}


for (let i of btn){
  i.addEventListener('click', () => {
    if (p.textContent === 0 && p2.textContent === 0) {
      p.textContent = '';
      p2.textContent = '';
    }
    if (i.textContent !== 'AC' && i.textContent !== '=') {
      if (i.textContent = '%') {
        p.textContent = String(Number(p.textContent) / 100);
        p2.textContent = String(Number(p2.textContent) / 100);
      }
      else {
        p.textContent += String(i.textContent);
        p2.textContent += ' ' + String(i.textContent);
      }
    }
    else if (i.textContent === 'AC') {
      p.textContent ='0';
      p2.textContent = '0';
    }
    else {
      p.textContent = safeEval(String(p.textContent));
      p2.textContent += ' = ' + safeEval(String(p.textContent));
    }
  })
}