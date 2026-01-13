import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import FeaturedCars from "../components/home/FeaturedCars";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const bannerSlides = [
  {
    image: "/hero-1.jpg",
    title: "Drive the Future Today",
    description: "Discover cars that match your lifestyle, performance needs, and ambitions.",
  },
  {
    image: "/hero-2.jpg",
    title: "Unmatched Value, Unbeatable Prices",
    description: "Handpicked vehicles with transparent pricing and zero compromises.",
  },
  {
    image: "/hero-3.jpg",
    title: "Confidence in Every Mile",
    description: "Each car is thoroughly inspected to ensure safety, quality, and reliability.",
  },
  {
    image: "/hero-4.jpg",
    title: "Your Journey, Our Expertise",
    description: "From selection to financing, our experts guide you every step of the way.",
  },
  {
    image: "/hero-5.jpg",
    title: "Where Passion Meets Performance",
    description: "Find vehicles that deliver power, comfort, and an unforgettable driving experience.",
  },
];

const Home = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <div>
      {/* Banner Section */}
      <section className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {bannerSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen">
                <div
                  className="relative h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-3xl px-4">
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-white mb-8">
                        {slide.description}
                      </p>
                      <Button
                        asChild
                        size="lg"
                        variant="default"
                        className="bg-amber-600 hover:bg-amber-700"
                      >
                        <Link to="/allProducts">Browse Cars</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Featured Cars Section */}
      <FeaturedCars />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Read about experiences from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-600">
                    JD
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-600">Bought a BMW 3 Series</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Excellent service and amazing selection of cars. The team was
                very helpful throughout the entire process."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-600">
                    SR
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Rodriguez</h4>
                  <p className="text-gray-600">
                    Bought a Mercedes-Benz C-Class
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                "The buying process was smooth and transparent. I got a great
                deal on my dream car and couldn't be happier with the service."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-600">
                    MP
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Parker</h4>
                  <p className="text-gray-600">Bought an Audi A4</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Outstanding customer service and attention to detail. They
                helped me find the perfect car that matched all my
                requirements."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
