import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateAsset1685196658586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'asset',
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
                        name: 'type',
                        type: 'integer'
                    },
                    {
                        name: 'level',
                        type: 'integer'
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
            'asset',
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
