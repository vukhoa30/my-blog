-- create database my_blog;
-- reconnect with database "my_blog"
create table categories (
  id serial primary key,
  name varchar unique
);
create table posts (
  id serial primary key,
  category_id int not null,
  title varchar not null,
  summary varchar,
  content varchar not null,
  foreign key (category_id) references categories(id)
);
create table comments (
  id serial primary key,
  post_id int not null,
  content varchar not null,
  foreign key (post_id) references posts(id)
);
create table users (
  id serial primary key,
  username varchar(50) unique,
  hashed_password varchar not null,
  admin boolean not null,
  full_name varchar(50),
  email varchar(50)
);
create table feedbacks (
  id serial primary key,
  content varchar not null,
  user_id int,
  full_name varchar(50),
  email varchar(50)
);
create table event_types (
  id serial primary key,
  name varchar(50) unique
);
create table events (
  id serial primary key,
  type_id serial not null,
  time timestamp not null,
  data JSON not null,
  foreign key (type_id) references event_types(id)
);
insert into categories(name) values ('Thoughts');
insert into categories(name) values ('Development');
insert into categories(name) values ('Movies');
insert into categories(name) values ('Games');
insert into categories(name) values ('Musics');

insert into event_types(name) values ('postQueried');
insert into event_types(name) values ('postCreated');
insert into event_types(name) values ('postModified');
insert into event_types(name) values ('postRemoved');

insert into event_types(name) values ('commentCreated');
insert into event_types(name) values ('commentModified');

insert into event_types(name) values ('userCreated');

insert into event_types(name) values ('feedbackCreated');
