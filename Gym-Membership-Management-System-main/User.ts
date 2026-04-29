export abstract class User {
    protected userId: number;
    protected name: string;
    protected email: string;

    constructor(id: number, n: string, e: string) {
        this.userId = id;
        this.name = n;
        this.email = e;
    }

    public getName(): string {
        return this.name;
    }

    public abstract displayProfile(): void;
}