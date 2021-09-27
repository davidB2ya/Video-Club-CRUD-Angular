use moviedb;

create table actor(
    act_id int not null auto_increment,
    act_fname varchar(20),
    act_lname varchar(20),
    act_gender varchar(10),
    primary key(act_id)
    );
create table director(
    dir_id int not null auto_increment,
    dir_fname varchar(20),
    dir_lname varchar(20),
    primary key(dir_id)
    );

create table moviedirection(
    dir_id int not null,
    mov_id int not null);


create table moviecast(
    act_id int not null,
    mov_id int not null,
    role varchar(40));
create table movie(
    mov_id int not null auto_increment,
    mov_title varchar(50),
    mov_year int,
    mov_time int,
    mov_lang varchar(50),
    mov_dt_rel date null,
    mov_rel_country varchar(50),
    primary key(mov_id)
    );

create table reviewer(
    rev_id int not null auto_increment,
    rev_name varchar(30),
     primary key(rev_id)
    );

      
create table genres(
    gen_id int not null auto_increment,
    gen_title varchar(20),
    primary key(gen_id)
    );

create table moviegenres(
    mov_id int not null,
    gen_id int not null);



create table rating(
    mov_id int not null,
    rev_id int not null,
    rev_stars int,
    num_o_ratings int
    );

alter table moviedirection add foreign key (dir_id) references director(dir_id);
alter table moviedirection add foreign key (mov_id) references movie(mov_id);


alter table moviecast add foreign key (act_id) references actor (act_id);
alter table moviecast add foreign key (mov_id) references movie (mov_id);


alter table moviegenres add foreign key (gen_id) references genres(gen_id);
alter table moviegenres add foreign key (mov_id) references movie(mov_id);

alter table rating add foreign key (rev_id) references reviewer(rev_id);
alter table rating add foreign key (mov_id) references movie(mov_id);



load data infile 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\movie.txt' into table actor fields terminated by '|' lines terminated by '\r\n';

load data infile 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\movie.txt' into table moviegenres fields terminated by '|' lines terminated by '\r\n';