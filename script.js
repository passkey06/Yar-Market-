const whatsappNo = "905538577094";

const deliveryFee = 50;

function startShopping() {
    document.querySelector(".categories").scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelector(".btn").addEventListener("click", startShopping);

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h3").innerText;

        alert(title + " kategorisi çok yakında açılıyor.");

    });

});

function orderWhatsApp(){

let text="Merhaba, Yarış Market'ten sipariş vermek istiyorum.";

window.open(
`https://wa.me/${whatsappNo}?text=${encodeURIComponent(text)}`,
"_blank"
);

}
