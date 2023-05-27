import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('asset')
export class AssetEntity {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: 'integer' })
    type!: number;

    @Column({ type: 'integer' })
    level!: number;

    @Column({ type: 'uuid' })
    address!: number;

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
