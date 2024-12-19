-- CreateTable
CREATE TABLE "Sign" (
    "id" SERIAL NOT NULL,
    "aspect" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Sign_pkey" PRIMARY KEY ("id")
);
