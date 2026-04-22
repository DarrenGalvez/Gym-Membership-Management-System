#ifndef TRAINERCONTROLLER_H
#define TRAINERCONTROLLER_H
#include "Trainer.h"
#include "Database.h"

class TrainerController {
private:
    Database& db;
public:
    TrainerController(Database& db);
    void getAll();
    void getOne(int trainerID);
    void create(string name, string email, string specialty);
    void update(int trainerID, string name, string email, string specialty);
    void remove(int trainerID);
};
#endif