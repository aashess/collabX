/*
  Warnings:

  - You are about to drop the column `additionalDetailsId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cover_Picture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_Id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `AdditionalDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pinned` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pinned" DROP CONSTRAINT "Pinned_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_additionalDetailsId_fkey";

-- DropIndex
DROP INDEX "User_user_Id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "additionalDetailsId",
DROP COLUMN "cover_Picture",
DROP COLUMN "user_Id",
DROP COLUMN "user_name",
ADD COLUMN     "coverPicture" TEXT,
ADD COLUMN     "profileCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;

-- DropTable
DROP TABLE "AdditionalDetails";

-- DropTable
DROP TABLE "Pinned";

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");
