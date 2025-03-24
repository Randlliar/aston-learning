interface Order {
    id: number;
    item: string;
    paid: boolean;
}

interface DeliveryInfo {
    orderId: number;
    deliveryTime: string;
}

const orders = [
    { id: 1, item: "Laptop", paid: true },
    { id: 2, item: "Phone", paid: false },
    { id: 3, item: "Tablet", paid: true },
    { id: 4, item: "Computer", paid: true },
];

const deliveryData: Record<number, string> = {
    1: "Delivered in 3 days",
    3: "Delivered in 5 days",
    4: "Delivered in 7 days",
};

function fetchDeliveryInfo(orderId: number): Promise<DeliveryInfo> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
        }, 1000);
    });
}

function fetchOrders(): Promise<Order[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orders) {
                resolve(orders);
            } else {
                reject(new Error("Failed to fetch orders"));
            }
        }, 2000);
    });
}

async function processOrder(): Promise<void> {
    try {
        const allOrders: Order[] = await fetchOrders();
        const paidOrders: Order[] = allOrders.filter(order => order.paid);

        const deliveryPromises: Promise<DeliveryInfo>[] = paidOrders.map(order => fetchDeliveryInfo(order.id));
        const deliveryInfo: DeliveryInfo[] = await Promise.all(deliveryPromises);

        const finalOrders = paidOrders.map((order) => ({
            ...order,
            deliveryTime: deliveryInfo.find(info => info.orderId === order.id)?.deliveryTime || "Unknown"
        }));

        console.log("Final Orders with Delivery Info:", finalOrders);
    } catch (error) {
        console.error("Error processing orders:", error);
    }
}

processOrder();