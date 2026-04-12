import localCourses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/notion";

export const revalidate = 60;

export default async function CoursesPage() {
  const notionCourses = await getCourses();
  
  const displayCourses = notionCourses.length > 0 ? notionCourses : localCourses;

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Our Courses & Training Programs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive courses designed to take you from foundational
            concepts to advanced industry applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
