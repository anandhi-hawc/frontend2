import React, { useEffect, useState } from 'react';
import {
    useDyteClient,
    DyteProvider
} from '@dytesdk/react-web-core';
import {
    DyteMeeting,
    DyteUiProvider,
} from '@dytesdk/react-ui-kit';
const BroadcastExample = () => {
  const { meeting } = useDyteClient();
   const [dyteClient, initDyteClient] = useDyteClient();
  const [isReady, setIsReady] = useState(false);


  // Wait until meeting is initialized
  useEffect(() => {
    alert("hello")
    const dyteMeeting =  initDyteClient({
   authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjhkY2Y2ODQ0LTVjYjItNDc3NC1iZjM1LWU5OTU3MzkwMjNhYSIsIm1lZXRpbmdJZCI6ImJiYmMyMDJhLWQ5OGItNGVmNy04NGQ4LWQzYmUxYmE4N2E2NSIsInBhcnRpY2lwYW50SWQiOiJhYWEzMDdkZi1jOTdiLTQ1YWUtYjYwNS03ZGQ5ODdlMmIzODAiLCJwcmVzZXRJZCI6IjI3NWQ1ZGJhLTc5NzktNDlkZi1iM2Q0LTJmYjVjZDcwZTg2OSIsImlhdCI6MTc1MDc3MDg1OSwiZXhwIjoxNzU5NDEwODU5fQ.QWyV3HP2n9w9bOrh_ixUdApE_AKqZ3vXwKZ1Ys9mYlP-n9nFb5PCUfXXyiV7d54xMkyYyK2S_TuuoxWf6piZ2Jzlz8wYJilqLDpSV5cyXeXWW-f2fe_Cw400DkoR5VsdR7WDtA4570BnwNBQ5xcG81dBzWz-z3wipTTAKI_3w4tfrrpIxE65cKzsEIPH-ukcUIqTtZGm03WwqzoPTSCV1rm7aA5cuT2DL1h4D1j6M5vCjPvEqHpPqBv609sYtgDEwyuR5NNv5hYzph3Bl_PMVslZ47M4bIk4L6WD1IcVBm-RIz87wJpbzna8n3X2QdtEKCv34S8tnuBd-0pFTuRtLQ',
     meetingId: 'bbbf4fea-f31a-41b6-b9b9-9a81991a891c',       
});
console.log(dyteMeeting)
    if (meeting && dyteMeeting.participants) {
      setIsReady(true);
    }
  }, [meeting]);

  const broadcastToAll = () => {
    if (!isReady) {
      alert('Meeting is not ready yet!');
      return;
    }

    meeting.participants.broadcastMessage({
      eventName: 'custom-event',
      payload: { message: '📢 Hello from broadcast!' },
    });
  };

  useEffect(() => {
    if (!isReady) return;

    const handleBroadcast = (event) => {
      const { eventName, payload } = event;
      if (eventName === 'custom-event') {
        alert(`Broadcast Received: ${payload.message}`);
      }
    };

    meeting.participants.addListener('broadcast', handleBroadcast);

    return () => {
      meeting.participants.removeListener('broadcast', handleBroadcast);
    };
  }, [isReady, DyteMeeting]);

  return (
    <div>
      <button onClick={broadcastToAll} disabled={!isReady}>
        Send Broadcast
      </button>
      { meeting && (
                <div
                    style={{
                        height: '100vh',
                        background: '#000',
                        zIndex: 1000,
                        position: 'relative',
                    }}
                >
                    <DyteProvider value={meeting}>
                        <DyteUiProvider>
                            <DyteMeeting mode="fill" meeting={dyteClient} showSetupScreen />
                        </DyteUiProvider>
                    </DyteProvider>
                 <TimerPopup onTrigger={() => setShowOptions(true)}  meeting={meeting} />
                </div>

            )}
    </div>
  );
};

export default BroadcastExample;
