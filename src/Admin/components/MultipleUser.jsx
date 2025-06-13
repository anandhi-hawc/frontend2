// src/components/MeetingDetails.jsx
import { useState, useEffect } from 'react';
import { GetDyteMeeting } from '../../services/Api';

export default function MultipleUser({ meetingId }) {
  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMeetingDetails = async () => {
      try {
        const data = await GetDyteMeeting(meetingId);
        setMeeting(data.data); // Adjust based on your API response structure
        console.log(data.data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMeetingDetails();
  }, [meetingId]);

  if (loading) return <div>Loading meeting details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!meeting) return <div>No meeting found</div>;

  return (
    <div className="meeting-details">
      <h2>Meeting Details</h2>
      {/* <div className="detail-row">
        <strong>Title:</strong> {meeting.title}
      </div>
      <div className="detail-row">
        <strong>ID:</strong> {meeting.id}
      </div>
      <div className="detail-row">
        <strong>Room Name:</strong> {meeting.roomName}
      </div>
      <div className="detail-row">
        <strong>Status:</strong> {meeting.status}
      </div>
      <div className="detail-row">
        <strong>Created At:</strong> {new Date(meeting.createdAt).toLocaleString()}
      </div> */}
      {/* Add more details as needed */}
    </div>
  );
}
