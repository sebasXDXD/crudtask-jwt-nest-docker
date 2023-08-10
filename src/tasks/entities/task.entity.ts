import { TasksType } from "src/tasks_types/entities/tasks_type.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => TasksType, (tasks_type) => tasks_type.id, { 
        eager: true 
    })
    type: TasksType;
}
