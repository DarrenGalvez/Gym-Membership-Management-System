#ifndef MEMBER_H
#define MEMBER_H

#include <string>
using namespace std;

class Member {
protected:
    int memberID;
    string name;
    string phone;

public:
    Member();
    Member(int id, string name, string phone);

    void setMember(int id, string name, string phone);
    void displayMember();

    int getID();
};

#endif
