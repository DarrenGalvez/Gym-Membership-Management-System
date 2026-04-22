// MembershipController.js
// Replace `plans` array with backend API calls later

let plans = [];

const MembershipController = {

    getAll() {
        return plans;
    },

    getOne(planID) {
        return plans.find(p => p.planID === planID) || null;
    },

    create(planName, price, durationMonths) {
        const planID = plans.length > 0 ? plans[plans.length - 1].planID + 1 : 1;
        plans.push({ planID, planName, price, durationMonths });
        return true;
    },

    update(planID, planName, price, durationMonths) {
        const index = plans.findIndex(p => p.planID === planID);
        if (index === -1) {
            alert("Plan not found!");
            return false;
        }
        plans[index] = { planID, planName, price, durationMonths };
        return true;
    },

    remove(planID) {
        const index = plans.findIndex(p => p.planID === planID);
        if (index === -1) {
            alert("Plan not found!");
            return false;
        }
        plans.splice(index, 1);
        return true;
    }
};