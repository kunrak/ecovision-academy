import Image from "next/image";
import { CheckCircle } from "lucide-react";

const mentors = [
  {
    name: "Sayak Ghosh",
    title: "Founder & Mentor, Ecovision Academy",
    image: "/assets/sayak-ghosh.jpeg",
    bio: "Sayak Ghosh is the Founder and Mentor of Ecovision Academy, with over four years of research experience in economics. His work has been published in UGC CARE-listed journals, including the Bengal Economic Association and Cambridge Scholars Publishing. He has also contributed to a two-year project under NITI Aayog. Sayak has actively participated in several national and international conferences, earning multiple Best Paper Awards. He holds an M.Sc. in Economics, securing First Class First.",
  },
  {
    name: "Turjo Sarkar",
    title: "Program Coordinator & Marketing Consultant",
    image: "/assets/turjo-sarkar.jpeg",
    bio: "Turjo brings strong expertise in marketing strategy, program coordination, and client engagement. He specializes in managing academic and professional initiatives, ensuring seamless execution while driving growth through effective outreach and communication.",
  },
  {
    name: "Arka Prabha Pal",
    title: "Academic Content Developer",
    image: "/assets/arka-prabha-pal.jpeg",
    bio: "Arka specializes in developing high-quality academic content across economics and related disciplines. He brings strong expertise in research-based writing, concept simplification, and curriculum-focused material creation, helping students and professionals grasp complex topics with clarity and precision.",
  },
  {
    name: "Atanu Das",
    title: "Marketing Manager",
    image: "/assets/atanu-das.jpeg",
    bio: "Atanu brings deep expertise in quantitative research, econometrics, and academic publishing. He specializes in guiding PhD scholars and professionals through complex research workflows, from data collection and analysis to final publication.",
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
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

        {/* Meet Our Mentors */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Meet Our Mentors
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Learn from industry experts and research scholars who are
              passionate about transforming how data science is taught.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="group relative bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative background accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: "var(--primary)" }}
                />

                <div className="flex flex-col items-center text-center gap-8">
                  {/* Profile Picture */}
                  <div className="w-full">
                    <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-md bg-muted/10 border border-border/10">
                      <Image
                        src={mentor.image}
                        alt={`Photo of ${mentor.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={95}
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-full flex-1 px-2">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {mentor.name}
                    </h3>
                    <p
                      className="text-base font-semibold mb-4"
                      style={{ color: "var(--primary)" }}
                    >
                      {mentor.title}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto">
                      {mentor.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
