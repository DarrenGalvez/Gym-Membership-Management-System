// ScheduleController.js
// Replace `schedules` array with backend API calls later

let schedules = [];

const ScheduleController = {

    getByMember(memberID) {
        return schedules.filter(s => s.memberID === memberID);
    },

    create(memberID, dayOfWeek, exercise) {
        const scheduleID = schedules.length > 0 ? schedules[schedules.length - 1].scheduleID + 1 : 1;
        schedules.push({ scheduleID, memberID, dayOfWeek, exercise });
        return true;
    },

    update(scheduleID, dayOfWeek, exercise) {
        const index = schedules.findIndex(s => s.scheduleID === scheduleID);
        if (index === -1) {
            alert("Schedule entry not found!");
            return false;
        }
        schedules[index] = { ...schedules[index], dayOfWeek, exercise };
        return true;
    },

    remove(scheduleID) {
        const index = schedules.findIndex(s => s.scheduleID === scheduleID);
        if (index === -1) {
            alert("Schedule entry not found!");
            return false;
        }
        schedules.splice(index, 1);
        return true;
    },

    // Mirrors ON DELETE CASCADE — remove all schedules when member is deleted
    removeByMember(memberID) {
        schedules = schedules.filter(s => s.memberID !== memberID);
    }
};