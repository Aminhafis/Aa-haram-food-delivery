import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  formatPrice,
  calculateDeliveryCharge,
  calculateGST,
  calculateTotal,
} from "@/lib/utils";
import { Truck, Receipt } from "lucide-react";

const CartSummary = ({ subtotal }) => {
  const deliveryCharge = calculateDeliveryCharge(subtotal);
  const gst = calculateGST(subtotal);
  const total = calculateTotal(subtotal);
  const isFreeDelivery = deliveryCharge === 0;

  return (
    <div className="space-y-4">
      {/* Free delivery indicator */}
      {isFreeDelivery && (
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <Truck className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-700">
            Yay! You got free delivery 🎉
          </span>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <Receipt className="h-5 w-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Bill Details</h3>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Item Total</span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span
              className={`font-medium ${
                isFreeDelivery ? "text-green-600 line-through" : ""
              }`}
            >
              {isFreeDelivery ? (
                <>
                  <span className="line-through mr-2">{formatPrice(40)}</span>
                  <Badge variant="secondary" className="text-xs">
                    FREE
                  </Badge>
                </>
              ) : (
                formatPrice(deliveryCharge)
              )}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">GST (5%)</span>
            <span className="font-medium">{formatPrice(gst)}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between text-base font-semibold">
          <span>Total Amount</span>
          <span className="text-primary-600">{formatPrice(total)}</span>
        </div>

        {!isFreeDelivery && subtotal > 0 && (
          <div className="text-xs text-gray-500 mt-2">
            Add items worth {formatPrice(500 - subtotal)} more for free delivery
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
