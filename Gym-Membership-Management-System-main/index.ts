import { WorkoutSchedule } from "./WorkoutSchedule";
import { Session } from "./typescript/models/SessionStruct";

const schedule = new WorkoutSchedule();

const s1: Session = {
  sessionID: 1,
  memberName: "John Doe",
  trainerName: "Mike",
  date: "2026-04-15",
  time: "10:00 AM",
  workoutType: "Cardio"
};

schedule.addSession(s1);

// updated method name to match new class
schedule.printSchedule();