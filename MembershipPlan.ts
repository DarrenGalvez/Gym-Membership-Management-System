export class MembershipPlan {
    public planName: string;
    public price: number;
    public durationMonths: number;

    constructor(n: string = "Basic", p: number = 29.99, d: number = 1) {
        this.planName = n;
        this.price = p;
        this.durationMonths = d;
    }
}