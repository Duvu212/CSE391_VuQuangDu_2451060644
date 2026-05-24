function createCart() {
    let items = [];
    let discount = 0;
    let shippingDiscount = 0;

    function formatMoney(number) {
        return number.toLocaleString("vi-VN") + "đ";
    }

    function getSubtotal() {
        return items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    return {
        addItem(product, quantity = 1) {
            const existingItem = items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity
                });
            }
        },

        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },

        updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
                return;
            }

            const item = items.find(item => item.id === productId);

            if (item) {
                item.quantity = newQuantity;
            }
        },

        getTotal() {
            const subtotal = getSubtotal();
            const afterPercentDiscount = subtotal - subtotal * discount;
            const finalTotal = afterPercentDiscount - shippingDiscount;

            return finalTotal < 0 ? 0 : finalTotal;
        },

        applyDiscount(code) {
            if (code === "SALE10") {
                discount = 0.1;
                shippingDiscount = 0;
            } else if (code === "SALE20") {
                discount = 0.2;
                shippingDiscount = 0;
            } else if (code === "FREESHIP") {
                discount = 0;
                shippingDiscount = 30000;
            } else {
                console.log("Mã giảm giá không hợp lệ");
            }
        },

        printCart() {
            console.log("===== GIỎ HÀNG =====");

            if (items.length === 0) {
                console.log("Giỏ hàng đang trống");
                return;
            }

            console.table(
                items.map((item, index) => ({
                    STT: index + 1,
                    "Sản phẩm": item.name,
                    "SL": item.quantity,
                    "Đơn giá": formatMoney(item.price),
                    "Tổng": formatMoney(item.price * item.quantity)
                }))
            );

            console.log("Tạm tính:", formatMoney(getSubtotal()));
            console.log("Tổng cộng:", formatMoney(this.getTotal()));
        },

        getItemCount() {
            return items.reduce((total, item) => total + item.quantity, 0);
        },

        clearCart() {
            items = [];
            discount = 0;
            shippingDiscount = 0;
        }
    };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount());

cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());

cart.updateQuantity(1, 5);
cart.printCart();

cart.clearCart();
cart.printCart();