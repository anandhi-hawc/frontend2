import React, { useEffect } from 'react';
import {  DyteMeeting, DyteUiProvider } from '@dytesdk/react-ui-kit';
import { useDyteClient ,  DyteProvider } from '@dytesdk/react-web-core';
import axios from 'axios';
import MyMeeting from '../views/MyMeeting';

export default function ClassMeeting() {
   
  /* ------- local state ------- */
  const [meetingId, setMeetingId] = React.useState('');
  const [token, setToken]       = React.useState('');
  const [loading, setLoading]   = React.useState(false);
const [participantName, setParticipantName] = React.useState('');

  /* ------- Dyte hook (ALWAYS keep at top level) ------- */
  const [dyteClient, initDyteClient] = useDyteClient();
 
  /* ------- create or fetch meeting -------- */
  const handleCreateMeeting = async () => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:3000/api/create-meeting',
                                   { title: 'Class 10 CBSE Maths' });
      setMeetingId(res.data.id);           // only store the UUID
    } finally { setLoading(false); }
  };

  /* ------- join meeting (adds participant) ------- */
  const handleJoinMeeting = async (name) => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:3000/api/join-meeting',
                                   { meetingId, name });
      setToken(res.data.token);            // store JWT
       setParticipantName(name); 
      console.log(res.data)
    } finally { setLoading(false); }
  };

  /* ------- once we have BOTH values, initialise Dyte ------- */
  useEffect(() => {
     if (dyteClient) {
    console.log("Dyte Client Status:", dyteClient.self);
  }
    if (token && meetingId) {
      initDyteClient({
         authToken: token,
         defaults: {
        audio: true,
        video: true,
      },
         meetingId
         });
    }
    console.log(token)
      console.log(meetingId)
  }, [token, meetingId, initDyteClient]);
//   if (!dyteClient || !dyteClient.self) return <p>Loading meeting...</p>;

  /* ------- UI ------- */
  if (dyteClient) {
    /* We’re inside the meeting */
    return (
        // <MyMeeting/>
      <DyteProvider value={dyteClient}>
        <p>Welcome, {participantName}</p>

        <div style={{ height: '700px' }}>
      <DyteMeeting mode="fill" meeting={dyteClient} showSetupScreen={true} />
      </div>
      </DyteProvider>
    );
  }

  /* Lobby / pre-meeting flow */
  return (
    <div style={{ padding: 24 }}>
      <h2>Dyte Demo</h2>

      {!meetingId ? (
        <button onClick={handleCreateMeeting} disabled={loading}>
          {loading ? 'Creating…' : 'Create Meeting'}
        </button>
      ) : !token ? (
        <>
          <p>Meeting ID: {meetingId}</p>
          <input
            placeholder="Your name"
            onKeyDown={e => e.key === 'Enter' && handleJoinMeeting(e.target.value)}
          />
          <button onClick={() => handleJoinMeeting('Guest')} disabled={loading}>
            {loading ? 'Joining…' : 'Join'}
          </button>
        </>
      ) : (
        <p>Loading Dyte…</p>  // shows briefly while client initialises
      )}
    </div>
  );
}
