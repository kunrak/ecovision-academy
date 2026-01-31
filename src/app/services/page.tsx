import Link from "next/link";
import { GraduationCap, FileText, Briefcase, Calendar } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Research & Career Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Holistic support for your academic and professional journey.
          </p>
        </div>

        <div className="space-y-20">
          {/* PhD Guidance */}
          <section
            id="phd-guidance"
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="bg-primary/10 p-4 rounded-xl">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  PhD Guidance & Research Support
                </h2>
                <p className="text-muted-foreground mb-6">
                  We provide structured and ethical research assistance to PhD
                  scholars, ensuring academic rigour and quality.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Research topic selection and refinement",
                    "Synopsis and proposal preparation",
                    "Research methodology design",
                    "Data analysis and interpretation",
                    "Thesis structuring and academic guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center text-sm font-medium text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Research Paper Support */}
          <section
            id="research-support"
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="bg-blue-100 p-4 rounded-xl">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Research Paper Writing & Publication
                </h2>
                <p className="text-muted-foreground mb-6">
                  Expert support for drafting and publishing high-impact
                  research papers. We strictly follow ethical practices and
                  originality standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Research paper drafting and structuring",
                    "Statistical and econometric analysis support",
                    "Journal selection guidance",
                    "Formatting as per journal requirements",
                    "Manuscript review and revision support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center text-sm font-medium text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Career Guidance */}
          <section
            id="career-counselling"
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="bg-purple-100 p-4 rounded-xl">
                <Briefcase className="h-10 w-10 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Career Guidance & Counselling
                </h2>
                <p className="text-muted-foreground mb-6">
                  Personalized mentoring for careers in Data Science, Analytics,
                  Research, and Academia.
                </p>
                <ul className="space-y-3">
                  {[
                    "One-to-one career counselling",
                    "Academic and industry project mentoring",
                    "Skill-based career planning and roadmap development",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-foreground font-medium"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2.5"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-secondary rounded-2xl p-8 md:p-12 text-white">
            <Calendar className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              Book a Consultation
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Schedule a one-to-one session with our experts for course
              selection, career counselling, or research support discussion.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary hover:bg-teal-600 text-white font-bold rounded-lg transition-colors"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
