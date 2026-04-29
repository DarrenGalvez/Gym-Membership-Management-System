#ifndef ROUTER_H
#define ROUTER_H
#include "controllers/MemberController.h"
#include "controllers/TrainerController.h"
#include "controllers/MembershipController.h"
#include "controllers/PaymentController.h"
#include "controllers/ScheduleController.h"

class Router {
private:
    MemberController     memberCtrl;
    TrainerController    trainerCtrl;
    MembershipController membershipCtrl;
    PaymentController    paymentCtrl;
    ScheduleController   scheduleCtrl;

public:
    Router(Database& db);
    void route();         // main loop
    void showMainMenu();
    void handleMembers();
    void handleTrainers();
    void handlePlans();
    void handlePayments();
    void handleSchedules();
};
#endif