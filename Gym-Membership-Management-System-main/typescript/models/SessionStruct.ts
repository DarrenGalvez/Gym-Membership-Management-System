export interface Session {
  sessionID: number;
  memberName: string;
  trainerName: string;
  date: string;      // format: YYYY-MM-DD
  time: string;      // format: HH:MM AM/PM
  workoutType: string;
}