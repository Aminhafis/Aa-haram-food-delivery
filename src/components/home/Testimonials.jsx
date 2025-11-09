import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Naura Silvana",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
    },
    {
      id: 2,
      name: "Azura",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
    },
    {
      id: 3,
      name: "Hyder adil",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "Amazing food delivery service! Fast, reliable, and the food always arrives hot. Highly recommended!",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="h-5 w-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-5 w-5 text-yellow-400" />
          <Star
            className="h-5 w-5 fill-yellow-400 text-yellow-400 absolute top-0 left-0"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
              alt="Food 1"
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop"
              alt="Food 2"
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop"
              alt="Food 3"
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
            />
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=200&fit=crop"
                alt="Food 4"
                className="w-full h-[88px] object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop"
                alt="Food 5"
                className="w-full h-[88px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-orange-500 font-semibold text-lg mb-2">
                What they say
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Our Customers Say
                <br />
                About Us
              </h2>
            </div>

            <div className="relative">
              <div className="flex gap-4 overflow-hidden">
                {[currentIndex, (currentIndex + 1) % testimonials.length].map(
                  (index, i) => {
                    const testimonial = testimonials[index];
                    return (
                      <Card
                        key={testimonial.id}
                        className={`flex-shrink-0 w-full md:w-[48%] transition-all duration-300 ${
                          i === 1 ? "hidden md:block" : ""
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <div className="flex gap-1 mt-1">
                                {renderStars(testimonial.rating)}
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed">
                            "{testimonial.text}"
                          </p>
                        </CardContent>
                      </Card>
                    );
                  }
                )}
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-orange-500"
                        : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
