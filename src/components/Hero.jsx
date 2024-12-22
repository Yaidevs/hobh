import img1 from "../assets/crush_your_schoolwork_custom_font.svg";
export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-20 left-20 w-16 h-16 bg-green-400 rounded-full blur-lg animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full blur-lg animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <img src={img1} />

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Get a boost for homework, studying, and Test Prep
          <br />
          with Brainly, the AI Learning Companion™.
        </p>

        <button className="bg-[#CDFF7B] hover:bg-[#CDFF7B]/90 text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors">
          Sign up for free
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Free with ads. Get ad-free learning starting at $3/month.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Expert-verified homework help</h3>
            <p className="text-sm text-gray-600">
              Unlimited 24/7 support
              <br />
              Powered by AI-verified by experts
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold mb-2">
              Personal study plans designed just for you
            </h3>
            <p className="text-sm text-gray-600">
              Ace your tests, quizzes, and exams with AI-powered Test Prep
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold mb-2">
              Instant answers unlock infinite discoveries
            </h3>
            <p className="text-sm text-gray-600">
              Dive deeper into topics and gain a better understanding
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
