#include <iostream>
#include "Database.h"
#include "Router.h"

using namespace std;

int main() {
    
    Database db;
    db.loadMembers();      
    db.loadTrainers();     
    db.loadPlans();        

    Router router(db);
    router.route();        
    return 0;
}