import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    component: Object;

}

export const UserSchema = SchemaFactory.createForClass(User);