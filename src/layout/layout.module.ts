import { LayoutController } from './layout.controller';
import { LayoutService } from './layout.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { layoutsProviders } from './layout.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [
        LayoutController,],
    providers: [
        LayoutService, ...layoutsProviders],
})
export class LayoutModule { }
