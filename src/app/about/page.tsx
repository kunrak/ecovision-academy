import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            About Ecovision Academy
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground mb-20 text-justify sm:text-center">
          <p className="mb-6">
            Ecovision Academy is a career-oriented training and research support
            institute dedicated to building strong foundations in Data Science,
            Statistics, Analytics, and Research Methodologies.
          </p>
          <p>
            We focus on practical learning, real-world applications, and
            personalized mentorship to help students, professionals, and
            research scholars achieve academic and career excellence. Our
            teaching approach emphasizes hands-on training, project-based
            learning, real datasets, and one-to-one guidance, ensuring both
            conceptual clarity and industry readiness.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-secondary text-secondary-foreground p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-heading font-bold mb-6 text-white">
              Our Mission
            </h3>
            <p className="text-slate-300 leading-relaxed">
              To empower individuals with the analytical skills and research
              mindset required to thrive in today's data-driven world. We aim to
              bridge the gap between academic theory and industry application
              through rigorous, hands-on training.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">
              Why Choose Ecovision?
            </h3>
            <ul className="space-y-4">
              {[
                "Personalized Mentorship & One-to-One Guidance",
                "Project-Based Learning with Real Datasets",
                "Focus on Career & Industry Readiness",
                "Comprehensive Research Support for Scholars",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
