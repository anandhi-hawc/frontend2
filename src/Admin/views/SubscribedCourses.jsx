import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function SubscribedCourses() {

 const [courses, setCourses] = useState(null);

  useEffect(() => {

    axios.get('http://lms.hawc.in/api/student/mycourses') // update with your endpoint
      .then(res => {
        setCourses(res.data.student_courses); // or res.data if shape is different
      })
      .catch(err => {
        console.error('Failed to fetch courses:', err);
      });
  }, []);

  if (!courses) return <p>Loading courses...</p>;


  return (
    <div>
      {courses.map(course => {
        const classId = course.course_parent1.replace('Class ', '');
        const board = course.course_parent2.toLowerCase();
        const subject = course.course_name.toLowerCase();

        return (
          <div key={course.course_id} className="course-card">
            <h3>{course.course_name} ({course.course_parent1} - {board.toUpperCase()})</h3>
            <Link to={`/class${classId}/${board}/${subject}`}>
              <button className="join-button">Join Video Call</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SubscribedCourses;
