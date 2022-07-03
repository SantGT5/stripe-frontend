import "./App.css";

function App() {
  const handlePayment = () => {
    fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <button onClick={handlePayment}>Checkout</button>
    </div>
  );
}

export default App;
