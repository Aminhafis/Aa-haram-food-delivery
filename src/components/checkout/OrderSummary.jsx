import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const OrderSummary = ({ items, subtotal, deliveryCharge, gst, total }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {item.name}
                  <Badge variant="outline" className="ml-2 text-xs">
                    x{item.quantity}
                  </Badge>
                </p>
                <p className="text-gray-500 text-xs">
                  {formatPrice(item.price)} each
                </p>
              </div>
              <div className="font-medium text-gray-900">
                {formatPrice(item.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Delivery Fee</span>
            <span
              className={
                deliveryCharge === 0 ? "text-green-600 font-medium" : ""
              }
            >
              {deliveryCharge === 0 ? <>FREE</> : formatPrice(deliveryCharge)}
            </span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>GST (5%)</span>
            <span>{formatPrice(gst)}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between text-lg font-bold">
          <span>Total Amount</span>
          <span className="text-primary-600">{formatPrice(total)}</span>
        </div>

        {deliveryCharge === 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-green-700">
              You saved ₹40 on delivery! 🎉
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
