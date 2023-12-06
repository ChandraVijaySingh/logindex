/*const labels = document.querySelectorAll('.form-control')

labels.forEach(label =>  {
    label.innerHTML =label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay : ${idx *50}ms">${letter}</span>`)
    .join('')
})  */

const formControls = document.querySelectorAll('.form-control');

formControls.forEach(formControl => {
    const label = formControl.querySelector('label');
    const labelText = label.innerText;

    label.innerHTML = labelText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        .join('');

    const spans = label.querySelectorAll('span');

    spans.forEach(span => {
        span.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
});
