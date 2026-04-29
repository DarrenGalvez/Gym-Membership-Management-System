#ifndef WORKOUTSCHEDULE_H
#define WORKOUTSCHEDULE_H
#include <string>
using namespace std;

class WorkoutSchedule {
private:
    int scheduleID;
    int memberID;
    string dayOfWeek;
    string exercise;

public:
    WorkoutSchedule();
    WorkoutSchedule(int scheduleID, int memberID, string dayOfWeek, string exercise);

    int getScheduleID();
    int getMemberID();
    string getDay();
    string getExercise();

    void setDay(string day);
    void setExercise(string exercise);

    void displaySchedule();
};
#endif