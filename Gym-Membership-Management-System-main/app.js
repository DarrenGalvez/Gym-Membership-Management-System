const API = "http://localhost:3000/api/schedules";
const MEMBER_API = "http://localhost:3000/api/members";
const TRAINER_API = "http://localhost:3000/api/trainers";

const form = document.getElementById("sessionForm");
const output = document.getElementById("scheduleOutput");
const table = document.getElementById("resultsTable");
const tableBody = document.getElementById("resultsBody");

// --------------------
// INIT
// --------------------
window.onload = () => {
  loadSchedules();
};

// --------------------
// SUBMIT SCHEDULE
// --------------------
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    member_name: document.getElementById("memberName").value,
    trainer_name: document.getElementById("trainerName").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    workout_type: document.getElementById("workoutType").value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  form.reset();
  loadSchedules();
});

// --------------------
// LOAD ALL
// --------------------
async function loadSchedules() {
  const res = await fetch(API);
  const data = await res.json();

  // hide table when showing full cards
  table.style.display = "none";

  render(data);
}

// --------------------
// DELETE
// --------------------
async function deleteSchedule(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadSchedules();
}

// --------------------
// SEARCH
// --------------------
document.getElementById("searchBtn").addEventListener("click", async () => {
  const name = document.getElementById("searchName").value;

  if (!name) {
    table.style.display = "none";
    loadSchedules();
    return;
  }

  const res = await fetch(`${API}/search?name=${name}`);
  const data = await res.json();

  // Hide cards
  output.innerHTML = "";

  // Show table
  table.style.display = "table";

  tableBody.innerHTML = data.map(s => `
    <tr>
      <td>${s.member_name}</td>
      <td>${s.trainer_name || "N/A"}</td>
      <td>${s.date}</td>
      <td>${s.time}</td>
      <td>${s.workout_type}</td>
    </tr>
  `).join("");
});

// --------------------
// RENDER FUNCTION
// --------------------
function render(data) {
  output.innerHTML = data.map(s => `
    <div class="card">
      <h3>${s.member_name}</h3>

      <p><b>Trainer:</b> ${s.trainer_name || "N/A"}</p>

      <p><b>Date:</b> ${new Date(s.date).toLocaleDateString()}</p>
      <p><b>Time:</b> ${s.time}</p>
      <p><b>Workout:</b> ${s.workout_type}</p>
    </div>
  `).join("");
}