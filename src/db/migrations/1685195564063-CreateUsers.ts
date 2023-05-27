import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1685195564063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'address',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'cash1',
                        type: 'float'
                    },
                    {
                        name: 'cash2',
                        type: 'float'
                    },
                    {
                        name: 'cash3',
                        type: 'float'
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
