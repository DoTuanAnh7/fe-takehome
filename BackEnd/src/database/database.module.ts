import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    // mongodb+srv://nmkien:<password>@crud.cj6zg4k.mongodb.net/?retryWrites=true&w=majority
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                const username = "nmkien";
                const password = "test1234";
                const database = "crud";
                const path = "crud.cj6zg4k.mongodb.net/?retryWrites=true&w=majority";
                console.log(
                    `Connected to: mongodb+srv://${username}:${password}@${path}`,
                );
                return {
                    uri: `mongodb+srv://${username}:${password}@${path}`,
                    dbName: database,
                    useNewUrlParser: true,
                };
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
