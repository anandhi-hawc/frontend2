import React, { useState } from "react";

function TimerPopup({ meeting }) {
  const [minutes, setMinutes] = useState("");
  const [showInput, setShowInput] = useState(false);

  const startTimer = () => {
    
    const delay = parseInt(minutes);
    alert(delay)
    if (isNaN(delay) || delay <= 0) return;

    setShowInput(false);

    setTimeout(() => {
    //   onTrigger(); // Trigger the popup after delay
    //    meeting.participants.broadcastMessage({
    //   type: "trigger_popup",
    // //   role: "teacher", // optional
    //   content: "Show doubt/quiz popup",
    // });
    //  if (meeting && meeting.participants?.broadcastMessage) {
    //     meeting.participants.broadcastMessage({
    //       type: "trigger_popup",
    //       content: "Show Doubt/Quiz",
    //     });
    //     alert("Notification sent to all participants!");
    //   } else {
    //     console.error("Meeting or broadcastMessage not available");
    //   }
//     if (meeting && meeting.participants?.broadcastMessage) {
//     meeting.participants.broadcastMessage("trigger_popup");
//     alert("Notification sent to all participants!");
//   }
    //   alert("see notofication");
    }, delay * 60 * 1000);
  };

  return (
    <div style={{ marginLeft: "79px" }}>
      <button
        onClick={() => setShowInput(!showInput)}
        style={{
          backgroundColor: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "6px 12px",
          marginLeft: "24%"
        }}
      >
        ⏱ Timer
      </button>

      {showInput && (
        <div style={{ marginTop: "8px" }}>
          <input
            type="number"
            placeholder="Minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            style={{ padding: "4px", width: "80px" }}
          />
          <button
            onClick={startTimer}
            style={{
              marginLeft: "8px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "4px 8px",
            }}
          >
            Start
          </button>
        </div>
      )}
    </div>
  );
}
export default TimerPopup;