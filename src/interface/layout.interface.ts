import { Document } from 'mongoose';

export interface Layout extends Document{
    readonly name: string;
    readonly so: number;
    readonly objTest: object;
    readonly arrTest: object[];
}