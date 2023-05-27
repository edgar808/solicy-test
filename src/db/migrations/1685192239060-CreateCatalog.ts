import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCatalog1685192239060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'catalog',
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
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'url',
                        type: 'varchar'
                    },
                    {
                        name: 'cost1',
                        type: 'integer'
                    },
                    {
                        name: 'cost2',
                        type: 'integer'
                    },
                    {
                        name: 'cost3',
                        type: 'integer'
                    },
                    {
                        name: 'req1',
                        type: 'integer'
                    },
                    {
                        name: 'req2',
                        type: 'integer'
                    },
                    {
                        name: 'req3',
                        type: 'integer'
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

    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    public async down(queryRunner: QueryRunner): Promise<void> {}

}
