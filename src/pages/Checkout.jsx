import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DeliveryForm from "@/components/checkout/DeliveryForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import EmptyState from "@/components/basics/EmptyState";
import { ShoppingCart, ArrowLeft, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import {
  calculateDeliveryCharge,
  calculateGST,
  calculateTotal,
  generateOrderId,
} from "@/lib/utils";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const deliveryCharge = calculateDeliveryCharge(total);
  const gst = calculateGST(total);
  const finalTotal = calculateTotal(total);

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <EmptyState
          icon={ShoppingCart}
          title="Your cart is empty"
          description="Add some items before checking out"
          action={{
            label: "Browse Menu",
            onClick: () => navigate("/menu"),
          }}
        />
      </div>
    );
  }

  if (!isAuthenticated && !orderPlaced) {
    toast.error("Please login to continue");
    navigate("/auth", { state: { from: "/checkout" } });
    return null;
  }

  const handleOrderSubmit = async (deliveryDetails) => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const newOrderId = generateOrderId();
      setOrderId(newOrderId);

      clearCart();
      setOrderPlaced(true);

      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Order Placed Successfully!
            </h2>

            <p className="text-gray-600">
              Your order has been confirmed and will be delivered soon.
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Order ID</p>
              <p className="text-lg font-mono font-semibold text-gray-900">
                {orderId}
              </p>
            </div>

            <div className="space-y-2 pt-4">
              <Button className="w-full" onClick={() => navigate("/menu")}>
                Continue Shopping
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/")}
              >
                Go to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/cart")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Details</CardTitle>
              </CardHeader>
              <CardContent>
                <DeliveryForm
                  onSubmit={handleOrderSubmit}
                  isSubmitting={isSubmitting}
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <OrderSummary
                items={items}
                subtotal={total}
                deliveryCharge={deliveryCharge}
                gst={gst}
                total={finalTotal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
