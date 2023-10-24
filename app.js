const menuIcon = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".navMenu");

menuIcon.onclick = function () {
  if (mobileMenu.style.display != "block") {
    mobileMenu.style.display = "block";
    menuIcon.classList.replace("fa-bars", "fa-xmark")
  }
  else {
    mobileMenu.style.display = "none";
    menuIcon.classList.replace("fa-xmark", "fa-bars")
  }
}



const navLinks = document.querySelectorAll('nav ul li ');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach((navLink) => navLink.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});



function incrementQuantity(id) {
  let input = document.getElementById(id);
  input.value = parseInt(input.value) + 1;
}

function decrementQuantity(id) {
  let input = document.getElementById(id);
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
}

function calculateTotal() {
  let burgerQuantity = parseInt(document.getElementById("burger-quantity").value);
  let pizzaQuantity = parseInt(document.getElementById("pizza-quantity").value);
  let saladQuantity = parseInt(document.getElementById("salad-quantity").value);
  let coffeeQuantity = parseInt(document.getElementById("coffee-quantity").value);

  let totalPrice = burgerQuantity * 5 + pizzaQuantity * 8 + saladQuantity * 4 + coffeeQuantity * 3;

  document.getElementById("total-price").textContent = totalPrice;

  // Create order item entries
  let orderItems = document.getElementById("order-items");
  orderItems.innerHTML = "";

  if (burgerQuantity > 0) {
    orderItems.innerHTML += "<div class='order-item'><i class='fas fa-hamburger bill-item-thumb' style='color: #f44336;'></i> Burger x " + burgerQuantity + "</div>";
  }

  if (pizzaQuantity > 0) {
    orderItems.innerHTML += "<div class='order-item'><i class='fas fa-pizza-slice bill-item-thumb' style='color: #4caf50;'></i> Pizza x " + pizzaQuantity + "</div>";
  }

  if (saladQuantity > 0) {
    orderItems.innerHTML += "<div class='order-item'><i class='fas fa-utensils bill-item-thumb' style='color: #2196f3;'></i> Salad x " + saladQuantity + "</div>";
  }

  if (coffeeQuantity > 0) {
    orderItems.innerHTML += "<div class='order-item'><i class='fas fa-coffee bill-item-thumb' style='color: #ff9800;'></i> Coffee x " + coffeeQuantity + "</div>";
  }
}

function printBill() {
  let customerName = document.getElementById("customer-name").value;
  let paymentOption = document.getElementById("payment-options").value;
  let dineOption = document.querySelector('input[name="dine-option"]:checked').value;
  let totalPrice = document.getElementById("total-price").textContent;

  // Generate bill content
  let billContent = `
                    <div class="bill-container">
                        <img src="https://i.imgur.com/Qv67Tyq.png" class="bill-logo" alt="Restaurant Logo">
                        <h2 class="bill-heading">Customer Bill</h2>
                        <div class="bill-info">
                            <span>Customer: ${customerName}</span><br>
                            <span>Payment Option: ${paymentOption}</span><br>
                            <span>Dine Option: ${dineOption}</span><br>
                        </div>
                        <div class="bill-items">
                            <!-- Order items will be dynamically added here -->
                        </div>
                        <div class="bill-total">Total: $${totalPrice}</div>
                    </div>
                `;

  // Open print window
  let printWindow = window.open('', '', 'width=900,height=900');
  printWindow.document.open();
  printWindow.document.write('<html><head><title>Print Bill</title></head><body>');
  printWindow.document.write(billContent);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

$(document).ready(function() {
  // Randomly generate today's total sales amount
  let todaySalesAmount = Math.floor(Math.random() * 1000) + 500;
  $("#today-sales-amount").text(todaySalesAmount);
});