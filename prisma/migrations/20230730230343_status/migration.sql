-- DropIndex
DROP INDEX "tbstatus_start_end_key";

-- CreateIndex
CREATE INDEX "tbstatus_start_end_idx" ON "tbstatus"("start", "end");
