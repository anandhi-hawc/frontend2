import { useState , useEffect } from 'react';
import axios from 'axios';
// import DyteMeetingRoom from '../views/DyteMeetingRoom';
// import { DyteProvider } from "@dytesdk/react-ui-kit";
import { DyteMeeting  } from '@dytesdk/react-ui-kit';
import { useDyteClient }     from '@dytesdk/react-web-core';
const ClassMeeting = ({ token, meetingId }) => {
    const [dyteClient, initDyteClient] = useDyteClient();

  const [meeting, setMeeting] = useState(null);
  const [participant, setParticipant] = useState(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (token && meetingId) {
      initDyteClient({ authToken: token, meetingId });
    }
  }, [token, meetingId]);

//   if (!dyteClient && !meetingId) {
//     return <p>Initializing Dyte client...</p>;
//   }
  const createMeeting = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/create-meeting', {
        title: 'My First Dyte Meeting'
      });
      console.log("sucess data",response.data)
      setMeeting(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error creating meeting:', error);
      setLoading(false);
    }
  };
 const joinMeeting = async () => {
    if (!name) return;
    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:3000/api/join-meeting',
        { name,
        meetingId: response.data.id 
        }, // optional, if your backend accepts a name
        { withCredentials: true }
      );
   console.log('Full response:',res)
    

 const joinLink = res.data.token;
      console.log(res.data)
        console.log('Full response:', res);
console.log('res.data:', res.data);
console.log('Join Link:', res.data?.joinLink);
    //   const meetingUrl = res.data.data.meetingUrl || res.data.meeting_url;
      if (joinLink) {
      window.open(joinLink, '_blank');
       <div style={{ height: '800px' }}>
      <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={true} />
      </div>
    } else {
      alert('Join link not found');
    }
  
    } catch (error) {
      console.error(error);
      alert('Failed to join meeting');
    } finally {
      setLoading(false);
    }
}
 
  return (
    <div>
      <h1>Dyte Meeting Demo</h1>
       
     {/* <div style={{ height: '800px' }}>
      <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={true} />
      </div> */}
 
    
      {/* <DyteMeeting meeting={meeting}  /> */}
      {!meeting ? (
        <button onClick={createMeeting} disabled={loading} className='btn btn-primary'>
          {loading ? 'Creating...' : 'Create Meeting'}
        </button>
      ) : (
        <div>
          <p>Meeting ID: {meeting.id}</p>
          <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={true} /> 
           {/* <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={true} /> */}
           {/* <DyteMeeting meeting={meeting} /> */}
          {/* <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <button onClick={joinMeeting} disabled={loading || !name}>
            {loading ? 'Joining...' : 'Join Meeting'}
          </button> */}
        </div>
      )}
      
      <div id="dyte-meeting" >
        {/* <DyteMeetingRoom/> */}
         {/* <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={true} /> */}
      </div>
    </div>
  );
};

export default ClassMeeting;