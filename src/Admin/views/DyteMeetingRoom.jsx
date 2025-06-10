import { useEffect } from 'react';
import { useDyteClient,DyteProvider } from '@dytesdk/react-web-core';

// import { DyteMeeting } from '@dytesdk/react-ui-kit'; // ✅ UI component

import MyMeeting from './MyMeeting';
function DyteMeetingRoom() {
  const [meeting, initMeeting] = useDyteClient();
  
  useEffect(() => {
    initMeeting({      
      authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjhkY2Y2ODQ0LTVjYjItNDc3NC1iZjM1LWU5OTU3MzkwMjNhYSIsIm1lZXRpbmdJZCI6ImJiYmZiMGE1LTYwYTgtNGZiMi1iMTliLWMxMjJlY2Q3ZTgzYSIsInBhcnRpY2lwYW50SWQiOiJhYWFjNzgxOC1jZjEyLTRmMmYtYWY4YS05MTU1YWE4ZmE3NzIiLCJwcmVzZXRJZCI6ImRkMzgyZDE5LTYxMjMtNDJhYy04ZDFmLTc1ODI3MjhkYzk5NyIsImlhdCI6MTc0OTUzMjQwMiwiZXhwIjoxNzU4MTcyNDAyfQ.HiTq31eP2ABsVKtlhLjgTc7cf9d_FSCeP9BlQVC2rZrCO1NwfXkGoxNYfcVOGp5Uc-2PhaJFxFH0RnwF-qJr7juJXhG8OUth9L-IJrnVgt_DY6jxIebpcOsZQJ2pvvBgaQu2V8UYpCAieYbaA4EXoKvXIeUNwxm0JsVgEgAmeZj0JL7RwAY_dKznAQBNkPwMPMW1rJjBuEHlfNfWHZHUNw06J8_3c87NSNbIKQlcPmiLYql7CY0dnb-FqlvEKAFWoO2IeuqkBOFMUEA4sGQd3IJNa9_PIq3l-ujrFvE8ZcnSCAOz7isufqfwvLija5EI-Z0XbDMoo7JRlAVYpMcUpw',
      defaults: {
        audio: false,
        video: false,
      },
    });

  }, []);

  return (
    <div className="App">
   {
      initMeeting.authToken!==""?( 
      <DyteProvider value={meeting}>
      <MyMeeting/> 
      </DyteProvider>
      ):<h1>Home page</h1>
    }
    </div>
  );
}

export default DyteMeetingRoom;
