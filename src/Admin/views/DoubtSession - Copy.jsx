
import { captureOwnerStack, useEffect, useState } from "react";
import axios from "axios";
import {
    DyteMeeting,
    DyteUiProvider
} from '@dytesdk/react-ui-kit';
import {
    useDyteClient,
    DyteProvider
} from '@dytesdk/react-web-core';



export default function DoubtSession({ setIsInDoubtSession, rejoinOriginal }) {
  const [dyteClient, setDyteClient] = useDyteClient();
  const [meeting, setMeeting] = useState(null);
    const [participants, setParticipants] = useState([]);
// const gettoken =localStorage.getItem("token", token)
// console.log(gettoken)
  useEffect(() => {
    const initMeeting = async () => {
      const res = await axios.post("http://localhost:3000/api/join-meeting", {
        meetingId: "bbb66ee1-5bf8-4949-ab09-f41871bddbbf",
      });
      console.log(res)
        setMeeting(res.data.meetingId);
      // const client = await setDyteClient.init(res.data.meeting.data);
       const client = await setDyteClient({
      authToken:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjQ5NTExYWM5LTViNWUtNGU1Yy05NjNmLWJmMWViMTZhOWZlNCIsIm1lZXRpbmdJZCI6ImJiYmFlNWFkLWE5NzUtNGNiOC05MjE1LWRiYmQwNTUxYTI1YSIsInBhcnRpY2lwYW50SWQiOiJhYWFiM2E3NS05NjU3LTRhODMtODA5Mi0xMDNhZDU4NTlhYmQiLCJwcmVzZXRJZCI6IjA2Y2FkMzAxLWZiMWYtNGI3OC05MjI2LWQ0NDliYjdkM2YxZSIsImlhdCI6MTc0OTU4Nzg4OSwiZXhwIjoxNzU4MjI3ODg5fQ.fz9Sm_nJWXt0sewjkUfvVhESr6gleK2R_Uk9XVaWADYLcdIbrcOgtwi7VLVHvGaYph4TYLGNOVBixj1mXdbOQv2yEG3NJsYBOJ8zU5tTrs3yDmAZBAKXupmMuINqAciEWPqMIlFQfl9LdxVBKnCk4KMMcbr8aGASn6w_e97mSY15lnPPNfomAaGCpkz048I5XVcMSTsGX_MlEqTE5uYfjEj6EWuNViw5W4aBV6zv5eqXT41eBZJykPcPU_VpVBILoBqMgNQ_4Xz6zM0bRn92OJRsUgn4__n3J5ewlOCJdxU2KY4smuLVHT1-9d9L_wWR5PYxheYaYmfWRe0NAm1uXw',
        // meetingId: res.data.meeting.id,
         meetingId: "bbb66ee1-5bf8-4949-ab09-f41871bddbbf",
        defaults: {
          audio: true,
          video: true
        }
      });
       const roomavailable = client.join(client)
      setDyteClient(roomavailable);
      setMeeting(client);

      client.self.on("roomLeft", async () => {
            console.log("Left doubt session, rejoining original...");
        alert("Your Left doubt session, rejoining original...")
            const originalMeetingInstance = await setDyteClient({
                // authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjhkY2Y2ODQ0LTVjYjItNDc3NC1iZjM1LWU5OTU3MzkwMjNhYSIsIm1lZXRpbmdJZCI6ImJiYmY0ZmVhLWYzMWEtNDFiNi1iOWI5LTlhODE5OTFhODkxYyIsInBhcnRpY2lwYW50SWQiOiJhYWFjOTFkMi0yZWU5LTRhMTQtOWVmYi1kMTFjYWNkOTkyMjQiLCJwcmVzZXRJZCI6IjI3NWQ1ZGJhLTc5NzktNDlkZi1iM2Q0LTJmYjVjZDcwZTg2OSIsImlhdCI6MTc1MDY3NzY5NiwiZXhwIjoxNzU5MzE3Njk2fQ.AMni3IwC78B-qdRvAyQg1qo-pGD6k6lFS2uadfaDk5b2re_4jqn9OmhfLUyNI4ZaS-NepWSgDyPAKGdga1mcr5rzEsNszu7qUxGvSQFevt6PzwgmT5EuHAOIeoxjmw1DR2UAHhjugknn9kYx59huj5SMo9A2JPa4y0gtvNbSG44jBnYbAjyYjrOywI1llEFuouI40wTQVMSpBfLDK_Tvc6WL8rXMVg80f0KN0ZAf2WIodDpcKncSfwtjw7eE-iBUl-_ckEPTz7zJNWUba0h8gxkx4t8s1kvX6Zpy5eRnvvyOU0MM7loMBX08pPfNLOomtPEGGiS3BMi0ydVDJKg7zw',
              authToken:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjhkY2Y2ODQ0LTVjYjItNDc3NC1iZjM1LWU5OTU3MzkwMjNhYSIsIm1lZXRpbmdJZCI6ImJiYmMyMDJhLWQ5OGItNGVmNy04NGQ4LWQzYmUxYmE4N2E2NSIsInBhcnRpY2lwYW50SWQiOiJhYWEzMDdkZi1jOTdiLTQ1YWUtYjYwNS03ZGQ5ODdlMmIzODAiLCJwcmVzZXRJZCI6IjI3NWQ1ZGJhLTc5NzktNDlkZi1iM2Q0LTJmYjVjZDcwZTg2OSIsImlhdCI6MTc1MDc3MDg1OSwiZXhwIjoxNzU5NDEwODU5fQ.QWyV3HP2n9w9bOrh_ixUdApE_AKqZ3vXwKZ1Ys9mYlP-n9nFb5PCUfXXyiV7d54xMkyYyK2S_TuuoxWf6piZ2Jzlz8wYJilqLDpSV5cyXeXWW-f2fe_Cw400DkoR5VsdR7WDtA4570BnwNBQ5xcG81dBzWz-z3wipTTAKI_3w4tfrrpIxE65cKzsEIPH-ukcUIqTtZGm03WwqzoPTSCV1rm7aA5cuT2DL1h4D1j6M5vCjPvEqHpPqBv609sYtgDEwyuR5NNv5hYzph3Bl_PMVslZ47M4bIk4L6WD1IcVBm-RIz87wJpbzna8n3X2QdtEKCv34S8tnuBd-0pFTuRtLQ',
                meetingId: 'bbbf4fea-f31a-41b6-b9b9-9a81991a891c',
                defaults: {
                    audio: false,
                    video: false
                }
            });

            // const originalmeeting = originalMeetingInstance.join(originalMeetingInstance);

// Set participants when they join
        // originalmeeting.on('participant-joined', (participants) => {
        //   setMeeting((prev) => [...prev, participants]);
        // });
            setMeeting(originalMeetingInstance);
            // setToken(originalMeetingInstance.authToken);
            //  rejoinOriginal();
        });
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
