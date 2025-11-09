import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price) => {
  return `₹${price.toFixed(2)}`;
};

export const calculateDeliveryCharge = (subtotal) => {
  return subtotal >= 500 ? 0 : 40;
};

export const calculateGST = (subtotal) => {
  return (subtotal * 5) / 100;
};

export const calculateTotal = (subtotal) => {
  const deliveryCharge = calculateDeliveryCharge(subtotal);
  const gst = calculateGST(subtotal);
  return subtotal + deliveryCharge + gst;
};

export const generateOrderId = () => {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};
