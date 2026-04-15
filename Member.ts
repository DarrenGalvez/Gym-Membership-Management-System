import { User } from "./User";
import { MembershipPlan } from "./MembershipPlan";
import { Trainer } from "./Trainer";

export class Member extends User {
    private plan: MembershipPlan;
    private assignedTrainer: Trainer | null;
    private payments: number[];

    constructor(id: number, n: string, e: string, p: MembershipPlan) {
        super(id, n, e);
        this.plan = p;
        this.assignedTrainer = null;
        this.payments = [];
    }

    public assignTrainer(t: Trainer): void {
        this.assignedTrainer = t;
    }

    public makePayment(amount: number): void {
        this.payments.push(amount);
    }

    public displayProfile(): void {
        console.log(`ID: ${this.userId} | Member: ${this.name}`);
        console.log(`Plan: ${this.plan.planName} | Price: ${this.plan.price}`);
        if (this.assignedTrainer) {
            console.log(`Trainer: ${this.assignedTrainer.getName()}`);
        }
    }
}