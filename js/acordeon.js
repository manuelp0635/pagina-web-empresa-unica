function acordeon(selector) {
    const elemento = document.querySelector(selector)
    if (!elemento) return;

    const items = elemento.querySelectorAll('li');
    if (items.leght == 0) return;

    Array.from(items).forEach(item => {
        item.addEventListener('click', e => {
            const anterior = elemento.querySelector('.open');
            if (anterior) anterior.classList.remove('.open');

            item.classList.add('open');
        });
    });
    console.log(elemento);
}

acordeon('.acordeon');