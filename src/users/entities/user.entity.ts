import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique:true, nullable:false})
    email: string;

    @Column({nullable:false})
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({default:"user"})
    role: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

}
