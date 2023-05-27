import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: 'uuid' })
    address!: string;

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
