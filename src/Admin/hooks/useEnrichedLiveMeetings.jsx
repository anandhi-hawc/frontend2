import { useEffect, useState } from 'react';
import axios from 'axios';
import { GetCourses, LiveMeetingClass } from '../../services/Api';

const useEnrichedLiveMeetings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [coursesRes, meetingsRes, liveClassesRes] = await Promise.all([
          GetCourses(),     // your course list
          axios.get('http://localhost:3000/api/latest-meeting'),      // dyte meeting list
             LiveMeetingClass() // live classes with meeting_id
         
          
        ]);

        // const courses =  Array.isArray(coursesRes?.data) ? coursesRes.data: [];
   const courses = coursesRes?.data?.data?.boardClassCourses || [];
        console.log('coures',courses);
      
        const meetings = [meetingsRes?.data] || [];
          console.log('meeting' ,meetings)


        const liveClasses = liveClassesRes.data?.data?.liveClasses ?? [];

        const enriched = liveClasses.map(live => {
          // const meeting = meetings.find(m => m.id === live.meeting_id);
          const meeting = Array.isArray(meetings) ? meetings.find(m => m.id === live.meeting_id) : null;
        
if (!Array.isArray(meetings)) {
  console.error("meetings is not an array", meetings);
  return; // or return default value
}


          // let className = null, board = null, subject = null;
          // if (meeting?.title) {
          //   const parts = meeting.title.split(' ');
          //   className = `Class ${parts[1]}`;
          //   board = parts[2];
          //   subject = parts.slice(3).join(' ');
          // }
          let className = null, board = null, subject = null;

if (typeof meetingsRes.data?.title === 'string') {
  const parts = meetingsRes.data.title.trim().split(' '); // Trim and split

  if (parts.length >= 4 && parts[0].toLowerCase() === 'class') {
    className = `Class ${parts[1]}`;
    board = parts[2];
    subject = parts.slice(3).join(' ');
  }
}

//           const matchedCourse = courses.find(course =>
//   course.course_name.trim().toLowerCase() === className?.toLowerCase() &&
//   course.course_parent2.trim().toLowerCase() === board?.toLowerCase() &&
//   course.course_parent1.trim().toLowerCase() === subject?.toLowerCase()
// );

console.log("meeting title:", meetingsRes.data.title);
console.log("Parsed =>", { className, board, subject });
// console.log("Matched course =>", matchedCourse);
console.log("FULL MEETING OBJECT:", meetingsRes);

          return {
            topic: live.topic_short_name,
             longtopic: live.topic_long_name,
             desc: live.description,
             staffid: live.staff_user_id,
             duration: live.duration,
             meetingid: meetingsRes.data.meetingId,

            class:className,
            board: board ,
            subject: subject,
            dyte_meeting_id: meetingsRes.data.meetingId,
            token: live.token?.[0] || null,
          //  course_id: live.course_id,
            meeting_title: meetingsRes.data.title,
            start_date: live.start_date,
            end_date: live.end_date,
          };
        });

        setData(enriched);
        console.log(enriched)
      } catch (err) {
        console.error("Failed to load meeting data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return { data, loading };
 
};

export default useEnrichedLiveMeetings;
