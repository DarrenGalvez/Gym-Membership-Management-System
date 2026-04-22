#ifndef SCHEDULECONTROLLER_H
#define SCHEDULECONTROLLER_H
#include "Database.h"
#include <string>
using namespace std;

class ScheduleController {
private:
    Database& db;

public:
    ScheduleController(Database& db) : db(db) {}

    void getByMember(int memberID) {
        db.loadScheduleByMember(memberID);
    }

    void create(int memberID, string dayOfWeek, string exercise) {
        db.saveSchedule(memberID, dayOfWeek, exercise);
    }

    void update(int scheduleID, string dayOfWeek, string exercise) {
        db.updateSchedule(scheduleID, dayOfWeek, exercise);
    }

    void remove(int scheduleID) {
        db.deleteSchedule(scheduleID);
    }
};
#endif