import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    address!: string;

    @Column({ type: 'float' })
    cash1!: string;

    @Column({ type: 'float' })
    cash2!: string;

    @Column({ type: 'float' })
    cash3!: number;

    @Column({ type: 'timestamp' })
    @CreateDateColumn()
    createdAt!: Date;

    @Column({ type: 'timestamp' })
    @UpdateDateColumn()
    updatedAt?: Date;

    @Column({ type: 'timestamp' })
    @DeleteDateColumn()
    deletedAt?: Date;
}
