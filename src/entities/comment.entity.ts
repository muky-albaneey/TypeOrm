/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Topic } from "./topic.entity";


@Entity()
export class Comment{


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(type=>User, user=>user.id)
    user: User

    @ManyToOne(type => Topic, topic => topic.comments)
    topic: Topic


}