// import { useEffect, useState } from 'react';
// import axios from 'axios';


// export default function DyteJoin() {
//   const [meetingId, setMeetingId] = useState(null);

//   useEffect(() => {
//     const fetchMeetingId = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/api/latest-meeting');
//         setMeetingId(res.data.meetingId);
//         // setTitle(res.data.title);
//         console.log(res.data)
//       } catch (err) {
//         console.error('Error fetching meetingId:', err);
//       }
//     };

//     fetchMeetingId();
//   }, []);

//   return (
//     <div>
//       <h1>Join Dyte Meeting</h1>
//       {meetingId ? (
//         <DyteJoin meetingId={meetingId} />
//       ) : (
//         <p>Loading meeting ID...</p>
//       )}
//     </div>
//   );
// }




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

const DyteJoin = () => {
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

  return (
    <div>
      <h2>Dyte Video Call Demo</h2>

      {loading && <p>Loading meeting...</p>}

      {!loading && !meeting && meetingId && (
        <button
          onClick={handleJoinMeeting}
          className="btn btn-primary"
        >
          Join Meeting
        </button>
      )}

      {meeting && (
        <DyteProvider value={meeting}>
          <DyteUiProvider>
            <div style={{ height: '80vh' }}>
              <DyteMeeting mode="fill" meeting={dyteClient} showSetupScreen />
            </div>
          </DyteUiProvider>
        </DyteProvider>
      )}
    </div>
  );
};

export default DyteJoin;
