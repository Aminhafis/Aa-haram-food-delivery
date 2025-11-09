import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import FoodCard from "@/components/menu/FoodCard";
import FilterBar from "@/components/menu/FilterBar";
import EmptyState from "@/components/basics/EmptyState";
import { mockFoodItems } from "@/data/mockData";
import { UtensilsCrossed } from "lucide-react";

const Menu = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [showVegOnly, setShowVegOnly] = useState(false);

  const filteredItems = useMemo(() => {
    let items = [...mockFoodItems];

    if (searchQuery) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    if (showVegOnly) {
      items = items.filter((item) => item.isVegetarian);
    }

    items.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return items;
  }, [selectedCategory, sortBy, showVegOnly, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        showVegOnly={showVegOnly}
        onVegOnlyChange={setShowVegOnly}
        totalItems={filteredItems.length}
      />

      <div className="container mx-auto px-4 lg:px-6 py-8">
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Search results for "{searchQuery}"
            </h2>
          </div>
        )}

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={UtensilsCrossed}
            title="No items found"
            description="Try adjusting your filters or search for something else"
            action={{
              label: "Clear Filters",
              onClick: () => {
                setSelectedCategory("All");
                setShowVegOnly(false);
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Menu;
