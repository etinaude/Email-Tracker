BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Trackers" (
	"key"	TEXT,
	"title"	TEXT,
	"date"	TEXT,
	"opens"	TEXT,
	"sent"	TEXT,
	"type"	TEXT,
	PRIMARY KEY("key")
);
CREATE TABLE IF NOT EXISTS "Email" (
	"Key"	INTEGER UNIQUE,
	"Title"	TEXT,
	"Date Sent"	TEXT,
	"Opens"	TEXT,
	"Sent To"	TEXT,
	"Type"	TEXT,
	PRIMARY KEY("Key")
);
INSERT INTO "Trackers" VALUES ('id1601441480187','Website','3.8.2020-17:51 ','1','.','Tracker');
INSERT INTO "Trackers" VALUES ('idTracker','Tracker','5/9/2020 - 10:33 ','0','','Tracker');
INSERT INTO "Trackers" VALUES ('idgithub','Github','5/9/2020 - 10:34 ','0','','Tracker');
INSERT INTO "Trackers" VALUES ('idwebsite','Portfolio','5/9/2020 - 10:36 ','0','','Tracker');
INSERT INTO "Email" VALUES (1,NULL,NULL,NULL,NULL,NULL);
COMMIT;
