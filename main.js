var inputNum = document.getElementById('inputNum');
console.log(inputNum);

inputNum.addEventListener('keypress', check);

function check(e) {
    if (isNaN(Number(e.key)) || e.key.charCodeAt(0) === 32) {
        e.preventDefault();
    }
}