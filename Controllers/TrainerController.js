// TrainerController.js
// Replace `trainers` array with backend API calls later

let trainers = [];

const TrainerController = {

    getAll() {
        return trainers;
    },

    getOne(trainerID) {
        return trainers.find(t => t.trainerID === trainerID) || null;
    },

    create(trainerID, name, email, specialty) {
        const exists = trainers.some(t => t.trainerID === trainerID);
        if (exists) {
            alert("Trainer ID already exists!");
            return false;
        }
        trainers.push({ trainerID, name, email, specialty });
        return true;
    },

    update(trainerID, name, email, specialty) {
        const index = trainers.findIndex(t => t.trainerID === trainerID);
        if (index === -1) {
            alert("Trainer not found!");
            return false;
        }
        trainers[index] = { trainerID, name, email, specialty };
        return true;
    },

    remove(trainerID) {
        const index = trainers.findIndex(t => t.trainerID === trainerID);
        if (index === -1) {
            alert("Trainer not found!");
            return false;
        }
        // Set assigned members' trainerID to null (mirrors ON DELETE SET NULL)
        members.forEach(m => {
            if (m.trainerID === trainerID) m.trainerID = null;
        });
        trainers.splice(index, 1);
        return true;
    },

    search(name) {
        return trainers.filter(t => t.name.toLowerCase() === name.toLowerCase());
    }
};