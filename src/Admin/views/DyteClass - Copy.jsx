import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import {
    DyteMeeting,
    DyteUiProvider
} from '@dytesdk/react-ui-kit';
import {
    useDyteClient,
    DyteProvider
} from '@dytesdk/react-web-core';
function DyteClass() {
    const location = useLocation();
    const [dyteClient, initDyteClient] = useDyteClient();
    const [meeting, setMeeting] = useState(null);
    const [mode, setMode] = useState("class");
    const [showOptions, setShowOptions] =useState(() => {
  const stored = localStorage.getItem("showOptions");
  return stored === "false" ? false : true; // default true
});;
    const [doubtMeeting, setDoubtMeeting] = useState(null);

    const [doubtLoading, setDoubtLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const course = location.state?.course;
        const fetchDyte = async () => {
            if (!course) return;

            try {
                setLoading(true);


                const res = await axios.post('http://localhost:3000/api/match-meeting-by-course', {
                    course_parent1: course.course_parent1,
                    course_parent2: course.course_parent2,
                    course_name: course.course_name
                });
                console.log("res  match", res);
                const meetingId = res.data.meetingId;
                // Join participant
                const joinRes = await axios.post('http://localhost:3000/api/join-meeting', {
                    meetingId,
                });
                const token = joinRes.data.token;
                // const getmeetingId = joinRes.data.meeting;
                console.log("token", token);
                const meetingInstance = await initDyteClient({
                         authToken:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjhkY2Y2ODQ0LTVjYjItNDc3NC1iZjM1LWU5OTU3MzkwMjNhYSIsIm1lZXRpbmdJZCI6ImJiYmMyMDJhLWQ5OGItNGVmNy04NGQ4LWQzYmUxYmE4N2E2NSIsInBhcnRpY2lwYW50SWQiOiJhYWEzMDdkZi1jOTdiLTQ1YWUtYjYwNS03ZGQ5ODdlMmIzODAiLCJwcmVzZXRJZCI6IjI3NWQ1ZGJhLTc5NzktNDlkZi1iM2Q0LTJmYjVjZDcwZTg2OSIsImlhdCI6MTc1MDc3MDg1OSwiZXhwIjoxNzU5NDEwODU5fQ.QWyV3HP2n9w9bOrh_ixUdApE_AKqZ3vXwKZ1Ys9mYlP-n9nFb5PCUfXXyiV7d54xMkyYyK2S_TuuoxWf6piZ2Jzlz8wYJilqLDpSV5cyXeXWW-f2fe_Cw400DkoR5VsdR7WDtA4570BnwNBQ5xcG81dBzWz-z3wipTTAKI_3w4tfrrpIxE65cKzsEIPH-ukcUIqTtZGm03WwqzoPTSCV1rm7aA5cuT2DL1h4D1j6M5vCjPvEqHpPqBv609sYtgDEwyuR5NNv5hYzph3Bl_PMVslZ47M4bIk4L6WD1IcVBm-RIz87wJpbzna8n3X2QdtEKCv34S8tnuBd-0pFTuRtLQ',
                    meetingId: 'bbbf4fea-f31a-41b6-b9b9-9a81991a891c',
                    // authToken: token,
                    // meetingId,
                    defaults: {
                        audio: false,
                        video: false
                    }
                });
                await meetingInstance.join();
                initDyteClient(meetingInstance);
                localStorage.setItem("token", token);
                localStorage.setItem("originalmeetingId", meetingId);
                localStorage.setItem("showOptions", "true");
                console.log("Meeting joined!");
                setMeeting(meetingInstance);
            }
            catch (error) {
                console.error('Error joining meeting:', error);
                alert('Failed to join meeting!');
            }
            finally { setLoading(false); }
        }

        //  if (token && meetingId) startMeeting();

        fetchDyte();
    }, [location.state]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("timer start");
            alert("time start")
            setShowOptions(true);
        }, 1 * 60 * 1000); // 2 minutes

        return () => clearTimeout(timer);
    }, []);
    const handleJoinDoubt = async () => {
       
        try {
           
           alert("this is join button");
            const res = await axios.post("http://localhost:3000/api/join-meeting", {
                meetingId: "bbb66ee1-5bf8-4949-ab09-f41871bddbbf",
                name:"doubt session"
            });

            const meetingId = res.data.meetingId;
            const token = res.data.token;
            console.log("doubt session", meetingId);

             const doubtMeetingInstance = await initDyteClient({
                    authToken: token,
                    meetingId: meetingId,
                    defaults: {
                        audio: false,
                        video: false
                    }
                });
 await doubtMeetingInstance.join();
      localStorage.getItem("showOptions", "true");
    setMeeting(false)
    setDoubtMeeting(doubtMeetingInstance);
   
    console.log("meetingInstance", doubtMeetingInstance);
    console.log("currentmeeting", doubtMeetingInstance);




     doubtMeetingInstance.self.on("roomLeft", async () => {
             console.log("handlejoin inside room");
              alert("Your Left doubt session, rejoining original...");
                 const getTokenItem = localStorage.getItem("token", token);
             const getMeetingIdItem = localStorage.getItem("originalmeetingId", meetingId);
            const originalMeetingInstance = await initDyteClient({
                // authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjhkY2Y2ODQ0LTVjYjItNDc3NC1iZjM1LWU5OTU3MzkwMjNhYSIsIm1lZXRpbmdJZCI6ImJiYmY0ZmVhLWYzMWEtNDFiNi1iOWI5LTlhODE5OTFhODkxYyIsInBhcnRpY2lwYW50SWQiOiJhYWFjOTFkMi0yZWU5LTRhMTQtOWVmYi1kMTFjYWNkOTkyMjQiLCJwcmVzZXRJZCI6IjI3NWQ1ZGJhLTc5NzktNDlkZi1iM2Q0LTJmYjVjZDcwZTg2OSIsImlhdCI6MTc1MDY3NzY5NiwiZXhwIjoxNzU5MzE3Njk2fQ.AMni3IwC78B-qdRvAyQg1qo-pGD6k6lFS2uadfaDk5b2re_4jqn9OmhfLUyNI4ZaS-NepWSgDyPAKGdga1mcr5rzEsNszu7qUxGvSQFevt6PzwgmT5EuHAOIeoxjmw1DR2UAHhjugknn9kYx59huj5SMo9A2JPa4y0gtvNbSG44jBnYbAjyYjrOywI1llEFuouI40wTQVMSpBfLDK_Tvc6WL8rXMVg80f0KN0ZAf2WIodDpcKncSfwtjw7eE-iBUl-_ckEPTz7zJNWUba0h8gxkx4t8s1kvX6Zpy5eRnvvyOU0MM7loMBX08pPfNLOomtPEGGiS3BMi0ydVDJKg7zw',
              authToken: getTokenItem,
                meetingId:getMeetingIdItem,
                defaults: {
                    audio: false,
                    video: false
                }
            });
await originalMeetingInstance.join();
            setDoubtLoading(false);
            setMeeting(originalMeetingInstance);
             });
        } catch (err) {
            console.error("Doubt session error:", err);
            alert("Could not join doubt meeting");
            setMode("class");
        } finally {
            setDoubtLoading(false);
            setShowOptions(false); // hide buttons after click
            setMode("class");

        }
    };

    return (
        <div className="dashboard-body">
            {loading && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
    <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }} />
    <div style={{ marginTop: "1rem", color: "#333" }}>Loading meeting...</div>
  </div>

            )}

            {!loading && meeting && mode === "class" && (
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



                </div>

            )}

            {
                showOptions && (

                    <div open={showOptions} className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-lg z-50">
                        <button
                            className="bg-primary text-black px-4 py-2 rounded mr-2"
                            onClick={handleJoinDoubt}
                        >
                            Doubt
                        </button>
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded"
                            onClick={() => alert("Show Quiz")}
                        >
                            Quiz
                        </button>
                    </div>
                )}

            {/* doubtMeeting && mode === "doubt" &&   {doubtLoading && <p className="text-white">Joining Doubt Session...</p>} */}

            {  doubtMeeting &&  !meeting &&
            initDyteClient.authToken!==""? (
                <div className="mt-8 border border-white rounded">
                    <DyteProvider value={doubtMeeting}>
                        <DyteUiProvider>
                            <DyteMeeting
                                meeting={doubtMeeting}
                                mode="fill"
                                style={{ height: "700px" }}
                                showSetupScreen={false}
                            />
                        </DyteUiProvider>
                    </DyteProvider>
                </div>
            ): <div>
                 null
                </div> 
                }

            {!loading && !meeting && (
                <div style={{ color: "red", textAlign: "center", paddingTop: "40px" }}>
                    <p>Could not load meeting.</p>
                </div>
            )}
        </div>
    );



}

export default DyteClass;
