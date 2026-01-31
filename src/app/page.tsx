import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-[#1e293b] to-background text-white pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Master Data Science & <br />
              <span className="text-primary-foreground">
                Research Excellence
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
              Ecovision Academy is your gateway to a successful career in
              Analytics, Data Science, and Research. Practical learning,
              real-world projects, and personalized mentorship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/courses"
                className="px-8 py-3.5 rounded-full bg-primary hover:bg-teal-600 text-white font-semibold transition-all shadow-lg shadow-teal-900/20 flex items-center justify-center"
              >
                Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 font-semibold transition-all flex items-center justify-center"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Highlight */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-secondary aspect-video lg:aspect-square flex items-center justify-center">
              {/* Placeholder for About Image - could be a generated image later */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/80 mix-blend-multiply"></div>
              <h3 className="relative z-10 text-3xl font-heading font-bold text-white/90 text-center px-4">
                Empowering <br />
                Future Leaders
              </h3>
            </div>

            <div>
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Career-Oriented Training & Research Support
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Ecovision Academy is dedicated to building strong foundations in
                Data Science, Statistics, Analytics, and Research Methodologies.
                We focus on practical learning and personalized mentorship to
                help students and professionals achieve excellence.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Hands-on Training",
                  "Project-Based Learning",
                  "Real World Datasets",
                  "One-to-One Guidance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-foreground font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="text-primary font-semibold hover:text-teal-700 inline-flex items-center"
              >
                Learn more about us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Our Courses
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2">
              Popular Training Programs
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              Designed from basic to advanced levels, focusing on practical
              exposure and industry readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white font-medium transition-all"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Schedule a one-to-one consultation with our experts for course
            selection guidance and customized learning plans.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
