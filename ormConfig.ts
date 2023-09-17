/* eslint-disable prettier/prettier */
import { Comment } from 'src/entities/comment.entity';
import { Topic } from 'src/entities/topic.entity';
import { User } from 'src/entities/user.entity'
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions'


const config: PostgresConnectionOptions = {

    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'muky0000',
      database: 'orm_data',
      entities: [User, Topic, Comment],
      synchronize: false,   
}
    
export default config;