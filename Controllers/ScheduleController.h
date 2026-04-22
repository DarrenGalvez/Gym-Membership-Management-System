#ifndef SCHEDULECONTROLLER_H
#define SCHEDULECONTROLLER_H
#include "Database.h"
#include <string>
using namespace std;

class ScheduleController {
private:
    Database& db;
public:
    ScheduleController(Database& db);
    void getByMember(int memberID);
    void create(int memberID, string dayOfWeek, string exercise);
    void update(int scheduleID, string dayOfWeek, string exercise);
    void remove(int scheduleID);
};
#endif