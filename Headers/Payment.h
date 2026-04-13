#ifndef PAYMENT_H
#define PAYMENT_H

class Payment {
private:
    int paymentID;
    double amount;

public:
    Payment();
    Payment(int id, double amount);

    void processPayment();
};

#endif
