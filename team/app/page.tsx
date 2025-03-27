"use client";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

interface Course {
  id: number;
  title: string;
  level: string;
  description: string;
  link: string;
}

const HomePage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data: Course[] = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To Traversy Media</h1>
      <CourseSearch
        getSearchResults={(results: Course[]) => setCourses(results)}
      />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
