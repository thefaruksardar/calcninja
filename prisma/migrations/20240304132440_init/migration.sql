-- CreateTable
CREATE TABLE "Groups" (
    "id" TEXT NOT NULL,
    "groupname" TEXT NOT NULL,
    "divide" TEXT NOT NULL,
    "membersname" TEXT NOT NULL,
    "splitmembers" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);
