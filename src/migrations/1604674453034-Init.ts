import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1604674453034 implements MigrationInterface {
    name = 'Init1604674453034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "work_post" ("post_id" SERIAL NOT NULL, "work_number" integer NOT NULL, "work_url" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "student_id" integer, CONSTRAINT "PK_c682958867c3cd2e6e333b49c8e" PRIMARY KEY ("post_id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" SERIAL NOT NULL, "student_name" character varying NOT NULL, "student_number" integer NOT NULL, "class_id" integer, CONSTRAINT "PK_be3689991c2cc4b6f4cf39087fa" PRIMARY KEY ("student_id"))`);
        await queryRunner.query(`CREATE TABLE "class" ("class_id" SERIAL NOT NULL, "class_name" character varying NOT NULL, "slack_token" character varying NOT NULL, "slack_channel" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, CONSTRAINT "PK_4265c685fe8a9043bd8d400ad58" PRIMARY KEY ("class_id"))`);
        await queryRunner.query(`CREATE TABLE "work" ("work_id" SERIAL NOT NULL, "work_number" integer NOT NULL, CONSTRAINT "PK_60d987a1eff0d704b76d64628f4" PRIMARY KEY ("work_id"))`);
        await queryRunner.query(`ALTER TABLE "work_post" ADD CONSTRAINT "FK_734046682e8d78d0462d7c536f7" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_85874ee23f2927b59ff5f769f3c" FOREIGN KEY ("class_id") REFERENCES "class"("class_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_85874ee23f2927b59ff5f769f3c"`);
        await queryRunner.query(`ALTER TABLE "work_post" DROP CONSTRAINT "FK_734046682e8d78d0462d7c536f7"`);
        await queryRunner.query(`DROP TABLE "work"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "work_post"`);
    }

}
