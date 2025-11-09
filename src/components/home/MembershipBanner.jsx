import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MembershipBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="container mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=600&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>

          <div className="relative z-10 py-20 px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Join our membership and get
              <br />
              discount up to 50%
            </h2>

            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-semibold px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Sign Up
            </Button>
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBanner;
