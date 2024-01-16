CREATE TABLE if not exists table_1(
    name VARCHAR(40) NOT NULL,
    age INT,
    sex CHAR(1),
    number INT PRIMARY KEY,
    birthday DATE
);

CREATE TABLE if not exists table_2(
    school_id VARCHAR(40) PRIMARY KEY,
    address VARCHAR(50),
    course VARCHAR(50)
);

CREATE TABLE if not exists table_3(
    id INT PRIMARY KEY,
    house VARCHAR(40),
    address VARCHAR(50),
    school_id VARCHAR(40),
    FOREIGN KEY(school_id) REFERENCES table_2(school_id)
);