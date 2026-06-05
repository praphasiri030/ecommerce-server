/*
  Warnings:

  - You are about to drop the column `stripePaymentId` on the `order` table. All the data in the column will be lost.
  - Added the required column `paymentId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `stripePaymentId`,
    ADD COLUMN `paymentId` VARCHAR(191) NOT NULL;
