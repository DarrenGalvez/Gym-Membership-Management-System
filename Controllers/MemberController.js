// MemberController.js
// Replace `members` array with backend API calls later

let members = [];

const MemberController = {

    getAll() {
        return members;
    },

    getOne(memberID) {
        return members.find(m => m.memberID === memberID) || null;
    },

    create(memberID, name, email, planID, trainerID) {
        const exists = members.some(m => m.memberID === memberID);
        if (exists) {
            alert("Member ID already exists!");
            return false;
        }
        members.push({ memberID, name, email, planID, trainerID });
        return true;
    },

    update(memberID, name, email, planID, trainerID) {
        const index = members.findIndex(m => m.memberID === memberID);
        if (index === -1) {
            alert("Member not found!");
            return false;
        }
        members[index] = { memberID, name, email, planID, trainerID };
        return true;
    },

    remove(memberID) {
        const index = members.findIndex(m => m.memberID === memberID);
        if (index === -1) {
            alert("Member not found!");
            return false;
        }
        members.splice(index, 1);
        return true;
    },

    search(name) {
        return members.filter(m => m.name.toLowerCase() === name.toLowerCase());
    }
};