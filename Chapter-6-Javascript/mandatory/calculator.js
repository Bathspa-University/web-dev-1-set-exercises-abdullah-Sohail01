document.getElementById('Petrol_calculator_button').addEventListener('click', calculateTotalCost);

function calculateTotalCost() {
    const petrolPrice = parseFloat(document.getElementById('Petrol_Price').value)
    const literPurchased = parseFloat(document.getElementById('Liter_of_petrol_purchased').value);
    const totalCost = (petrolPrice * literPurchased).toFixed(2);

    document.getElementById('total_cost').innerText = `Total cost: $${Number(totalCost)}`;
}