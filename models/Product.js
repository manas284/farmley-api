const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

const products = [
  {
    name: "Plain Cashew",
    description: "Handpicked, premium-quality cashews with a natural creamy taste.",
    category: "Nuts",
    price: 350,
    stock: 100,
    image: "https://ajfan.store/products/cashew-nut-plain-w-180"
  },
  {
    name: "Salted Cashew",
    description: "Deliciously roasted cashews with a light touch of salt for the perfect snack.",
    category: "Nuts",
    price: 375,
    stock: 80,
    image: "https://youngspremiumfoods.com/products/roasted-salted-cashew-tin-1lb-2oz"
  },
  {
    name: "Premium Almonds",
    description: "Crunchy and nutritious almonds sourced from trusted farms.",
    category: "Nuts",
    price: 320,
    stock: 120,
    image: "https://imgs.search.brave.com/vMRvVdZSfC3AXy_f9jtmZBHJlnC-oIjjRXZtEoek2Z4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaGlr/YXJwdXItZm9vZHMu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL2NhbGlm/b3JuaWEtYWxtb25k/cy0yNWtnLWJhZy01/MDB4NTAwLmpwZz92/PTE3MjAyNTQyMjIm/d2lkdGg9MTQ0NQ"
  },
  {
    name: "Golden Raisins",
    description: "Naturally sweet raisins, perfect for baking and snacking.",
    category: "Dried Fruits",
    price: 280,
    stock: 70,
    image: "https://andysorchard.com/?product=raisins-golden"
  },
  {
    name: "Organic Dates",
    description: "Rich in fiber and nutrients, these dates are a healthy energy booster.",
    category: "Dried Fruits",
    price: 400,
    stock: 60,
    image: "https://imgs.search.brave.com/kk4MyfrtfbPj_UPnHpzKDXmx5DG-AJDAMdi4vRv8FUE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXZ1/bm9oYXJ2ZXN0LmNv/bS9jZG4vc2hvcC9m/aWxlcy9Mb29zZWZy/dWl0LWYyN2E5MTZm/LTFhNjQtNGNjNS1i/NGQ5LWQ5ODdiNzJh/Zjg5MC1fM18xMDI0/eDEwMjQucG5nP3Y9/MTcwNzU5MTI2MQ"
  },
];
