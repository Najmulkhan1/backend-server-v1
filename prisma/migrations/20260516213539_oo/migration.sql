-- AlterTable
ALTER TABLE "User" ADD COLUMN     "codeExpiredAt" TIMESTAMP(3),
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verificationCode" TEXT;
