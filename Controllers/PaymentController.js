// PaymentController.js
// Replace `payments` array with backend API calls later

let payments = [];

const PaymentController = {

    getAll() {
        return payments;
    },

    getByMember(memberID) {
        return payments.filter(p => p.memberID === memberID);
    },

    process(memberID, amount) {
        const paymentID = payments.length > 0 ? payments[payments.length - 1].paymentID + 1 : 1;
        const paymentDate = new Date().toLocaleString();
        payments.push({ paymentID, memberID, amount, paymentDate });
        return true;
    },

    remove(paymentID) {
        const index = payments.findIndex(p => p.paymentID === paymentID);
        if (index === -1) {
            alert("Payment not found!");
            return false;
        }
        payments.splice(index, 1);
        return true;
    }
};