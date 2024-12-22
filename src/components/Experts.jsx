import img1 from "../assets/me.jpeg";
import img2 from "../assets/photo_2024-12-19_09-04-46.jpg";

function ExpertCard({ name, subject, imageUrl }) {
  return (
    <div className="bg-[#CDFF7B] rounded-xl overflow-hidden">
      <div className="aspect-[3/4] relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold text-black text-lg truncate">{name}</h3>
        <p className="text-sm text-gray-700 truncate">{subject}</p>
      </div>
    </div>
  );
}

export function Experts() {
  const experts = [
    {
      name: "Susan Carter",
      subject: "Biology • Chemistry • Physics",
      imageUrl: img1,
    },
    {
      name: "Stephen Edge",
      subject: "Social Studies",
      imageUrl: img2,
    },
    {
      name: "Cache Dexter",
      subject: "Math",
      imageUrl: img1,
    },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-24">
      <div
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          backgroundImage: `url('../assets/expert_knowledge_background_desktop.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-center">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              EXPERT KNOWLEDGE,
              <br />
              ENHANCED BY <span className="text-[#CDFF7B]">AI</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200">
              Get unlimited homework help, dive deeper with AI, and be ready with Test Prep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                className="bg-[#CDFF7B] hover:bg-[#CDFF7B]/90 text-black text-nowrap rounded-full px-6 sm:px-8 h-12 text-sm sm:text-base font-semibold transition-colors w-full sm:w-auto"
              >
                Sign up for free
              </button>
              <button
                className="border border-[#CDFF7B] text-[#CDFF7B] text-nowrap hover:bg-[#CDFF7B]/10 rounded-full px-6 sm:px-8 h-12 text-sm sm:text-base font-semibold transition-colors w-full sm:w-auto"
              >
                Meet our Experts
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experts.map((expert) => (
              <ExpertCard key={expert.name} {...expert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
