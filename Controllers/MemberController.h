#ifndef MEMBERCONTROLLER_H
#define MEMBERCONTROLLER_H
#include "Database.h"
#include "Member.h"
#include <string>
using namespace std;

class MemberController {
private:
    Database& db;

public:
    MemberController(Database& db) : db(db) {}

    void getAll() {
        db.loadMembers();
    }

    void getOne(int memberID) {
        db.getMemberByID(memberID);
    }

    void create(string name, string email, int planID, int trainerID) {
        Member m;
        m.setMember(0, name, email);
        db.saveMember(m, planID, trainerID);
    }

    void update(int memberID, string name, string email, int planID, int trainerID) {
        db.updateMember(memberID, name, email, planID, trainerID);
    }

    void remove(int memberID) {
        db.deleteMember(memberID);
    }
};
#endif