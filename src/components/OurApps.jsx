import img1 from "../assets/download_android_app_us.svg";
import img2 from "../assets/download_ios_app_us.svg";
function RatingStars() {
  return (
    <div className="flex">
      {[1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1L13 7L19 7.75L14.5 12.5L15.5 19L10 16L4.5 19L5.5 12.5L1 7.75L7 7L10 1Z"
            fill="#412D88"
          />
        </svg>
      ))}
      {/* Half star */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1L13 7L19 7.75L14.5 12.5L15.5 19L10 16L4.5 19L5.5 12.5L1 7.75L7 7L10 1Z"
          fill="#412D88"
          fillOpacity="0.5"
        />
      </svg>
    </div>
  );
}

export function OurApps() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[56px] font-black leading-none">4.7</span>
          <div className="flex flex-col">
            <RatingStars />
            <span className="text-sm text-gray-600 mt-1">
              Based on 261.4k Ratings
            </span>
          </div>
        </div>

        <div className="flex gap-3 mb-12">
          <a href="#" className="transition hover:opacity-80">
            <img
              src={img1}
              alt="Download on the App Store"
              width={140}
              height={42}
              className="h-[42px] w-auto"
            />
          </a>
          <a href="#" className="transition hover:opacity-80">
            <img
              src={img2}
              alt="Get it on Google Play"
              width={156}
              height={42}
              className="h-[42px] w-auto"
            />
          </a>
        </div>

        <h2 className="text-[56px] font-black leading-[1.1] tracking-tight mb-6">
          A LEARNING COMPANION
          <br />
          THAT GOES WHERE YOU GO
        </h2>

        <div className="text-xl text-gray-600 space-y-1">
          <p>Never get stuck again with your personal learning companion.</p>
          <p>Like a tutor in your pocket.</p>
        </div>
      </div>
    </section>
  );
}
