import { Role } from "../../common/enums/rol.enum";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique:true, nullable:false})
    email: string;

    @Column({nullable:false, select:false})
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({type:'enum', default:Role.USER, enum:Role})
    role: Role;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

}
