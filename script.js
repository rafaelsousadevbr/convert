//Cotações de moedas no dia
const USD = 5.16;
const EUR = 5.96;
const GBP = 6.83;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input", () => {
    const hasCharactersRegex = /[^\d,]/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
};

function convertCurrency(amount, price, symbol) {
    try {
        footer.classList.add("show-result");
        description.textContent = `${symbol} 1 = R$ ${formatCurrency(price)}`;
        result.textContent = formatCurrency(amount * price);
    } catch (error) {
        footer.classList.remove("show-result");
        alert("Ocorreu um erro ao tentar converter eexibir o resultado. Por favor, tente novamente.");
    }
}

function formatCurrency(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}