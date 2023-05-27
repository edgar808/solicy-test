import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CretaeProduct1685197420039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isNullable:false
                    },
                    {
                        name: 'address',
                        type: 'uuid'
                    },
      
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'deletedAt',
                        type: 'timestamp',
                        isNullable: true
                    }
                ]
            }),
            true
        )
        
        await queryRunner.createForeignKey(
            'product',
            new TableForeignKey({
                columnNames: [ 'address' ],
                referencedColumnNames: [ 'address' ],
                referencedTableName: 'users'
            })
        )
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    public async down(queryRunner: QueryRunner): Promise<void> {}

}
