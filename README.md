# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|password|integer|null: false|
|username|integer|null: false|
|e-mail|integer|null: false|
|group_id|integer|null: false|

### Associastion
- has_many :posts
- has_many :groups, through: :groups_users
- has_many :groups_users
## groupsテーブル

|Column|Type|Options|
|groupname|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Asociation
- has_many :users, through: :groups_users
- has_many :posts
- has_many :groups_users

## postsテーブル

|Column|Type|Options|
|text|text||
|image|string||
|user_id|intenger|null: false, foreign_key: true|

### Asociation
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user