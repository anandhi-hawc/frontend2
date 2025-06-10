import { DyteMeeting, DyteGrid , DyteParticipantsAudio } from '@dytesdk/react-ui-kit';
import { useDyteMeeting  , useDyteSelector} from '@dytesdk/react-web-core';
import { useEffect } from 'react';


export default  function MyMeeting() {
const { meeting } = useDyteMeeting();
const roomState = useDyteSelector((m)=>m.self.roomState)

useEffect(() => {
  meeting.self.on('roomLeft', () => {
    // handle navigation to other screen here after the user has left the room.
    alert("You've left the room");
  });
}, [meeting]);
return (
    <div>
<div className="controlbar flex w-full h-full">
     <DyteGrid meeting={meeting} /> 
     <DyteParticipantsAudio meeting={meeting} />

      <div style={{ height: '700px' }}>
      <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={true} />
      </div>
      {roomState === 'ended'? (<center>Custom post-meeting UI</center>): null}
    </div>
  </div>

);
}
