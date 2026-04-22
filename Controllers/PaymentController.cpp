#include "PaymentController.h"
#include <iostream>
using namespace std;

PaymentController::PaymentController(Database& db) : db(db) {}

void PaymentController::getAll() {
    cout << "\n--- ALL PAYMENTS ---\n";
    db.loadPayments();
}

void PaymentController::getByMember(int memberID) {
    cout << "\n--- PAYMENTS FOR MEMBER ID: " << memberID << " ---\n";
    db.loadPaymentsByMember(memberID);
}

void PaymentController::process(int memberID, double amount) {
    Payment p(0, amount);
    db.savePayment(memberID, amount);
    cout << "✔ Payment of $" << amount << " processed for Member ID " << memberID << ".\n";
}

void PaymentController::remove(int paymentID) {
    db.deletePayment(paymentID);
    cout << "✔ Payment ID " << paymentID << " deleted.\n";
}