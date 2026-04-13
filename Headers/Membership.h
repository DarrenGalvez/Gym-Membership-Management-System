#ifndef MEMBERSHIP_H
#define MEMBERSHIP_H

#include <string>
using namespace std;

class Membership {
private:
    string type;
    int duration;
    double fee;

public:
    Membership();
    Membership(string type, int duration, double fee);

    void displayMembership();
};

#endif
