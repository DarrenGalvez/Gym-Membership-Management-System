// I'll replace with backend later
let sessions = [];

// DOM elements
const form = document.getElementById("sessionForm");
const output = document.getElementById("scheduleOutput");
const searchBtn = document.getElementById("searchBtn");

// Add Session
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const session = {
    sessionID: Number(document.getElementById("sessionID").value),
    memberName: document.getElementById("memberName").value,
    trainerName: document.getElementById("trainerName").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    workoutType: document.getElementById("workoutType").value
  };

  // Prevent duplicate ID
  const exists = sessions.some(s => s.sessionID === session.sessionID);

  if (exists) {
    alert("Session ID already exists!");
    return;
  }

  sessions.push(session);
  displaySessions(sessions);

  form.reset();
});

// Display Sessions
function displaySessions(data) {
  output.innerHTML = "";

  if (data.length === 0) {
    output.innerHTML = "<p>No sessions available</p>";
    return;
  }

  data.forEach(s => {
    const div = document.createElement("div");
    div.classList.add("session");

    div.innerHTML = `
      <strong>ID:</strong> ${s.sessionID}<br>
      <strong>Member:</strong> ${s.memberName}<br>
      <strong>Trainer:</strong> ${s.trainerName}<br>
      <strong>Date:</strong> ${s.date}<br>
      <strong>Time:</strong> ${s.time}<br>
      <strong>Workout:</strong> ${s.workoutType}
    `;

    output.appendChild(div);
  });
}

// Search
searchBtn.addEventListener("click", () => {
  const name = document.getElementById("searchName").value;

  const filtered = sessions.filter(
    s => s.memberName.toLowerCase() === name.toLowerCase()
  );

  displaySessions(filtered);
});