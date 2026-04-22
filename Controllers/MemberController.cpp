#include "MemberController.h"
#include <iostream>
using namespace std;

MemberController::MemberController(Database& db) : db(db) {}

void MemberController::getAll() {
    cout << "\n--- ALL MEMBERS ---\n";
    db.loadMembers();
}

void MemberController::getOne(int memberID) {
    cout << "\n--- MEMBER DETAILS ---\n";
    db.getMemberByID(memberID);
}

void MemberController::create(string name, string email, int planID, int trainerID) {
    Member m;
    m.setMember(0, name, email);
    db.saveMember(m, planID, trainerID);
    cout << "✔ Member '" << name << "' registered successfully.\n";
}

void MemberController::update(int memberID, string name, string email, int planID, int trainerID) {
    db.updateMember(memberID, name, email, planID, trainerID);
    cout << "✔ Member ID " << memberID << " updated successfully.\n";
}

void MemberController::remove(int memberID) {
    db.deleteMember(memberID);
    cout << "✔ Member ID " << memberID << " deleted.\n";
}