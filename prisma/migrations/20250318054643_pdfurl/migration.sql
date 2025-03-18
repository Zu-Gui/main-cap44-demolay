/*
  Warnings:

  - Added the required column `imageUrl` to the `Newspaper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdfUrl` to the `Newspaper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Newspaper" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "pdfUrl" TEXT NOT NULL,
ALTER COLUMN "url" DROP NOT NULL;
