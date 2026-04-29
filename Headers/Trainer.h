#ifndef TRAINER_H
#define TRAINER_H

#include <string>
using namespace std;

class Trainer {
private:
    int trainerID;
    string name;
    string specialization;

public:
    Trainer();
    Trainer(int id, string name, string spec);

    void displayTrainer();
};

#endif
