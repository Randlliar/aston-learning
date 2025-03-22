"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const orders = [
    { id: 1, item: "Laptop", paid: true },
    { id: 2, item: "Phone", paid: false },
    { id: 3, item: "Tablet", paid: true },
    { id: 4, item: "Computer", paid: true },
];
const deliveryData = {
    1: "Delivered in 3 days",
    3: "Delivered in 5 days",
    4: "Delivered in 7 days",
};
function fetchDeliveryInfo(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
        }, 1000);
    });
}
function fetchOrders() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orders) {
                resolve(orders);
            }
            else {
                reject(new Error("Failed to fetch orders"));
            }
        }, 2000);
    });
}
function processOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allOrders = yield fetchOrders();
            const paidOrders = allOrders.filter(order => order.paid);
            const deliveryPromises = paidOrders.map(order => fetchDeliveryInfo(order.id));
            const deliveryInfo = yield Promise.all(deliveryPromises);
            const finalOrders = paidOrders.map((order) => {
                var _a;
                return (Object.assign(Object.assign({}, order), { deliveryTime: ((_a = deliveryInfo.find(info => info.orderId === order.id)) === null || _a === void 0 ? void 0 : _a.deliveryTime) || "Unknown" }));
            });
            console.log("Final Orders with Delivery Info:", finalOrders);
        }
        catch (error) {
            console.error("Error processing orders:", error);
        }
    });
}
processOrder();
