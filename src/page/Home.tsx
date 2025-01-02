import FeatureHighlight from "../components/home/common/FeatureHighlight";
import HeroCarousel from "../components/home/common/HeroCarousel ";
import Navbar from "../components/navbar/Navbar";
import ProductCarousel from "../components/home/ProductCarousel";
import Banner from "../components/home/common/Banner";
import bannerVedio from "../../public/3761461-uhd_3840_2160_25fps.mp4"
import headphoneImge from "../../public/png-clipart-headphones-headphones__1_-removebg-preview.png"
import Banner1 from "../../public/Screenshot (134).jpg"
import Banner2 from "../../public/Screenshot (138).png"
import Banner2 from "../../public/Screenshot (138).png"
import Banner3 from "../../public/Screenshot (139).jpg"
import Banner4 from "../../public/Screenshot (140).png"

const products = [
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
];

function Home() {
  const slides = [
    {
      title: "Boost up your Audio experience",
    },
    {
      title: "Experience Crystal Clear Sound",
    },
    {
      title: "Premium Audio Solutions",
    },
  ];
  return (
    <div className=" bg-black">
      <Navbar />
      <div className="relative h-[117vh] w-full bg-black">
        <div className="absolute inset-0">
          <video
            src={bannerVedio}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></video>
        </div>

        {/* Uncomment if you need the gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black"></div>
        <div className="absolute inset-0 flex items-end justify-center px-4 md:px-6 ">
          <div className="max-w-6xl w-full mx-auto flex flex-wrap items-center justify-between p-4 bg-neutral-600/15 backdrop-blur-sm rounded-full border border-[#2e2d2d85]">
            <div className="flex space-x-4 gap-6 hide-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory w-full">
              {Array(14).map((_,index) => (
                  <div
                    key={index}
                    className="w-14 h-14 flex-shrink-0 snap-center"
                  >
                    <img
                      src={headphoneImge}
                      alt={`Headphone ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-28">
        <FeatureHighlight
          title="Boost up your Gaming experience."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
        />
        <HeroCarousel
          slides={slides}
          image={Banner1}
        />
        <ProductCarousel />
        <Banner image={Banner2} />
        <div className="py-20">
          <FeatureHighlight
            title="Boost up your Gaming experience."
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
          />
          <HeroCarousel
            slides={slides}
            image={Banner3}
          />
          <ProductCarousel />
          <Banner image={Banner4} />
        </div>
        <FeatureHighlight
          title="Trending Products."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
        />
      </div>
      <div className="flex gap-3 overflow-x-auto pt-10 hide-scrollbar">
        {products.map(() => (
          <div className="bg-gray-100 flex flex-col relative flex-shrink-0 w-[14rem]">
            <div className="flex justify-center  h-40 sm:h-48 md:h-80">
              <video
                src={bannerVedio}
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              ></video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
