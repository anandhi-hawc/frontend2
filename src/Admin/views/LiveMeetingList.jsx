import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  DyteMeeting,
  DyteUiProvider
} from '@dytesdk/react-ui-kit';
import {
  useDyteClient,
  DyteProvider
} from '@dytesdk/react-web-core';
import useEnrichedLiveMeetings from '../hooks/useEnrichedLiveMeetings';

const LiveMeetingList = () => {

  const { data, pgloading } = useEnrichedLiveMeetings();
    const [meetingId, setMeetingId] = useState(null);
    const [token, setToken] = useState(null);
    const [meeting, setMeeting] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dyteClient, initDyteClient] = useDyteClient();

  // Fetch latest meeting from backend
  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/latest-meeting');
        console.log('Fetched meeting:', res.data);
        setMeetingId(res.data.meetingId);
      } catch (error) {
        console.error('Failed to fetch meeting:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeeting();
  }, []);

 // Join meeting
  const handleJoinMeeting = async () => {
    if (!meetingId) return;

    try {
      setLoading(true);

      const res = await axios.post('http://localhost:3000/api/join-meeting', {
        meetingId,
        name: 'Guest'
      });

      const token = res.data.token;
      setToken(token);

      const meetingInstance = await initDyteClient({
        authToken: token,
        meetingId,
        defaults: {
          audio: true,
          video: true
        }
      });

      setMeeting(meetingInstance);
    } catch (error) {
      console.error('Error joining meeting:', error);
    } finally {
      setLoading(false);
    }
  };
  if (pgloading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Live Meetings</h1>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <div><strong>Topic:</strong> {item.topic}</div>
            
             <div><strong>meetingid:</strong> {item.meetingid}</div>
              <div><strong>long_name:</strong> {item.longtopic}</div>
               <div><strong>desc:</strong> {item.desc}</div>
            
            <div><strong>staff_user_id:</strong> {item.staffid}</div>
            <div><strong>Class:</strong> {item.class}</div>
            <div><strong>Board:</strong> {item.board}</div>
            <div><strong>Subject:</strong> {item.subject}</div>
            <div><strong>Meeting Title:</strong> {item.meeting_title}</div>
            <div><strong>Start:</strong> {item.start_date}</div>
            <div><strong>End:</strong> {item.end_date}</div>
            <div><strong>duration:</strong> {item.duration}</div>
              <div><strong>token:</strong> {item.token}</div>
               <div><strong>dyte_meeting_id:</strong> {item.dyte_meeting_id}</div>
              
            <div><strong>Course ID:</strong> {item.course_id || '❌ Not matched'}</div>
            {item.token ? (
              // <a
              //   href={`http://localhost:5173/${item.dyte_meeting_id}?authToken=${item.token}`}
              //   className="text-blue-600 underline mt-2 inline-block"
              //   target="_blank"
              // >
              //   Join Meeting
              // </a>
                <button
          onClick={handleJoinMeeting}
          className="btn btn-primary"
        >
          Join Meeting
        </button>
            ) : (
              <div className="text-red-500">No token available</div>
            )}

             {meeting && (
        <DyteProvider value={meeting}>
          <DyteUiProvider>
            <div style={{ height: '100vh' }}>
              <DyteMeeting mode="fill" meeting={dyteClient} showSetupScreen />
            </div>
          </DyteUiProvider>
        </DyteProvider>
      )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveMeetingList;
