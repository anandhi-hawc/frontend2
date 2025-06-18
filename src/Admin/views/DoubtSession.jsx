
import { useEffect, useState } from "react";
import axios from "axios";
import {
    DyteMeeting,
    DyteUiProvider
} from '@dytesdk/react-ui-kit';
import {
    useDyteClient,
    DyteProvider
} from '@dytesdk/react-web-core';



export default function DoubtSession() {
  const [dyteClient, setDyteClient] = useDyteClient();
  const [meeting, setMeeting] = useState(null);

  useEffect(() => {
    const initMeeting = async () => {
      const res = await axios.post("http://localhost:3000/api/doubt-session-join", {
        userId: "user",
      });
      console.log(res)
        setMeeting(res.data.meetingId);
      // const client = await setDyteClient.init(res.data.meeting.data);
       const client = await setDyteClient({
      authToken:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjQ5NTExYWM5LTViNWUtNGU1Yy05NjNmLWJmMWViMTZhOWZlNCIsIm1lZXRpbmdJZCI6ImJiYmFlNWFkLWE5NzUtNGNiOC05MjE1LWRiYmQwNTUxYTI1YSIsInBhcnRpY2lwYW50SWQiOiJhYWFiM2E3NS05NjU3LTRhODMtODA5Mi0xMDNhZDU4NTlhYmQiLCJwcmVzZXRJZCI6IjA2Y2FkMzAxLWZiMWYtNGI3OC05MjI2LWQ0NDliYjdkM2YxZSIsImlhdCI6MTc0OTU4Nzg4OSwiZXhwIjoxNzU4MjI3ODg5fQ.fz9Sm_nJWXt0sewjkUfvVhESr6gleK2R_Uk9XVaWADYLcdIbrcOgtwi7VLVHvGaYph4TYLGNOVBixj1mXdbOQv2yEG3NJsYBOJ8zU5tTrs3yDmAZBAKXupmMuINqAciEWPqMIlFQfl9LdxVBKnCk4KMMcbr8aGASn6w_e97mSY15lnPPNfomAaGCpkz048I5XVcMSTsGX_MlEqTE5uYfjEj6EWuNViw5W4aBV6zv5eqXT41eBZJykPcPU_VpVBILoBqMgNQ_4Xz6zM0bRn92OJRsUgn4__n3J5ewlOCJdxU2KY4smuLVHT1-9d9L_wWR5PYxheYaYmfWRe0NAm1uXw',
        meetingId: res.data.meeting.id,
        defaults: {
          audio: true,
          video: true
        }
      });
      setDyteClient(client);
      setMeeting(client);
    };

    initMeeting();
  }, []);

  if (!dyteClient) return <p>Loading...</p>;

  return (
    <DyteProvider value={meeting}>
      <DyteUiProvider>
        <div style={{ height: '100vh' }}>
        <DyteMeeting meeting={dyteClient} mode="fill" showSetupScreen />
        </div>
      </DyteUiProvider>
    </DyteProvider>
  );
}
