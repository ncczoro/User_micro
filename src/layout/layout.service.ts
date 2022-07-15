/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Layout } from 'src/interface/layout.interface';
// import { Layout, LayoutDocument } from '../schema/layout.schema';

@Injectable()
export class LayoutService {
    constructor(
        @Inject('LAYOUT_MODEL') private readonly layoutModel: Model<Layout>,
    ) { }

    async create(createLayoutDto: any): Promise<Layout> {
        const createLayout = await this.layoutModel.create(createLayoutDto);
        return createLayout;
    }

    async findAll(): Promise<Layout[]> {
        // console.log('layoutModelds', this.layoutModel.find())
        return this.layoutModel.find().exec();
    }

    async findOne(id: string): Promise<Layout>{
        return this.layoutModel.findOne({_id: id}).exec();
    }

    async delete(id: string){
        const deleteLayout = await this.layoutModel.findByIdAndRemove({_id: id}).exec();
        return deleteLayout;
    }

}
