#ifndef MEMBERCONTROLLER_H
#define MEMBERCONTROLLER_H
#include "Member.h"
#include "Database.h"

class MemberController {
private:
    Database& db;
public:
    MemberController(Database& db);
    void getAll();
    void getOne(int memberID);
    void create(string name, string email, int planID, int trainerID);
    void update(int memberID, string name, string email, int planID, int trainerID);
    void remove(int memberID);
};
#endif