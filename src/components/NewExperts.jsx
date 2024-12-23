import img1 from "../assets/me.jpeg";
import barna from "../assets/barna@nigeria.jpg";
import img2 from "../assets/photo_2024-12-19_09-04-46.jpg";

export function Experts() {
  return (
    <div className=" bg-[#001a00] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              EXPERT KNOWLEDGE,
              <br />
              ENHANCED BY <span className="text-[#7dff7d]">AI</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              Get unlimited homework help, dive deeper with AI, and be ready
              with Test Prep.
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <button className="bg-primary text-primary-text hover:bg-[#6aee6a] font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg">
                Sign up for free
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg">
                Meet our Experts
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Susan Carter",
                subjects: "Biology • Chemistry • Physics",
                image: barna,
              },
              {
                name: "Stephen Edge",
                subjects: "Social Studies",
                image: img1,
              },
              {
                name: "Cache Dexter",
                subjects: "Math",
                image: img2,
              },
            ].map((expert) => (
              <div
                key={expert.name}
                className="flex flex-col justify-between bg-primary rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Expert Details */}
                <div className="p-4 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-text mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {expert.subjects}
                  </p>
                </div>

                {/* Expert Image */}
                <img
                  src={expert.image}
                  alt={`${expert.name} - ${expert.subjects}`}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
