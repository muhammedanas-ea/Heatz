import vedioBanner from "../../../../public/3761461-uhd_3840_2160_25fps.mp4"

const Banner = ({ image }: { image: string }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10">
      {/* Image Container */}
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Featured content"
        />
      </div>

      {/* Video Container */}
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full">
        <video
          src={vedioBanner}
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
  );
};
export default Banner;
