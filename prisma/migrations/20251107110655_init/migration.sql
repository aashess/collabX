-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "user_Id" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "IsVerified" BOOLEAN NOT NULL DEFAULT false,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "cover_Picture" TEXT,
    "additionalDetailsId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pinned" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Pinned_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdditionalDetails" (
    "id" TEXT NOT NULL,
    "profileView" INTEGER NOT NULL,
    "interested" INTEGER NOT NULL,

    CONSTRAINT "AdditionalDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_Id_key" ON "User"("user_Id");

-- CreateIndex
CREATE UNIQUE INDEX "AdditionalDetails_id_key" ON "AdditionalDetails"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_additionalDetailsId_fkey" FOREIGN KEY ("additionalDetailsId") REFERENCES "AdditionalDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pinned" ADD CONSTRAINT "Pinned_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
