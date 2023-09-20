-- Active: 1694102198031@@127.0.0.1@3306@system_health_mobile
create database system_health_mobile;
use system_health_mobile;

SET FOREIGN_KEY_CHECKS=0;

drop table if exists blood_type;
create table blood_type(
    id_blood_type int not null AUTO_INCREMENT PRIMARY KEY,
    blood_type varchar(3) not null unique
);

insert into blood_type(id_blood_type, blood_type) values (1,'A+'),(2,'A-'),(3,'B+'),(4,'B-'),(5,'AB+'),(6,'AB-'),(7,'o+'),(8,'O-');
drop table if exists user;
create table user(
    id_user int not null AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) not null,
    last_name VARCHAR(50) not null,
    user_name VARCHAR(50) not null,
    email VARCHAR(50) not null,
    user_password VARCHAR(50) not null,
    birth_date DATE not null,
    heigth float not null,
    weigth float not null,
    id_blood_type int,
    FOREIGN KEY (id_blood_type) references blood_type(id_blood_type), 
    status_ boolean not null
);

drop table if exists user_contact;
create table user_contact(
    id_user_contact int not null AUTO_INCREMENT PRIMARY KEY,
    id_user int,
    FOREIGN KEY(id_user) references user(id_user),
    phone_number varchar(9) not null
);

drop table if exists reminder;
create table reminder(
    id_reminder int not null AUTO_INCREMENT PRIMARY KEY,
    id_user int,
    FOREIGN KEY(id_user) references user(id_user),
    date_ DATE not null,
    time_ TIME not null,
    reminder varchar(100) not null,
    status_ boolean not null
);

drop table if exists drug;
create table drug(
    id_drug int not null AUTO_INCREMENT PRIMARY KEY,
    drug varchar(60) not null
);

insert into drug(id_drug, drug) values (1,'acetaminofen'),(2,'aspirina'),(3, 'loratadina');

drop table if exists allergy;
create table allergy(
    id_allergy int not null AUTO_INCREMENT PRIMARY KEY,
	allergy varchar(70) not null
);

insert into allergy(id_allergy, allergy) values (1,'animales'),(2,'medicamentos');

drop table if exists chronic_diseases;
create table chronic_diseases(
    id_chronic_diseases int not null AUTO_INCREMENT PRIMARY KEY,
    chronic_diseases varchar(70) not null
);
insert into chronic_diseases(id_chronic_diseases,chronic_diseases) values (1,'azucar'), (2,'diabetes');
drop table if exists user_drog;
create table user_drog(
    id_user_drug int not null AUTO_INCREMENT PRIMARY KEY,
    id_user int,
    Foreign Key (id_user) REFERENCES user(id_user),
    id_drug int,
    Foreign Key (id_drug) REFERENCES drug(id_drug),
    status_ boolean not null
);
drop table if exists user_allergy;
create table user_allergy(
    id_user_allergy int not null AUTO_INCREMENT PRIMARY KEY,
    id_user int,
    Foreign Key (id_user) REFERENCES user(id_user),
    id_allergy int,
    Foreign Key (id_allergy) REFERENCES allergy(id_allergy),
    status_ boolean not null
);
drop table if exists user_chronic_diseases;
create table user_chronic_diseases(
    id_user_chronic_diseases int not null AUTO_INCREMENT PRIMARY KEY,
    id_user int,
    Foreign Key (id_user) REFERENCES user(id_user),
    id_chronic_diseases int,
    Foreign Key (id_chronic_diseases) REFERENCES chronic_diseases(id_chronic_diseases),
    status_ boolean not null
);
drop table if exists user_address;
create table user_address(
    id_user_address int not null AUTO_INCREMENT PRIMARY KEY,
    id_user int,
    Foreign Key (id_user) REFERENCES user(id_user),
    address_ varchar(100) not null
);
drop table if exists appointment;
create table appointment(
    id_appointment int not null AUTO_INCREMENT PRIMARY KEY,
    id_user  int,
    Foreign Key (id_user) REFERENCES user(id_user),
    appointment_date DATE not null,
    appointment_place varchar(60) not null,
    clinic_name varchar(50),
    status_ boolean not null
);
drop table if exists info_appointment;
create table info_appointment(
    id_info_appointment int not null AUTO_INCREMENT PRIMARY KEY,
    id_appointment int,
    Foreign Key (id_appointment) REFERENCES appointment(id_appointment),
    blood_preasure varchar(20),
    temperature varchar(3),
    heart_rate varchar(4),
    weigth varchar(3),
    next_appointment_date DATE not null,
    observation varchar(100)
);

SET FOREIGN_KEY_CHECKS=1;