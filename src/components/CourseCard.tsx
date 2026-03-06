import Link from "next/link";
import Image from "next/image";
import { Clock, BarChart } from "lucide-react";

interface CourseProps {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  image?: string | null;
}

const categoryGradients: Record<string, string> = {
  "Data Science": "from-blue-600 via-indigo-500 to-violet-600",
  "Analytics": "from-emerald-500 via-teal-500 to-cyan-600",
  "Research": "from-amber-500 via-orange-500 to-rose-500",
};

const categoryIcons: Record<string, string> = {
  "Data Science": "🧠",
  "Analytics": "📊",
  "Research": "🔬",
};

export default function CourseCard({ course }: { course: CourseProps }) {
  const gradient = categoryGradients[course.category] ?? "from-primary to-accent";
  const icon = categoryIcons[course.category] ?? "📚";

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imageSrc = course.image ? `${basePath}${course.image}` : null;

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Course Image / Fallback Banner */}
      <div className="relative w-full h-56 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={course.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
          </div>
        )}
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-primary bg-primary/10 rounded-full">
            {course.category}
          </span>
          <span className="inline-block px-2 py-1 text-xs font-medium text-muted-foreground border border-border rounded">
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
          {course.description}
        </p>

        <div className="flex items-center text-sm text-slate-500 mb-6 space-x-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5" />
            {course.duration}
          </div>
        </div>

        <Link
          href={`/courses?id=${course.id}`}
          className="w-full block text-center py-2.5 px-4 bg-secondary text-white rounded-lg font-medium hover:bg-primary transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
