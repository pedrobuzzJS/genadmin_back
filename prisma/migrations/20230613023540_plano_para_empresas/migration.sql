/*
  Warnings:

  - Added the required column `plan` to the `tbcompanies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbcompanies" ADD COLUMN     "plan" TEXT NOT NULL;
