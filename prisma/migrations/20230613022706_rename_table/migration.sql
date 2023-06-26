/*
  Warnings:

  - You are about to drop the `tbcompanys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tbcompanybranches" DROP CONSTRAINT "tbcompanybranches_company_id_fkey";

-- DropForeignKey
ALTER TABLE "tbcompanys" DROP CONSTRAINT "tbcompanys_status_id_fkey";

-- DropForeignKey
ALTER TABLE "tbconfigs" DROP CONSTRAINT "tbconfigs_company_id_fkey";

-- DropForeignKey
ALTER TABLE "tbmodules" DROP CONSTRAINT "tbmodules_company_id_fkey";

-- DropTable
DROP TABLE "tbcompanys";

-- CreateTable
CREATE TABLE "tbcompanies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "status_id" INTEGER NOT NULL,
    "approval" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbcompanies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbconfigs" ADD CONSTRAINT "tbconfigs_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "tbcompanies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbmodules" ADD CONSTRAINT "tbmodules_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "tbcompanies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcompanies" ADD CONSTRAINT "tbcompanies_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcompanybranches" ADD CONSTRAINT "tbcompanybranches_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "tbcompanies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
