function safeEval(str) {
    return Math.round(Function('return ' + str)()*1000000000) / 1000000000
}

const buttons = document.querySelectorAll('.btn');
let slashClick = false

for (let btn of buttons) {
    btn.addEventListener('click', () => {
            if (btn.textContent != 'AC' && btn.textContent != '=') {
            if (btn.textContent == '%') {
                p2.textContent += ' % ' + safeEval(String(p.textContent)) / 100;
                p.textContent = safeEval(String(p.textContent)) / 100;
            } else {
                p.textContent += String(btn.textContent)
            }
        } else if (btn.textContent == 'AC') {
            p.textContent = '';
            p2.textContent = '';
        } 
        if (btn.textContent === '='){
            p2.textContent = p.textContent + ' = ' + safeEval(String(p.textContent));
            p.textContent = '';
        }
    })
}

document.body.addEventListener('keypress', (e) => {
    if (e.code ==='Enter') {
        p2.textContent = p.textContent + ' = ' + safeEval(String(p.textContent));
        p.textContent = '';
    }
})
// document.body.addEventListener('keypress', (e) => {
//     console.log(e)
//   })
