import React from "react";
import { Link } from "react-router-dom";
import checkImg from "../../images/Check.png";
import plusImg from "../../images/shape-2.png";
import videoBanner from "../../images/video-banner.jpg";
// import video from "../../images/গোপালগঞ্জ থেকে মশাল হাতে ঢাকার আর্মি স্টেডিয়ামের পথে ২০ ক্রীড়াবিদ _ Bangladesh Olympic Association.mp4";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div>
        <div className="flex items-center">
          <div>
            <img src={checkImg} alt="" />
          </div>
          <h5 className="ml-2 text-black font-bold">
            দেশ সেরা আইটি ট্রেনিং ইনস্টিটিউটে
          </h5>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl text-black font-black">ক্যারিয়ার শুরু হোক</h2>
          <h1 className="text-5xl text-primary font-black mt-2">
            দক্ষতার আত্মবিশ্বাসে
          </h1>
          <p className="mt-8 text-black flex items-center text-lg">
            অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ক্রিয়েটিভ আইটি ইনস্টিটিউট
            প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি
            ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।
            <div>
              <img style={{ width: "40px" }} src={plusImg} alt="" />
            </div>
          </p>
          <div className="flex items-center mt-4">
            <div className="bg-primary text-white px-5 py-3 rounded-lg flex browse-info">
              <div>
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <div className="ml-2">
                <button>
                  <Link to="" className="">
                    ব্রাউজ কোর্স
                  </Link>
                </button>
              </div>
            </div>
            <div className="ml-4 bg-primary text-white px-5 py-3 rounded-lg flex browse-info">
              <div>
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <div className="ml-2">
                <button>
                  <Link to="" className="">
                    জয়েন ফ্রি সেমিনার
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img src={videoBanner} alt="" />
          <div className="absolute bottom-40 left-80 border-8 rounded-full">
            <PlayIcon className="w-6 h-6 text-primary" />
          </div>
        </div>
        {/* <video
          style={{ width: "100%" }}
          className="video-tag ml-2"
          height="300"
          controls
        >
          <source src={video} type="video/mp4" />
        </video> */}
      </div>
    </div>
  );
};

export default Banner;
