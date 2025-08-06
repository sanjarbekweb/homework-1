export class Product {
    constructor(product) {
        this.name = product.name;
        this.image = product.image;
        this.price = product.price;
        this.id = product.id;
    }

    build() {
        const box = document.createElement('div');
        box.className = 'box';
        const placeholder = document.createElement('img');
        placeholder.src = "/place.png";
        placeholder.alt = this.name;
        const img = new Image();
        img.alt = this.name;
        img.src = this.image;
        img.onload = function () {
            placeholder.remove();
            box.appendChild(img);
        };
        const info = document.createElement('div');
        info.className = 'info';
        const nameOf = document.createElement('p');
        nameOf.textContent = this.name;
        const priceOf = document.createElement('span');
        priceOf.textContent = `$${this.price}`;
        info.appendChild(nameOf);
        info.appendChild(priceOf);
        box.appendChild(placeholder);
        box.appendChild(info);
        box.dataset.name = this.name;
        box.dataset.price = this.price;
        this.element = box;
        return box;
    }

    onClick() {
        const backdrop = document.querySelector('.backdrop');
        backdrop.classList.add("active");

        const modal = document.createElement('div');
        modal.className = 'modal';

        const imageOf = document.createElement("img");
        imageOf.src = this.image;

        const modalP = document.createElement("p");
        modalP.textContent = this.element.dataset.name;

        const modalSpan = document.createElement("span");
        modalSpan.textContent = `$ ${this.element.dataset.price}`;

        const butttonOf = document.createElement("button");
        butttonOf.textContent = "Add to Wishlist";

        modal.appendChild(imageOf);
        modal.appendChild(modalP);
        modal.appendChild(modalSpan);
        modal.appendChild(butttonOf);

        backdrop.appendChild(modal);

        this.modal = modal;
        const closeModal = (event) => {
            event.stopPropagation();
            if (event.target === backdrop) {
                backdrop.classList.remove("active");
                this.modal?.remove();
                backdrop.removeEventListener('click', closeModal);
            }
        };
        backdrop.addEventListener('click', closeModal);
        window.addEventListener('keydown', (event) => {
            if (event.key == 'Escape') {
                backdrop.classList.remove("active");
                this.modal?.remove();
                backdrop.removeEventListener('click', closeModal);
            }
        })
    }
}

export class Audio extends Product { }
export class Wearable extends Product { }
export class Display extends Product { }
export class Storage extends Product { }
export class Peripheral extends Product { }
export class Power extends Product { }
