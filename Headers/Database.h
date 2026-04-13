#ifndef DATABASE_H
#define DATABASE_H

#include "Member.h"

class Database {
public:
    void saveMember(Member m);
    void loadMembers();
};

#endif
