import { Task } from "src/tasks/entities/task.entity";  // Importing the related Task entity
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from "typeorm";

@Entity()
export class TasksType {
    @Column({ primary: true, generated: true })
    id: number;  // Primary key column, auto-generated

    @Column()
    type: string;  // Column to store the type/category of the task

    @CreateDateColumn()
    createdAt: Date;  // Column to store the creation date of the entity

    @UpdateDateColumn()
    updatedAt: Date;  // Column to store the last update date of the entity

    @DeleteDateColumn()
    deleteAt: Date;  // Column to store the deletion date of the entity (soft delete)

    @OneToMany(() => Task, (task) => task.id)
    tasks: Task[];  // One-to-many relationship with the Task entity, related by the "type" property
}
