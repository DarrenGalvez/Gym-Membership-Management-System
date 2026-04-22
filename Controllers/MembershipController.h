#ifndef MEMBERSHIPCONTROLLER_H
#define MEMBERSHIPCONTROLLER_H
#include "Database.h"
#include "Membership.h"
#include <string>
using namespace std;

class MembershipController {
private:
    Database& db;

public:
    MembershipController(Database& db) : db(db) {}

    void getAll() {
        db.loadPlans();
    }

    void getOne(int planID) {
        db.getPlanByID(planID);
    }

    void create(string planName, double price, int durationMonths) {
        Membership m(planName, durationMonths, price);
        db.savePlan(m);
    }

    void update(int planID, string planName, double price, int durationMonths) {
        db.updatePlan(planID, planName, price, durationMonths);
    }

    void remove(int planID) {
        db.deletePlan(planID);
    }
};
#endif