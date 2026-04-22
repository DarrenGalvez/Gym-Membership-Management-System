#ifndef DATABASE_H
#define DATABASE_H
#include "Member.h"
#include "Trainer.h"
#include "Membership.h"
#include "Payment.h"
#include <vector>
#include <string>
using namespace std;

class Database {
public:
    // Members
    void saveMember(Member m);
    void updateMember(int id, string name, string email, int planID, int trainerID);
    void deleteMember(int id);
    void loadMembers();
    Member getMemberByID(int id);

    // Trainers
    void saveTrainer(Trainer t);
    void updateTrainer(int id, string name, string email, string specialty);
    void deleteTrainer(int id);
    void loadTrainers();

    // Plans
    void savePlan(string name, double price, int duration);
    void updatePlan(int id, string name, double price, int duration);
    void deletePlan(int id);
    void loadPlans();

    // Payments
    void savePayment(int memberID, double amount);
    void deletePayment(int paymentID);
    void loadPaymentsByMember(int memberID);

    // Schedules
    void saveSchedule(int memberID, string day, string exercise);
    void updateSchedule(int scheduleID, string day, string exercise);
    void deleteSchedule(int scheduleID);
    void loadScheduleByMember(int memberID);
};
#endif
