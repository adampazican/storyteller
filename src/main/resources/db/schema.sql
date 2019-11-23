create table if not exists "user"
(
    id serial not null
        constraint user_pk
            primary key,
    username text not null,
    password text not null
);

alter table "user" owner to postgres;

create unique index if not exists user_username_uindex
    on "user" (username);

create table if not exists article
(
    id serial not null
        constraint article_pk
            primary key,
    user_id integer not null,
    date timestamp with time zone default CURRENT_TIMESTAMP,
    title text not null,
    body text not null,
    active boolean default false not null,
    category_id integer default 0 not null,
    visitor_count integer default 0
);

alter table article owner to postgres;

create table if not exists comment
(
    id serial not null
        constraint comment_pk
            primary key,
    user_id integer not null,
    body text not null,
    date timestamp with time zone,
    article_id integer not null
);

alter table comment owner to postgres;

create table if not exists comment_comment
(
    comment_id integer not null,
    comment_id_2 integer not null
        constraint comment_comment_pk
            primary key
);

alter table comment_comment owner to postgres;