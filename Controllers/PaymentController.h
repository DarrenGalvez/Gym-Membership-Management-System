#ifndef PAYMENTCONTROLLER_H
#define PAYMENTCONTROLLER_H
#include "Database.h"
#include "Payment.h"
using namespace std;

class PaymentController {
private:
    Database& db;

public:
    PaymentController(Database& db) : db(db) {}

    void getAll() {
        db.loadPayments();
    }

    void getByMember(int memberID) {
        db.loadPaymentsByMember(memberID);
    }

    void process(int memberID, double amount) {
        db.savePayment(memberID, amount);
    }

    void remove(int paymentID) {
        db.deletePayment(paymentID);
    }
};
#endif