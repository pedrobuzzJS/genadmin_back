/*
  Warnings:

  - You are about to drop the column `company_id` on the `tbmodules` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[start,end]` on the table `tbstatus` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "tbmodules" DROP CONSTRAINT "tbmodules_company_id_fkey";

-- AlterTable
ALTER TABLE "tbmodules" DROP COLUMN "company_id";

-- AlterTable
ALTER TABLE "tbstatus" ADD COLUMN     "end" BOOLEAN,
ADD COLUMN     "start" BOOLEAN;

-- CreateIndex
CREATE UNIQUE INDEX "tbstatus_start_end_key" ON "tbstatus"("start", "end");
