#include "ScheduleController.h"
#include <iostream>
using namespace std;

ScheduleController::ScheduleController(Database& db) : db(db) {}

void ScheduleController::getByMember(int memberID) {
    cout << "\n--- WORKOUT SCHEDULE FOR MEMBER ID: " << memberID << " ---\n";
    db.loadScheduleByMember(memberID);
}

void ScheduleController::create(int memberID, string dayOfWeek, string exercise) {
    db.saveSchedule(memberID, dayOfWeek, exercise);
    cout << "✔ Schedule entry added: " << dayOfWeek << " - " << exercise << "\n";
}

void ScheduleController::update(int scheduleID, string dayOfWeek, string exercise) {
    db.updateSchedule(scheduleID, dayOfWeek, exercise);
    cout << "✔ Schedule ID " << scheduleID << " updated.\n";
}

void ScheduleController::remove(int scheduleID) {
    db.deleteSchedule(scheduleID);
    cout << "✔ Schedule ID " << scheduleID << " deleted.\n";
}