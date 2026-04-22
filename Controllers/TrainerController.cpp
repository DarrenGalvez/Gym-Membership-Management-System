#include "TrainerController.h"
#include <iostream>
using namespace std;

TrainerController::TrainerController(Database& db) : db(db) {}

void TrainerController::getAll() {
    cout << "\n--- ALL TRAINERS ---\n";
    db.loadTrainers();
}

void TrainerController::getOne(int trainerID) {
    cout << "\n--- TRAINER DETAILS ---\n";
    db.getTrainerByID(trainerID);
}

void TrainerController::create(int id, string name, string email, string specialty) {
    Trainer t(id, name, specialty);
    db.saveTrainer(t, email);
    cout << "✔ Trainer '" << name << "' added successfully.\n";
}

void TrainerController::update(int trainerID, string name, string email, string specialty) {
    db.updateTrainer(trainerID, name, email, specialty);
    cout << "✔ Trainer ID " << trainerID << " updated successfully.\n";
}

void TrainerController::remove(int trainerID) {
    db.deleteTrainer(trainerID);
    cout << "✔ Trainer ID " << trainerID << " deleted. Assigned members set to no trainer.\n";
}