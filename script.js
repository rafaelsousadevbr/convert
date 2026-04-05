const amount = document.getElementById('amount');

amount.addEventListener('input', () => {
    const hasCharactersRegex = /[^\d,]/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
});