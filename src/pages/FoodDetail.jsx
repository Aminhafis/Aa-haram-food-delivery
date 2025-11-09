import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Star,
  Clock,
  Plus,
  Minus,
  ShoppingCart,
  Check,
} from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { mockFoodItems } from "@/data/mockData";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, items, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Find the food item
  const item = mockFoodItems.find((food) => food.id === id);

  // Check if item is in cart
  const cartItem = items.find((i) => i.id === id);
  const isInCart = !!cartItem;

  // If item not found, show error
  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Item Not Found
          </h2>
          <Button onClick={() => navigate("/menu")}>Back to Menu</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(item);
    }
    toast.success(`${quantity} x ${item.name} added to cart!`);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 lg:px-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/menu")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Menu
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x600?text=Food+Image";
                  }}
                />

                <div className="absolute top-4 left-4">
                  <div
                    className={`w-8 h-8 border-2 flex items-center justify-center rounded ${
                      item.isVegetarian
                        ? "border-green-600 bg-white"
                        : "border-red-600 bg-white"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${
                        item.isVegetarian ? "bg-green-600" : "bg-red-600"
                      }`}
                    ></div>
                  </div>
                </div>

                <Badge className="absolute top-4 right-4 bg-white text-gray-900 hover:bg-white text-base px-3 py-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  {item.rating}
                </Badge>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <p className="text-sm text-gray-600">Prep Time</p>
                  <p className="font-semibold">{item.prepTime}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">
                    {item.isVegetarian ? "🥗" : "🍖"}
                  </div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-semibold">
                    {item.isVegetarian ? "Vegetarian" : "Non-Veg"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {item.name}
              </h1>

              <Badge variant="secondary" className="text-sm">
                {item.category}
              </Badge>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">About This Dish</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-gray-600 mb-1">Price</p>
              <p className="text-4xl font-bold text-primary-600">
                {formatPrice(item.price)}
              </p>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                    className="h-12 w-12"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  <div className="px-6 py-2 font-semibold text-lg min-w-[60px] text-center">
                    {quantity}
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleIncrement}
                    className="h-12 w-12"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-lg font-semibold text-gray-900">
                  Total: {formatPrice(item.price * quantity)}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Button
                size="lg"
                className="w-full text-base h-14"
                onClick={handleAddToCart}
              >
                {isInCart ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Add More to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>

              {isInCart && (
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-base h-14"
                  onClick={() => navigate("/cart")}
                >
                  View Cart ({cartItem.quantity} items)
                </Button>
              )}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <p className="text-sm text-blue-800">
                  💡 <strong>Tip:</strong> Orders above ₹500 get free delivery!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
