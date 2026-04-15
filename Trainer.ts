import { User } from "./User";

export class Trainer extends User {
    private specialty: string;

    constructor(id: number, n: string, e: string, s: string) {
        super(id, n, e);
        this.specialty = s;
    }

    public displayProfile(): void {
        console.log(`[Trainer] ${this.name} | Specialty: ${this.specialty}`);
    }
}