import { BookOpen, Calculator, Globe, Building2, Clock, Heart, Mountain, Leaf, Atom, FlaskRoundIcon as Flask, Laptop, Code, Grid } from 'lucide-react'

const subjects = [
  { icon: Grid, label: 'All subjects' },
  { icon: BookOpen, label: 'English' },
  { icon: Calculator, label: 'Mathematics' },
  { icon: Globe, label: 'Social Studies' },
  { icon: Building2, label: 'Business' },
  { icon: Clock, label: 'History' },
  { icon: Heart, label: 'Health' },
  { icon: Mountain, label: 'Geography' },
  { icon: Leaf, label: 'Biology' },
  { icon: Atom, label: 'Physics' },
  { icon: Flask, label: 'Chemistry' },
  { icon: Laptop, label: 'Computer' },
  { icon: Code, label: 'Programming' }
]

function QuestionCard({ username, content }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-gray-700 rounded-full" />
        <span className="text-gray-300">{username}</span>
      </div>
      <p className="text-sm">{content}</p>
    </div>
  )
}

export function Questions() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-12">
          WORLD OF QUESTIONS, MEET WORLD OF ANSWERS
        </h2>

        <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-11 gap-4 mb-12">
          {subjects.map((Subject, index) => (
            <button
              key={index}
              className="flex flex-col items-center p-4 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Subject.icon className="w-6 h-6 mb-2" />
              <span className="text-xs text-center">{Subject.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuestionCard
            username="mariobrain"
            content="Activity 2-1 PICTURE OUT MYSELF DIRECTIONS: Draw a picture of yourself as a HUMAN PERSON. Explain your drawing."
          />
          <QuestionCard
            username="destiny2williams"
            content="Justin: Hola Linda, ¿Qué (?) ________ (llevar) en la mochila?"
          />
          <QuestionCard
            username="wonderingStudent17"
            content="Critically discuss section 89 of the Constitution with reference to case law. The discussion must include a comprehensive analysis..."
          />
        </div>

        <div className="flex justify-center mt-8">
          <button className="border border-white text-white hover:bg-white/10 px-6 py-2 rounded-lg transition-colors">
            View all questions
          </button>
        </div>
      </div>
    </section>
  )
}

