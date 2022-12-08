import { MigrationInterface, QueryRunner } from "typeorm";

export class createupdateTables1670209791555 implements MigrationInterface {
    name = 'createupdateTables1670209791555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "date" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" integer NOT NULL`);
    }

}
