import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  image: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides, image }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Main container with responsive padding */}
      <div className="relative py-4 sm:py-6 md:py-8 lg:py-10">
        {/* Image Container with responsive height */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]">
          {/* Image with proper responsive handling */}
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="Carousel Slide"
            loading="eager"
          />

          {/* Overlay Content with responsive spacing and font sizes */}
          <div className="absolute inset-0 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black/20">
            <h1 className="font-semibold text-2xl leading-normal md:text-[2.1rem] max-w-sm mb-4 sm:mb-6">
              {slides[currentSlide]?.title}
            </h1>
            <button className="px-6 sm:px-8 py-2 sm:py-3 text-xs font-medium border hover:text-black rounded-full hover:bg-[#00ff9d]/80 transition-colors duration-300">
              Learn more
            </button>
          </div>

          {/* Navigation Buttons with responsive positioning and sizing */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 hover:bg-black/30 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white/50"
                strokeWidth={1}
              />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 hover:bg-black/30 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white/50"
                strokeWidth={1}
              />
            </button>
          </div>
        </div>

        {/* Slide Indicators with responsive positioning */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-7 h-[0.1rem] transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
