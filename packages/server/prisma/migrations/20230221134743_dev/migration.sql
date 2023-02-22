-- CreateTable
CREATE TABLE "MessageModel" (
    "messageId" SERIAL NOT NULL,
    "messageText" TEXT NOT NULL,
    "messageAuthor" TEXT NOT NULL,
    "sendAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "MessageModel_messageId_key" ON "MessageModel"("messageId");

-- AddForeignKey
ALTER TABLE "MessageModel" ADD CONSTRAINT "MessageModel_messageAuthor_fkey" FOREIGN KEY ("messageAuthor") REFERENCES "UserModel"("login") ON DELETE RESTRICT ON UPDATE CASCADE;
