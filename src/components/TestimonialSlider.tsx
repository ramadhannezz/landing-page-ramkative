
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  weddingDate: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Ahmad",
    role: "Pasangan Pengantin",
    image: "/public/assets/user (1).jpg",
    rating: 5,
    text: "Ramkative sangat membantu pernikahan aku! Website undangan digitalnya elegan dan mudah digunakan. Semua tamu bisa RSVP dengan mudah dan QR Code guestbook-nya sangat praktis. Highly recommended!",
    weddingDate: "Oktober 2024"
  },
  {
    id: 2,
    name: "Dinda & Rizky",
    role: "Pasangan Pengantin",
    image: "/public/assets/user (5).jpg",
    rating: 5,
    text: "Wedding planner tools dari Ramkative membantu banget dalam mengatur timeline dan budget pernikahan. Fitur vendor management-nya juga sangat berguna. Terima kasih Ramkative!",
    weddingDate: "September 2024"
  },
  {
    id: 3,
    name: "Maya & Fajar",
    role: "Pasangan Pengantin",
    image: "/public/assets/user (3).jpg",
    rating: 5,
    text: "Awalnya ragu menggunakan undangan digital, tapi setelah coba Ramkative, aku jadi yakin! Template-nya bagus, customizable, dan ramah lingkungan. Customer service-nya juga responsif banget.",
    weddingDate: "November 2024"
  },
    {
    id: 4,
    name: "Siska & Jaka",
    role: "Pasangan Pengantin",
    image: "/public/assets/user (6).jpg",
    rating: 4,
    text: "Digital guestbook dengan QR Code dari Ramkative bikin acara pernikahan aku jadi lebih interaktif. Tamu-tamu senang bisa langsung foto selfie dan kasih ucapan. Semua memories tersimpan dengan rapi!",
    weddingDate: "November 2024"
  },
  {
    id: 5,
    name: "Putri & Andi",
    role: "Pasangan Pengantin",
    image: "/public/assets/user (4).jpg",
    rating: 5,
    text: "Digital guestbook dengan QR Code dari Ramkative bikin acara pernikahan aku jadi lebih interaktif. Tamu-tamu senang bisa langsung foto selfie dan kasih ucapan. Semua memories tersimpan dengan rapi!",
    weddingDate: "Desember 2024"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-pink-500">Pasangan Kami?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Lebih dari 1000+ pasangan telah mempercayai Ramkative untuk pernikahan mereka
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 border-pink-100 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <Quote className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                        <p className="text-lg text-gray-700 leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-pink-200"
                        />
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                          <p className="text-sm text-pink-500">{testimonial.weddingDate}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-10 w-10 rounded-full border-pink-300 text-pink-600 hover:bg-pink-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-10 w-10 rounded-full border-pink-300 text-pink-600 hover:bg-pink-50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-pink-500' : 'bg-pink-200'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
