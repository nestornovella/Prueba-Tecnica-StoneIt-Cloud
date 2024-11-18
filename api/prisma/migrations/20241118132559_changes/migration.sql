-- CreateTable
CREATE TABLE "Wallpapers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "wallpaper" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Wallpapers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallpapers_userId_key" ON "Wallpapers"("userId");
