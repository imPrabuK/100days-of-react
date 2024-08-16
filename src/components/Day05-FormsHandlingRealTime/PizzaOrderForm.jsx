import React, { useState } from "react";

function PizzaOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    size: "Medium",
    toppings: [],
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleSizeChange = (e) => {
    setFormData({ ...formData, size: e.target.value });
  };

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    let newToppings = [...formData.toppings];
    if (checked) {
      newToppings.push(value);
    } else {
      newToppings = newToppings.filter((topping) => topping !== value);
    }
    setFormData({ ...formData, toppings: newToppings });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    console.log("Pizza order:", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginLeft: "550px",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#E21837",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Order Your Pizza 🍕</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Name:
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Pizza Size:
            </label>
            <select
              value={formData.size}
              onChange={handleSizeChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Toppings:
            </label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>
                <input
                  type="checkbox"
                  value="Pepperoni"
                  checked={formData.toppings.includes("Pepperoni")}
                  onChange={handleToppingChange}
                />
                Pepperoni
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Mushrooms"
                  checked={formData.toppings.includes("Mushrooms")}
                  onChange={handleToppingChange}
                />
                Mushrooms
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Onions"
                  checked={formData.toppings.includes("Onions")}
                  onChange={handleToppingChange}
                />
                Onions
              </label>
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "#fff",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Order Pizza
          </button>
        </form>
        {orderSubmitted && (
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#28a745",
              fontWeight: "bold",
            }}
          >
            🎉 Your pizza order has been submitted!
          </div>
        )}
      </div>
    </div>
  );
}

export default PizzaOrderForm;
