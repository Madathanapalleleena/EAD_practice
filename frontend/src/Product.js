import { useState } from "react";

export default function Product() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);

  const [form, setForm] = useState({
    id: "",
    name: "",
    category: "",
    price: ""
  });

  // GET product by ID
  const getProduct = async () => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (e) {
      setProduct({ message: "Error fetching product" });
    }
  };

  // POST add new product
  const addProduct = async () => {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Product added!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Get Product by ID</h2>

      <input
        placeholder="Enter product ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={getProduct}>Search</button>

      <pre>{product ? JSON.stringify(product, null, 2) : ""}</pre>

      <hr />

      <h2>Add New Product</h2>

      <input
        placeholder="ID"
        value={form.id}
        onChange={(e) => setForm({ ...form, id: e.target.value })}
      /><br/>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      /><br/>

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      /><br/>

      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      /><br/>

      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
