BEGIN;
drop table if exists users,
posts,
comments cascade;
CREATE table users(
    id serial primary key,
    username varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null
);
CREATE table posts(
    id serial primary key,
    content text not null,
    userId int not null,
    FOREIGN KEY (userId) REFERENCES users (id)
);
CREATE table comments(
    id serial primary key,
    content text not null,
    postId int not null,
    userId int not null,
    FOREIGN KEY (postId) REFERENCES posts (id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
-- INSERT INTO users VALUES(1,'beko','dbakeza2002@gmail.com','123');
-- INSERT INTO users VALUES(2,'bakeza','dbakeza2002@hotmail.com','123');
-- INSERT INTO posts VALUES(1 , 'testing  post 1 for user 1',1);
-- INSERT INTO posts VALUES(2 , 'testing  post 2 for user 1',1);
-- INSERT INTO posts VALUES(3 , 'testing  post 3 for user 2',2);
-- INSERT INTO comments VALUES(1,' comment for user 1 in post 1',1,1);
-- INSERT INTO comments VALUES(2,' comment for user 2 in post 1',1,2);
-- INSERT INTO comments VALUES(3,' comment for user 2 in post 1',2,2);
-- INSERT INTO comments VALUES(4,' comment for user 2 in post 1',2,2);
COMMIT;