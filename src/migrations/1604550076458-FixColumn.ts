import {MigrationInterface, QueryRunner} from "typeorm";

export class FixColumn1604550076458 implements MigrationInterface {
    name = 'FixColumn1604550076458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_work_post" ("post_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "work_number" integer NOT NULL, "work_url" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "student_name" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_work_post"("post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_name") SELECT "post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_name" FROM "work_post"`);
        await queryRunner.query(`DROP TABLE "work_post"`);
        await queryRunner.query(`ALTER TABLE "temporary_work_post" RENAME TO "work_post"`);
        await queryRunner.query(`CREATE TABLE "temporary_student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_name" integer, "class_number" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_name", "class_number") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_name", "class_number" FROM "student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`ALTER TABLE "temporary_student" RENAME TO "student"`);
        await queryRunner.query(`CREATE TABLE "temporary_work_post" ("post_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "work_number" integer NOT NULL, "work_url" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "student_id" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_work_post"("post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_id") SELECT "post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_name" FROM "work_post"`);
        await queryRunner.query(`DROP TABLE "work_post"`);
        await queryRunner.query(`ALTER TABLE "temporary_work_post" RENAME TO "work_post"`);
        await queryRunner.query(`CREATE TABLE "temporary_student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_student"("student_id", "student_name", "createdAt", "updatedAt") SELECT "student_id", "student_name", "createdAt", "updatedAt" FROM "student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`ALTER TABLE "temporary_student" RENAME TO "student"`);
        await queryRunner.query(`CREATE TABLE "temporary_student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "class_id" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_student"("student_id", "student_name", "createdAt", "updatedAt") SELECT "student_id", "student_name", "createdAt", "updatedAt" FROM "student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`ALTER TABLE "temporary_student" RENAME TO "student"`);
        await queryRunner.query(`CREATE TABLE "temporary_work_post" ("post_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "work_number" integer NOT NULL, "work_url" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "student_id" integer, CONSTRAINT "FK_734046682e8d78d0462d7c536f7" FOREIGN KEY ("student_id") REFERENCES "student" ("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_work_post"("post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_id") SELECT "post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_id" FROM "work_post"`);
        await queryRunner.query(`DROP TABLE "work_post"`);
        await queryRunner.query(`ALTER TABLE "temporary_work_post" RENAME TO "work_post"`);
        await queryRunner.query(`CREATE TABLE "temporary_student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "class_id" integer, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_85874ee23f2927b59ff5f769f3c" FOREIGN KEY ("class_id") REFERENCES "class_number" ("class_number_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "class_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "class_id" FROM "student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`ALTER TABLE "temporary_student" RENAME TO "student"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" RENAME TO "temporary_student"`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "class_id" integer)`);
        await queryRunner.query(`INSERT INTO "student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "class_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "class_id" FROM "temporary_student"`);
        await queryRunner.query(`DROP TABLE "temporary_student"`);
        await queryRunner.query(`ALTER TABLE "work_post" RENAME TO "temporary_work_post"`);
        await queryRunner.query(`CREATE TABLE "work_post" ("post_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "work_number" integer NOT NULL, "work_url" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "student_id" integer)`);
        await queryRunner.query(`INSERT INTO "work_post"("post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_id") SELECT "post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_id" FROM "temporary_work_post"`);
        await queryRunner.query(`DROP TABLE "temporary_work_post"`);
        await queryRunner.query(`ALTER TABLE "student" RENAME TO "temporary_student"`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "student"("student_id", "student_name", "createdAt", "updatedAt") SELECT "student_id", "student_name", "createdAt", "updatedAt" FROM "temporary_student"`);
        await queryRunner.query(`DROP TABLE "temporary_student"`);
        await queryRunner.query(`ALTER TABLE "student" RENAME TO "temporary_student"`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_name" integer, "class_number" integer)`);
        await queryRunner.query(`INSERT INTO "student"("student_id", "student_name", "createdAt", "updatedAt") SELECT "student_id", "student_name", "createdAt", "updatedAt" FROM "temporary_student"`);
        await queryRunner.query(`DROP TABLE "temporary_student"`);
        await queryRunner.query(`ALTER TABLE "work_post" RENAME TO "temporary_work_post"`);
        await queryRunner.query(`CREATE TABLE "work_post" ("post_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "work_number" integer NOT NULL, "work_url" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "student_name" integer)`);
        await queryRunner.query(`INSERT INTO "work_post"("post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_name") SELECT "post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_id" FROM "temporary_work_post"`);
        await queryRunner.query(`DROP TABLE "temporary_work_post"`);
        await queryRunner.query(`ALTER TABLE "student" RENAME TO "temporary_student"`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_name" integer, "class_number" integer, CONSTRAINT "FK_4e59539e14ff81426960add1f79" FOREIGN KEY ("class_number") REFERENCES "class_number" ("class_number_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_49f5877dafd7a482790145a1b96" FOREIGN KEY ("class_type_name") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_name", "class_number") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_name", "class_number" FROM "temporary_student"`);
        await queryRunner.query(`DROP TABLE "temporary_student"`);
        await queryRunner.query(`ALTER TABLE "work_post" RENAME TO "temporary_work_post"`);
        await queryRunner.query(`CREATE TABLE "work_post" ("post_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "work_number" integer NOT NULL, "work_url" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "student_name" integer, CONSTRAINT "FK_ae6302a4a52ce3741525daf68e4" FOREIGN KEY ("student_name") REFERENCES "student" ("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "work_post"("post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_name") SELECT "post_id", "work_number", "work_url", "createdAt", "updatedAt", "student_name" FROM "temporary_work_post"`);
        await queryRunner.query(`DROP TABLE "temporary_work_post"`);
    }

}