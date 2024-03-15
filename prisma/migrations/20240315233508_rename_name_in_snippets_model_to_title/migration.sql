/*
  Warnings:

  - You are about to drop the column `name` on the `Snippets` table. All the data in the column will be lost.
  - Added the required column `title` to the `Snippets` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Snippets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL
);
INSERT INTO "new_Snippets" ("code", "id") SELECT "code", "id" FROM "Snippets";
DROP TABLE "Snippets";
ALTER TABLE "new_Snippets" RENAME TO "Snippets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
