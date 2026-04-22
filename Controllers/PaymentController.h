#ifndef PAYMENTCONTROLLER_H
#define PAYMENTCONTROLLER_H
#include "Payment.h"
#include "Database.h"

class PaymentController {
private:
    Database& db;
public:
    PaymentController(Database& db);
    void getAll();
    void getByMember(int memberID);
    void process(int memberID, double amount);
    void remove(int paymentID);
};
#endif