-- DropIndex
DROP INDEX `Post_userId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `post` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `updatedAt` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
