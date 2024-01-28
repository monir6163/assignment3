"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: false,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "linear",
};

const Hero = (props) => {
  const { slider, featured } = props;
  return (
    <div className="flex flex-wrap pt-5 gap-5">
      <div className="md:w-8/12 sm:w-full w-full">
        <Slider {...settings}>
          {slider?.map((item, i) => {
            return (
              <div key={i} className="relative">
                <Image
                  src={item?.img1}
                  alt={item?.title}
                  width={1920}
                  height={1080}
                  priority={true}
                  className="rounded md:h-[71.5vh] focus:outline-none"
                />
                <div className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 text-white p-2 rounded">
                  <Link
                    href={`/news?id=${item["id"]}`}
                    className="hover:text-blue-500 ease-linear transition-all duration-150"
                  >
                    <h2 className="text-[14px] md:text-xl">{item?.title}</h2>
                    <p className="text-[12px] mt-5">{item?.short_des}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="md:w-[31%] w-full">
        <Link href={`/news?id=${slider[2]?.id}`}>
          <div className="relative">
            <Image
              src={featured[2]?.img1}
              alt={featured[2]?.title}
              width={1920}
              height={1080}
              priority={true}
              className="rounded md:h-[71.5vh] focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 text-white p-2 rounded hover:text-blue-500 ease-linear transition-all duration-150">
              <h2 className="text-[12px] md:text-xl">{featured[2]?.title}</h2>
              <p className="text-[10px] mt-5">{featured[2]?.short_des}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
