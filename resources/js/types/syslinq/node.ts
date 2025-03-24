export interface Node {
    id: string;
    name: string;
    address: string;
    user_id: number;
    created_at: Date;
    updated_at?: Date | null;
};
