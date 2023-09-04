const form = document.getElementById('form-verificar');
const campoA = document.getElementById('numeroA');
const campoB = document.getElementById('numeroB');

function maiorQue(campoA, campoB) {
    return campoB.value > campoA.value;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (maiorQue(campoA, campoB)) {
        alert("O número no campo B é o número maior.");
    } else {
        alert("O campo B não é o número maior.");
    }
});
