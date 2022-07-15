// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
// import { Document } from 'mongoose'

import mongoose from "mongoose";

// export type LayoutDocument = Layout & Document;

// @Schema()
// export class Layout {
//     @Prop()
//     name: string;

//     @Prop()
//     so: number;

//     @Prop({type: Object})
//     objTest: object;

//     @Prop({type: Array})
//     arrTest: object[]

// }

// export const LayoutSchema = SchemaFactory.createForClass(Layout);

export const LayoutSchema = new mongoose.Schema({
    name: String,
    so: Number,
    objTest: Object,
    arrTest: Array
})