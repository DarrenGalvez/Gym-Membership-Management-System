#include "MembershipController.h"
#include <iostream>
using namespace std;

MembershipController::MembershipController(Database& db) : db(db) {}

void MembershipController::getAll() {
    cout << "\n--- ALL MEMBERSHIP PLANS ---\n";
    db.loadPlans();
}

void MembershipController::getOne(int planID) {
    cout << "\n--- PLAN DETAILS ---\n";
    db.getPlanByID(planID);
}

void MembershipController::create(string planName, double price, int durationMonths) {
    Membership m(planName, durationMonths, price);
    db.savePlan(m);
    cout << "✔ Plan '" << planName << "' created successfully.\n";
}

void MembershipController::update(int planID, string planName, double price, int durationMonths) {
    db.updatePlan(planID, planName, price, durationMonths);
    cout << "✔ Plan ID " << planID << " updated successfully.\n";
}

void MembershipController::remove(int planID) {
    db.deletePlan(planID);
    cout << "✔ Plan ID " << planID << " deleted.\n";
}