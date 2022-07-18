// "GID" VARCHAR2(50 BYTE) VISIBLE DEFAULT sys_guid() NOT NULL,
//   "API_CODE" VARCHAR2(32 BYTE) VISIBLE NOT NULL,
//   "API_NAME" NVARCHAR2(1000) VISIBLE,
//   "PRO_CODE" VARCHAR2(60 BYTE) VISIBLE NOT NULL,
//   "DESCRIPTION" NVARCHAR2(1000) VISIBLE,
//   "AUTOCACHE" NUMBER VISIBLE DEFAULT 0 NOT NULL,
//   "BEHAVIOSCACHE" NUMBER VISIBLE DEFAULT 0 NOT NULL,
//   "EFFECTIVENUM" NUMBER VISIBLE NOT NULL,
//   "EXPIRATIONDATE" DATE VISIBLE DEFAULT SYSDATE,
//   "EXPIRATIONNUM" NUMBER VISIBLE,
//   "ISACTIVE" NUMBER VISIBLE DEFAULT 1 NOT NULL,
//   "CREATEDATE" DATE VISIBLE DEFAULT SYSDATE NOT NULL,
//   "CREATEBY" VARCHAR2(32 BYTE) VISIBLE NOT NULL,
//   "MODIFIEDDATE" DATE VISIBLE DEFAULT SYSDATE,
//   "MODIFIEDBY" VARCHAR2(32 BYTE) VISIBLE,
//   "ISDELETE" NUMBER VISIBLE,
//   "ISUNDODELETE" NUMBER VISIBLE,
//   "UNDODELETEDATE" DATE VISIBLE,
//   "UNDODELETEBY" VARCHAR2(100 BYTE) VISIBLE,
//   "ACTION_TYPE" VARCHAR2(50 BYTE) VISIBLE DEFAULT NULL NOT NULL,
//   "CRUD" VARCHAR2(50 BYTE) VISIBLE

import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'SYS_ACTION_API'})
// @Entity({name: 'SYS_ACTION_API', synchronize: false})
export class SYS_ACTION_API{
    @PrimaryColumn({length: 50})
    GID: string;

    @Column({ length: 32 })
    API_CODE: string;

    @Column({ nullable: true, length: 1000 })
    API_NAME: string;

    @Column({ nullable: false, length: 60 })
    PRO_CODE: string;

    @Column({ nullable: true, length: 1000 })
    DESCRIPTION: string;

    @Column({ nullable: false, default: 0 })
    AUTOCACHE: number;

    @Column({ nullable: false, default: 0 })
    BEHAVIOSCACHE: number;

    @Column({ nullable: false})
    EFFECTIVENUM: number;

    @Column({ nullable: true })
    EXPIRATIONDATE: Date;

    @Column({ nullable: true })
    EXPIRATIONNUM: number;

    @Column({ nullable: false, default: 1 })
    ISACTIVE: number;

    @Column({ nullable: false })
    CREATEDATE: Date;

    @Column({ nullable: false, length: 32 })
    CREATEBY: string;

    @Column({ nullable: true })
    MODIFIEDDATE: Date;

    @Column({ nullable: true, length: 32 })
    MODIFIEDBY: string;

    @Column({ nullable: true })
    ISDELETE: number;

    @Column({ nullable: true })
    ISUNDODELETE: number;

    @Column({ nullable: true })
    UNDODELETEDATE: Date;

    @Column({ nullable: true, length: 100 })
    UNDODELETEBY: string;

    @Column({ nullable: true, length: 50 })
    ACTION_TYPE: string;

    @Column({ nullable: true, length: 50 })
    CRUD: string;

}