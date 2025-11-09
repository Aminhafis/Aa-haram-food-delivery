import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  LogOut,
  Home,
  UtensilsCrossed,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/menu", label: "Menu", icon: UtensilsCrossed },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-red-50 to-orange-100 backdrop-blur ">
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <span className="hidden sm:inline">Aa-haram</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-red-600",
                    isActive(link.to) ? "text-red-600" : "text-gray-700"
                  )}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-red-100"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-scale-in bg-red-500"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>

            <div className="hidden md:flex md:items-center md:space-x-2">
              {isAuthenticated ? (
                <>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 hover:bg-red-100"
                  >
                    <User className="h-4 w-4" />
                    <span className="max-w-[100px] truncate">{user?.name}</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="flex items-center space-x-1 border-red-300 hover:bg-red-50 hover:text-red-700"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => navigate("/auth")}
                  size="sm"
                  className="flex items-center space-x-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-red-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-orange-200/50 animate-slide-in-right bg-white/80">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium transition-colors",
                      isActive(link.to)
                        ? "bg-red-50 text-red-600"
                        : "text-gray-700 hover:bg-orange-50"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              <div className="border-t border-orange-200/50 pt-2 mt-2">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700">
                      <User className="h-5 w-5" />
                      <span className="font-medium">{user?.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-5 w-5" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    className="w-full justify-start bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                    onClick={() => {
                      navigate("/auth");
                      setMobileMenuOpen(false);
                    }}
                  >
                    <User className="mr-2 h-5 w-5" />
                    Login / Register
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
