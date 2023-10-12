drop table user_tbl;
drop table member;
drop table free_board;
drop table food_board;
drop table travel_board;
drop table image_attachment;
drop table image_attachment_mapping;

-- 회원 테이블
create table member (
    member_id varchar2(50),
    name varchar2(10),
    password varchar2(300) not null,
    email varchar2(100),
    phone varchar2(20),
    constraints pk_member_id primary key(member_id)
);

select * from food_board;
-- 맛집 게시판 테이블
create table food_board(
    food_id number,
    food_member_id varchar2(50) not null,
    food_title varchar2(500) not null,
    food_content varchar2(4000) not null,
    food_created_at date default sysdate,
    food_image_id number,
    constraints pk_food_id primary key(food_id),
    constraints fk_food_member_id foreign key(food_member_id) references member(member_id) on delete cascade,
    constraints fk_food_image_id foreign key(food_image_id) references image_attachment(image_id) on delete cascade
);

select * from image_attachment;

-- 이미지 파일 테이블
create table image_attachment (
    image_id number,
    origin_name varchar2(500) not null,
    unique_name varchar2(500) not null,
    image_file_size number not null,
    food_id number,
    constraints pk_image_attachment_id primary key(image_id),
    constraints fk_image_attachment_food_id foreign key(food_id) references food_board(food_id)  on delete cascade
);


create table food_board(
    food_id number,
    food_member_id varchar2(50) not null,
    food_title varchar2(500) not null,
    food_content varchar2(4000) not null,
    food_created_at timestamp default systimestamp,
    constraints pk_food_id primary key(food_id),
    constraints fk_food_member_id foreign key(food_member_id) references member(member_id) on delete cascade
);

insert into food_board values (
SEQ_FOOD_BOARD_ID.nextval, '테스트하려고 넣었습니다.', default, 'honggd', '안녕하세요~'
);

