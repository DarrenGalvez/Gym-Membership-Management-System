#ifndef MEMBERSHIPCONTROLLER_H
#define MEMBERSHIPCONTROLLER_H
#include "Membership.h"
#include "Database.h"

class MembershipController {
private:
    Database& db;
public:
    MembershipController(Database& db);
    void getAll();
    void getOne(int planID);
    void create(string planName, double price, int durationMonths);
    void update(int planID, string planName, double price, int durationMonths);
    void remove(int planID);
};
#endif