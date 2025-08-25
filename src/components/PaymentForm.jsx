import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Paiement simulé !");
    // Ici tu peux intégrer Stripe, PayPal, etc.
  };

  return (
    <form onSubmit={handlePayment} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4 text-center">Paiement</h2>
      <input
        type="text"
        placeholder="Numéro de carte"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
        required
      />
      <input
        type="text"
        placeholder="MM/AA"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
        required
      />
      <input
        type="text"
        placeholder="CVC"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-900 hover:bg-green-700 text-white py-3 rounded-lg dark:bg-gray-900 dark:hover:bg-gray-700 transition"
      >
        Payer
      </button>
    </form>
  );
};

export default PaymentForm;
