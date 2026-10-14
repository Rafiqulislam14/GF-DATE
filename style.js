function nextStep(stepNumber) {
    document.querySelectorAll('.container > div').forEach(div => div.classList.add('hidden'));
    document.getElementById('step-' + stepNumber).classList.remove('hidden');
}

function moveNoButton() {
    const btnNo = document.getElementById('btn-no');
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 100 - 50;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

function selectFood(element) {
    document.querySelectorAll('.food-card').forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');
}