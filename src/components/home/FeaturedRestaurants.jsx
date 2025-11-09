import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, IndianRupee } from "lucide-react";
import { mockRestaurants } from "@/data/mockData";

const FeaturedRestaurants = () => {
  const navigate = useNavigate();
  const featuredRestaurants = mockRestaurants.filter((r) => r.featured);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Restaurants
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of top-rated restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              onClick={() => navigate("/menu")}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <Badge className="absolute top-3 right-3 bg-white text-gray-900 hover:bg-white">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  {restaurant.rating}
                </Badge>
              </div>

              <CardContent className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {restaurant.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {restaurant.cuisine.map((item, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <IndianRupee className="h-4 w-4" />
                    <span>{restaurant.minOrder} min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/menu")}
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Restaurants</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
