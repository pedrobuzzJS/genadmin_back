-- CreateTable
CREATE TABLE "tbusers" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(500) NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "password" VARCHAR(255) NOT NULL,
    "remember_token" VARCHAR(1000),
    "status_id" INTEGER NOT NULL,
    "admin" BOOLEAN DEFAULT false,
    "approval" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbusers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbmenus" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "parameters" VARCHAR(1000),
    "route" VARCHAR(1000),
    "icon" CHAR(50) NOT NULL,
    "parent_id" INTEGER,
    "component" VARCHAR(255),
    "has_childrens" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbmenus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbstatus" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "color" VARCHAR(50),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbstatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpagetypes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbpagetypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpages" (
    "id" SERIAL NOT NULL,
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbpages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbexpensestypes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbexpensestypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpermissions" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbpermissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbroles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbroles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbuserroles" (
    "user_id" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "tbuserroles_pkey" PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "tbrolepermissions" (
    "role_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "tbrolepermissions_pkey" PRIMARY KEY ("role_id","permission_id")
);

-- CreateTable
CREATE TABLE "tbuserpermissions" (
    "user_id" TEXT NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "tbuserpermissions_pkey" PRIMARY KEY ("user_id","permission_id")
);

-- CreateTable
CREATE TABLE "tbconfigs" (
    "id" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,
    "param" VARCHAR(100) NOT NULL,
    "value" VARCHAR(1000),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbconfigs_pkey" PRIMARY KEY ("id","param")
);

-- CreateTable
CREATE TABLE "tbmodules" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "company_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbmodules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbproducts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "codbar" VARCHAR(255) NOT NULL,
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbcompanys" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "status_id" INTEGER NOT NULL,
    "approval" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbcompanys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbcompanybranches" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "approval" INTEGER,
    "company_id" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    "master" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbcompanybranches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpersons" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "tag" VARCHAR(2000),
    "approval" INTEGER,
    "juricical" BOOLEAN NOT NULL DEFAULT false,
    "cpf_cnpj" VARCHAR(14),
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbpersons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpersoncontacts" (
    "id" SERIAL NOT NULL,
    "master" BOOLEAN NOT NULL DEFAULT false,
    "person_id" INTEGER NOT NULL,
    "email" VARCHAR(500) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbpersoncontacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpersonaddresses" (
    "id" SERIAL NOT NULL,
    "person_id" INTEGER NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "fiscal" BOOLEAN NOT NULL DEFAULT false,
    "country_id" INTEGER NOT NULL,
    "state_id" INTEGER NOT NULL,
    "city_id" INTEGER NOT NULL,
    "district" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbpersonaddresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbcountries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "acronym" CHAR(2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbcountries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbstates" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "country_id" INTEGER NOT NULL,
    "acronym" CHAR(2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbstates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbcities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country_id" INTEGER NOT NULL,
    "state_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbcities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbusers_email_username_key" ON "tbusers"("email", "username");

-- CreateIndex
CREATE UNIQUE INDEX "tbmenus_route_key" ON "tbmenus"("route");

-- CreateIndex
CREATE UNIQUE INDEX "tbproducts_codbar_key" ON "tbproducts"("codbar");

-- CreateIndex
CREATE INDEX "tbpersoncontacts_id_master_idx" ON "tbpersoncontacts"("id", "master");

-- CreateIndex
CREATE UNIQUE INDEX "tbcountries_name_acronym_key" ON "tbcountries"("name", "acronym");

-- CreateIndex
CREATE UNIQUE INDEX "tbstates_name_acronym_key" ON "tbstates"("name", "acronym");

-- CreateIndex
CREATE UNIQUE INDEX "tbcities_name_key" ON "tbcities"("name");

-- AddForeignKey
ALTER TABLE "tbusers" ADD CONSTRAINT "tbusers_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbmenus" ADD CONSTRAINT "tbmenus_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpages" ADD CONSTRAINT "tbpages_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbexpensestypes" ADD CONSTRAINT "tbexpensestypes_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbuserroles" ADD CONSTRAINT "tbuserroles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbusers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbuserroles" ADD CONSTRAINT "tbuserroles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "tbroles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbrolepermissions" ADD CONSTRAINT "tbrolepermissions_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "tbroles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbrolepermissions" ADD CONSTRAINT "tbrolepermissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "tbpermissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbuserpermissions" ADD CONSTRAINT "tbuserpermissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbusers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbuserpermissions" ADD CONSTRAINT "tbuserpermissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "tbpermissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbconfigs" ADD CONSTRAINT "tbconfigs_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "tbcompanys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbmodules" ADD CONSTRAINT "tbmodules_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "tbcompanys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbproducts" ADD CONSTRAINT "tbproducts_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcompanys" ADD CONSTRAINT "tbcompanys_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcompanybranches" ADD CONSTRAINT "tbcompanybranches_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "tbcompanys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcompanybranches" ADD CONSTRAINT "tbcompanybranches_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpersons" ADD CONSTRAINT "tbpersons_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpersoncontacts" ADD CONSTRAINT "tbpersoncontacts_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "tbpersons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpersoncontacts" ADD CONSTRAINT "tbpersoncontacts_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpersonaddresses" ADD CONSTRAINT "tbpersonaddresses_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "tbpersons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpersonaddresses" ADD CONSTRAINT "tbpersonaddresses_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbstates" ADD CONSTRAINT "tbstates_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "tbcountries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcities" ADD CONSTRAINT "tbcities_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "tbcountries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcities" ADD CONSTRAINT "tbcities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "tbstates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
