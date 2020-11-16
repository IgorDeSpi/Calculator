const signs = [
  ['(',')','%','C'],
  ['7','8','9','÷'],
  ['4','5','6','*'],
  ['1','2','3','-'],
  ['0','.','=','+']
];

const body = document.querySelector('body');

const container = document.createElement('main');
container.className = 'container';

const section = document.createElement('div');
section.className = 'section';

const colonneMax = document.createElement('div');
colonneMax.className = 'columns is-centered';

const carte = document.createElement('div');
carte.className = 'card column is-one-fifth is-mobile';

const calculResult = document.createElement('div');
calculResult.className = 'control';

const input = document.createElement('input');
input.className = 'input has-text-right';
input.type = 'text';
input.value = '0';
input.readOnly = true ;
input.style.fontSize = '20px';
input.style.fontWeight = 'bold';


/* Arborescence */
body.appendChild(container);

container.appendChild(section);

section.appendChild(colonneMax);

colonneMax.appendChild(carte);

carte.appendChild(calculResult);

calculResult.appendChild(input);