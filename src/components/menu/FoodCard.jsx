import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Plus, Check } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const { addToCart, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const isInCart = items.some((cartItem) => cartItem.id === item.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(item);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleCardClick = () => {
    navigate(`/food/${item.id}`);
  };

  return (
    <Card
      className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer border-orange-100 hover:border-orange-200 bg-white"
      onClick={handleCardClick}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x300?text=Food+Image";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-3 left-3 z-10">
          <div
            className={`w-7 h-7 border-2 flex items-center justify-center rounded shadow-lg bg-white ${
              item.isVegetarian ? "border-green-500" : "border-red-500"
            }`}
          >
            <div
              className={`w-3.5 h-3.5 rounded-full ${
                item.isVegetarian ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
          </div>
        </div>

        <Badge className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white border-orange-200 shadow-md">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-semibold">{item.rating}</span>
        </Badge>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-red-600 transition-colors">
            {item.name}
          </h3>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Clock className="h-4 w-4 mr-1.5 text-orange-500" />
            <span className="font-medium">{item.prepTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-orange-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Price</span>
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {formatPrice(item.price)}
            </span>
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`transition-all px-5 py-2 font-semibold rounded-full shadow-md hover:shadow-lg ${
              isInCart
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
            }`}
          >
            {isAdding ? (
              <>
                <Check className="h-4 w-4 mr-1.5 animate-pulse" />
                Adding...
              </>
            ) : isInCart ? (
              <>
                <Check className="h-4 w-4 mr-1.5" />
                Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1.5" />
                Add
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
