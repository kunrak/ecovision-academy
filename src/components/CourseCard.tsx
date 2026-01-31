import Link from "next/link";
import { Clock, BarChart } from "lucide-react";

interface CourseProps {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
}

export default function CourseCard({ course }: { course: CourseProps }) {
  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="h-2 bg-gradient-to-r from-primary to-accent" />
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
          href={`/courses?id=${course.id}`} // Simple anchor or detail view logic
          className="w-full block text-center py-2.5 px-4 bg-secondary text-white rounded-lg font-medium hover:bg-primary transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
