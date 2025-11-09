import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, SORT_OPTIONS } from "@/data/mockData";

const FilterBar = ({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  showVegOnly,
  onVegOnlyChange,
  totalItems,
}) => {
  return (
    <div className="bg-white border-b sticky top-16 z-40 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer whitespace-nowrap hover:bg-primary-600 hover:text-white transition-colors"
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showVegOnly}
                onChange={(e) => onVegOnlyChange(e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Veg Only
              </span>
            </label>

            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {SORT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {totalItems !== undefined && (
          <div className="mt-3 text-sm text-gray-600">
            Showing {totalItems} item{totalItems !== 1 ? "s" : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
