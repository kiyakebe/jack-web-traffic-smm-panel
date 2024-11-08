import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonial_data";
import { TestimonialTypes } from "@/types/types";

const TestimonialCard = ({
  name,
  message,
  img,
  role,
  country,
}: TestimonialTypes) => {
  return (
    <CarouselItem className="pl-2 basis-full md:basis-1/2 lg:basis-1/3 md:pl-4">
      <div className="flex flex-col items-center justify-center p-10 border">
        <p className="my-3 text-center">{message}</p>
        <img src={img} alt="" width={60} className="my-2 rounded-full" />
        <h1>
          {name} , {role}{" "}
        </h1>
        <h1>{country}</h1>
      </div>
    </CarouselItem>
  );
};

const Testimonial = () => {
  return (
    <div
      id="Testimonial"
      className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
    >
      <div className="flex justify-center my-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Our Testimonials
        </h2>
      </div>

      <p className="text-xl text-slate-800 mb-12 text-center max-w-3xl mx-auto">
        Blush Boutique is just one among the millions of individuals and brands
        who have succeeded See what our other clients say!
      </p>

      <Carousel opts={{ loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonial;
