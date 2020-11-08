import {MigrationInterface, QueryRunner} from "typeorm";

export class FixCommentNullable1604828462892 implements MigrationInterface {
    name = 'FixCommentNullable1604828462892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "work_post" ALTER COLUMN "comment" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "work_post"."comment" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "work_post"."comment" IS NULL`);
        await queryRunner.query(`ALTER TABLE "work_post" ALTER COLUMN "comment" SET NOT NULL`);
    }

}
