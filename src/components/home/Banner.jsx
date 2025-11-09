import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-orange-100 overflow-hidden">
      <div className="container relative mx-auto px-4 lg:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2.5 rounded-full shadow-lg">
              <span className="text-sm font-semibold">
                Free delivery on orders above ₹500
              </span>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <img
                  src="/images/fast-shipping.png"
                  alt="Fast Shipping"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <div className="pt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-gray-900">Be The Fastest In</span>
                <br />
                <span className="text-gray-900">Delivery Your </span>
                <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Food
                </span>
              </h1>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                onClick={() => navigate("/menu")}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all px-10 py-7 text-lg font-semibold rounded-full"
              >
                Get Started
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-12 pb-4">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-red-600">
                  500+
                </div>
                <div className="text-xs lg:text-sm text-gray-600 mt-2">
                  Restaurants
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-red-600">
                  50K+
                </div>
                <div className="text-xs lg:text-sm text-gray-600 mt-2">
                  Happy Customers
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-red-600">
                  30min
                </div>
                <div className="text-xs lg:text-sm text-gray-600 mt-2">
                  Avg Delivery
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] animate-fade-in">
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
            <div
              className="absolute bottom-20 left-10 w-16 h-16 bg-orange-600 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            <div
              className="absolute top-0 right-0 w-64 h-64 animate-scale-in"
              style={{ animationDuration: "3s" }}
            >
              <div className="relative w-full h-full bg-white rounded-full shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/30307761/pexels-photo-30307761.jpeg"
                  alt="Healthy Bowl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="absolute top-1/3 left-10 w-56 h-56 animate-scale-in"
              style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
            >
              <div className="relative w-full h-full bg-white rounded-full shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2336674/pexels-photo-2336674.jpeg"
                  alt="Soup Bowl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="absolute bottom-0 right-20 w-72 h-72 animate-scale-in"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            >
              <div className="relative w-full h-full bg-white rounded-full shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5836777/pexels-photo-5836777.jpeg"
                  alt="Salmon Bowl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0">
              <svg
                width="150"
                height="100"
                viewBox="0 0 150 100"
                className="text-red-400 opacity-40"
              >
                <path
                  d="M0,50 Q25,30 50,50 T100,50 T150,50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M0,70 Q25,50 50,70 T100,70 T150,70"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
