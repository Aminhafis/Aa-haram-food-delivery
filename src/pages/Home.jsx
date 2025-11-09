import Banner from "@/components/home/Banner";
import FeaturedRestaurants from "@/components/home/FeaturedRestaurants";
import { Smartphone, Motorbike, Award } from "lucide-react";
import Testimonials from "@/components/home/Testimonials";
import MembershipBanner from "@/components/home/MembershipBanner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <FeaturedRestaurants />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-lg mb-2">
              How it works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Product Quality Is Our Priority, And Always Guarantees
              <br />
              Freshness And Safety Until It Is In Your Hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="text-center space-y-6 group">
              <div className="relative mx-auto w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full group-hover:scale-110 transition-transform duration-300"></div>

                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                  <img
                    src="/images/smartphone.png"
                    alt="SmartPhone Order"
                    className="w-16 h-16"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Easy To Order
              </h3>
              <p className="text-gray-600">
                You only order through
                <br />
                the app
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="relative mx-auto w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-full group-hover:scale-110 transition-transform duration-300"></div>

                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                  <img
                    src="/images/fast-shipping.png"
                    alt="SmartPhone Order"
                    className="w-16 h-16"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Fastest Delivery
              </h3>
              <p className="text-gray-600">
                Delivery will be on
                <br />
                time
              </p>
            </div>

            <div className="text-center space-y-6 group">
              <div className="relative mx-auto w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full group-hover:scale-110 transition-transform duration-300"></div>

                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                  <img
                    src="/images/badge.png"
                    alt="SmartPhone Order"
                    className="w-16 h-16"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">Best Quality</h3>
              <p className="text-gray-600">
                The best quality of food
                <br />
                for you
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <MembershipBanner />
    </div>
  );
};

export default Home;
