import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ModifyCatalog1685203773119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'catalog',
            new TableColumn({
                name: 'category',
                type: 'integer'
            })
        )
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
