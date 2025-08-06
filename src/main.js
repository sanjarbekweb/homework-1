// const products = document.querySelector('.products')
// const box = document.createElement('div')
// box.className = 'box'
import { Audio, Wearable, Display, Storage, Peripheral, Power } from "./product"
const ProductsType = {
    Audio: Audio,
    Wearable: Wearable,
    Display: Display,
    Storage: Storage,
    Peripheral: Peripheral,
    Power: Power
};
fetch('/products.json')
    .then(res => res.json())
    .then(data => {
        const products = document.querySelector('.products')
        data.forEach(data => {
            const name = data.type;
            const product = new ProductsType[name](data);
            const domElement = product.build()
            domElement.onclick = () => product.onClick();
            products.appendChild(domElement);
        });
    })
    .catch(err => console.error('Error loading products:', err));
