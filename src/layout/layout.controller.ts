/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Layout } from 'src/layout/layout.interface';
// import { Layout } from '../schema/layout.schema';
import { LayoutService } from './layout.service';

@Controller('layouts')
export class LayoutController {
    constructor(private readonly layoutService: LayoutService) {

    }

    @Post()
    async create(@Body() createLayout: any) {
        await this.layoutService.create(createLayout);
    }

    @Get()
    async findAll(): Promise<Layout[]> {
        return this.layoutService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Layout> {
        return this.layoutService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.layoutService.delete(id);
    }
}
