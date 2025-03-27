"use client";
import { useState, FormEvent } from "react";

interface Course {
  id: number;
  title: string;
  level: string;
  description: string;
  link: string;
}

interface CourseSearchProps {
  getSearchResults: (courses: Course[]) => void;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ getSearchResults }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses: Course[] = await res.json();
    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
