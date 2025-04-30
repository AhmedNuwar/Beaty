function orderAgain(orderId){
    let order = document.getElementById(orderId);
    let orderItems = order.querySelectorAll(".order-item");
    orderItems.forEach(item => {
        let itemName = item.dataset.name;
        let itemPrice = parseFloat(item.dataset.price);
        let itemImg = item.dataset.img;

        //get quantity from input field
        let quantityInput = item.dataset.quantity;
        let quantity = parseInt(quantityInput) || 1;
        let itemToatl = itemPrice * quantity;
        //check if the item is item already in the cart
        let existingItem = cart.find(item => item.name === itemName);
        if (existingItem)
        {
            existingItem.quantity += quantity;
            existingItem.total += existingItem.price * quantity;
        }
        else
        {
            cart.push(
            {
                name: itemName,
                price: itemPrice,
                img: itemImg,
                quantity: quantity,
                total: itemToatl
            });
        }
        SaveCart();
        UpdateCart();
    })
}