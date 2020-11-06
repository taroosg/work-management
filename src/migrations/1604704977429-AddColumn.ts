import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumn1604704977429 implements MigrationInterface {
    name = 'AddColumn1604704977429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "work_post" ADD "review" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "work_post" ADD "comment" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "work_post" DROP COLUMN "comment"`);
        await queryRunner.query(`ALTER TABLE "work_post" DROP COLUMN "review"`);
    }

}
