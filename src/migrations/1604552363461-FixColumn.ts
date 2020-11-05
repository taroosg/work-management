import {MigrationInterface, QueryRunner} from "typeorm";

export class FixColumn1604552363461 implements MigrationInterface {
    name = 'FixColumn1604552363461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "class_id" integer, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "class_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "class_id" FROM "student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`ALTER TABLE "temporary_student" RENAME TO "student"`);
        await queryRunner.query(`CREATE TABLE "temporary_student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id" FROM "student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`ALTER TABLE "temporary_student" RENAME TO "student"`);
        await queryRunner.query(`CREATE TABLE "temporary_student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "student_number" integer NOT NULL, "class_number_id" integer, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id" FROM "student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`ALTER TABLE "temporary_student" RENAME TO "student"`);
        await queryRunner.query(`CREATE TABLE "temporary_student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "student_number" integer NOT NULL, "class_number_id" integer, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_3dd9fd6d478f887b8da72f3a288" FOREIGN KEY ("class_number_id") REFERENCES "class_number" ("class_number_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "student_number", "class_number_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "student_number", "class_number_id" FROM "student"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`ALTER TABLE "temporary_student" RENAME TO "student"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" RENAME TO "temporary_student"`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "student_number" integer NOT NULL, "class_number_id" integer, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "student_number", "class_number_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "student_number", "class_number_id" FROM "temporary_student"`);
        await queryRunner.query(`DROP TABLE "temporary_student"`);
        await queryRunner.query(`ALTER TABLE "student" RENAME TO "temporary_student"`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id" FROM "temporary_student"`);
        await queryRunner.query(`DROP TABLE "temporary_student"`);
        await queryRunner.query(`ALTER TABLE "student" RENAME TO "temporary_student"`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "class_id" integer, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id" FROM "temporary_student"`);
        await queryRunner.query(`DROP TABLE "temporary_student"`);
        await queryRunner.query(`ALTER TABLE "student" RENAME TO "temporary_student"`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "student_name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "class_type_id" integer, "class_id" integer, CONSTRAINT "FK_85874ee23f2927b59ff5f769f3c" FOREIGN KEY ("class_id") REFERENCES "class_number" ("class_number_id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_79544bdbb3f2fe3030170ea5797" FOREIGN KEY ("class_type_id") REFERENCES "class_type" ("class_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "student"("student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "class_id") SELECT "student_id", "student_name", "createdAt", "updatedAt", "class_type_id", "class_id" FROM "temporary_student"`);
        await queryRunner.query(`DROP TABLE "temporary_student"`);
    }

}
