"use client";

import { useState } from "react";
import { Copy, PlusCircle } from "lucide-react";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "Data Science",
    description: "",
    duration: "",
    level: "Beginner",
  });

  const [generatedJson, setGeneratedJson] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateId = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse = {
      ...formData,
      id: formData.id || generateId(formData.title),
    };
    setGeneratedJson(JSON.stringify(newCourse, null, 2) + ",");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJson);
    alert("Copied to clipboard! Now paste this into src/data/courses.json");
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-heading font-bold text-foreground">
            Course Admin
          </h1>
          <p className="text-muted-foreground">
            Add new course details here. Since this is a static site, this tool
            generates the code for you to add to the database file.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
          <div className="p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <PlusCircle className="mr-2 h-5 w-5 text-primary" />
              New Course Details
            </h2>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Course Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    placeholder="e.g. Advanced Python for AI"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option>Data Science</option>
                    <option>Analytics</option>
                    <option>Research</option>
                    <option>Statistics</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Level
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Research</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    required
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    placeholder="e.g. 6 Weeks"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Brief summary of the course..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-teal-600 transition-colors"
              >
                Generate Course Data
              </button>
            </form>
          </div>

          {generatedJson && (
            <div className="bg-slate-900 p-6 border-t border-slate-700">
              <div className="flex justify-between items-center mb-2 text-slate-300">
                <span className="text-sm font-mono">JSON Output</span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center text-xs hover:text-white transition-colors"
                >
                  <Copy className="h-3 w-3 mr-1" /> Copy Code
                </button>
              </div>
              <pre className="bg-black/50 p-4 rounded text-sm text-green-400 font-mono overflow-x-auto">
                {generatedJson}
              </pre>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-200 text-sm">
                <strong>Next Step:</strong> Open{" "}
                <code>src/data/courses.json</code> and paste this object into
                the array. Rebuild/Refresh to see changes.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
