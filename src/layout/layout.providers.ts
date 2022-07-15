import { Mongoose } from "mongoose";
import { LayoutSchema } from "src/schema/layout.schema";

export const layoutsProviders = [
    {
        provide: 'LAYOUT_MODEL',
        useFactory: (mongoose: Mongoose) => mongoose.model('Layout', LayoutSchema),
        inject: ['MONGO_CONNECTION_TEST']
    }
];