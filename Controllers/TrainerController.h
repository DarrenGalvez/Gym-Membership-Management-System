#ifndef TRAINERCONTROLLER_H
#define TRAINERCONTROLLER_H
#include "Database.h"
#include "Trainer.h"
#include <string>
using namespace std;

class TrainerController {
private:
    Database& db;

public:
    TrainerController(Database& db) : db(db) {}

    void getAll() {
        db.loadTrainers();
    }

    void getOne(int trainerID) {
        db.getTrainerByID(trainerID);
    }

    void create(int id, string name, string email, string specialty) {
        Trainer t(id, name, specialty);
        db.saveTrainer(t, email);
    }

    void update(int trainerID, string name, string email, string specialty) {
        db.updateTrainer(trainerID, name, email, specialty);
    }

    void remove(int trainerID) {
        db.deleteTrainer(trainerID);
    }
};
#endif