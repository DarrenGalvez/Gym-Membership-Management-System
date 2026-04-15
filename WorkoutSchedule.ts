import { Session } from "./typescript/models/SessionStruct"; 
// adjust path if your folder structure is different

export class WorkoutSchedule {
  private sessions: Session[] = [];

  // Add a new session (with duplicate ID protection)
  addSession(session: Session): void {
    const exists = this.sessions.some(
      (s) => s.sessionID === session.sessionID
    );

    if (exists) {
      console.log("Session with this ID already exists.");
      return;
    }

    this.sessions.push(session);
    console.log("Session added successfully.");
  }

  // Print full schedule
  printSchedule(): void {
    if (this.sessions.length === 0) {
      console.log("No sessions scheduled.");
      return;
    }

    console.log("=== Workout Schedule ===");

    this.sessions.forEach((s) => {
      this.printSessionDetails(s);
    });
  }

  // Find sessions by member name
  findSessionByMember(memberName: string): void {
    const results = this.sessions.filter(
      (s) => s.memberName === memberName
    );

    if (results.length === 0) {
      console.log(`No sessions found for member: ${memberName}`);
      return;
    }

    console.log(`=== Sessions for ${memberName} ===`);

    results.forEach((s) => {
      console.log("Found Session:");
      this.printSessionDetails(s);
    });
  }

  // Helper method to avoid repetition
  private printSessionDetails(s: Session): void {
    console.log(`Session ID: ${s.sessionID}`);
    console.log(`Member: ${s.memberName}`);
    console.log(`Trainer: ${s.trainerName}`);
    console.log(`Date: ${s.date}`);
    console.log(`Time: ${s.time}`);
    console.log(`Workout: ${s.workoutType}`);
    console.log("------------------------");
  }
}