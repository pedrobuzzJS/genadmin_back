/*
  Warnings:

  - A unique constraint covering the columns `[start]` on the table `tbstatus` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "tbstatus_start_end_idx";

-- CreateIndex
CREATE UNIQUE INDEX "tbstatus_start_key" ON "tbstatus"("start");
