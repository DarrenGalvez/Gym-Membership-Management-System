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

  try {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    form.reset();
    loadSchedules();
  } catch (error) {
    console.error("Error submitting schedule:", error);
    alert("Failed to add session. Check if backend is running.");
  }
});

// --------------------
// LOAD ALL
// --------------------
async function loadSchedules() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("Failed to fetch schedules");
    
    const data = await res.json();

    // hide table when showing full cards
    table.style.display = "none";

    render(data);
  } catch (error) {
    console.error("Error loading schedules:", error);
    output.innerHTML = "<p style='color:red;'>Error loading schedules. Ensure backend is running on http://localhost:3000</p>";
  }
}

// --------------------
// DELETE
// --------------------
async function deleteSchedule(id) {
  try {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadSchedules();
  } catch (error) {
    console.error("Error deleting schedule:", error);
  }
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

  try {
    const res = await fetch(`${API}/search?name=${encodeURIComponent(name)}`);
    if (!res.ok) throw new Error("Search failed");
    
    const data = await res.json();

    // Hide cards
    output.innerHTML = "";

    // Show table
    table.style.display = "table";

    if (data.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='5' style='text-align:center;'>No results found</td></tr>";
      return;
    }

    tableBody.innerHTML = data.map(s => `
      <tr>
        <td>${s.member_name || "N/A"}</td>
        <td>${s.trainer_name || "N/A"}</td>
        <td>${s.date || "N/A"}</td>
        <td>${s.time || "N/A"}</td>
        <td>${s.workout_type || "N/A"}</td>
      </tr>
    `).join("");
  } catch (error) {
    console.error("Error searching schedules:", error);
    output.innerHTML = "<p style='color:red;'>Search failed. Check backend connection.</p>";
    table.style.display = "none";
  }
});

// --------------------
// RENDER FUNCTION
// --------------------
function render(data) {
  if (!data || data.length === 0) {
    output.innerHTML = "<p>No sessions available</p>";
    return;
  }

  output.innerHTML = data.map(s => `
    <div class="card">
      <h3>${s.member_name || "Unknown Member"}</h3>

      <p><b>Trainer:</b> ${s.trainer_name || "N/A"}</p>

      <p><b>Date:</b> ${s.date ? new Date(s.date).toLocaleDateString() : "N/A"}</p>
      <p><b>Time:</b> ${s.time || "N/A"}</p>
      <p><b>Workout:</b> ${s.workout_type || "N/A"}</p>
    </div>
  `).join("");
}
