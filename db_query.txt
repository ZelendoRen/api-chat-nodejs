CREATE DATABASE "Chat DB"
	WITH
	OWNER = postgres
	ENCODING = 'UTF8'
	LC_COLLATE = 'Ukrainian_Ukraine.1251'
	LC_CTYPE = 'Ukrainian_Ukraine.1251'
	TABLESPACE = pg_default
	CONNECTION LIMIT = -1;

CReate TABLE Users
(
    Token NOT NULL PRIMARY KEY,
    NickName VARCHAR NOT NULL
);

CREATE TABLE ListOfMessages
(
    ID SERIAL NOT NULL PRIMARY KEY,
    Message VARCHAR,
    Token NOT NULL,
    Date date,
    Time VARCHAR,

    FOREIGN KEY (Token) REFERENCES Users (Token)
);
