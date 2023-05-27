import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('catalog')
export class CatalogEntity {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: 'varchar' })
    name!: string;

    @Column({ type: 'varchar' })
    description!: string;

    @Column({ type: 'varchar' })
    url!: string;

    @Column({ type: 'integer' })
    cost1!: number;

    @Column({ type: 'integer' })
    cost2!: number;

    @Column({ type: 'integer' })
    cost3!: number;

    @Column({ type: 'integer' })
    req1!: number;

    @Column({ type: 'integer' })
    req2!: number;

    @Column({ type: 'integer' })
    req3!: number;

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
