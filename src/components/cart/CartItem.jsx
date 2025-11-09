import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex gap-4 py-4 border-b last:border-b-0 animate-fade-in">
      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-1">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {formatPrice(item.price)} each
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeFromCart(item.id)}
            className="hidden md:flex text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecrease}
              className="h-8 w-8 rounded-r-none"
            >
              {item.quantity === 1 ? (
                <Trash2 className="h-4 w-4 text-red-600" />
              ) : (
                <Minus className="h-4 w-4" />
              )}
            </Button>

            <div className="px-4 py-1 font-medium min-w-[40px] text-center">
              {item.quantity}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleIncrease}
              className="h-8 w-8 rounded-l-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="font-semibold text-lg text-gray-900">
            {formatPrice(itemTotal)}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeFromCart(item.id)}
          className="md:hidden mt-2 text-red-600 hover:text-red-700 hover:bg-red-50 w-full"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
