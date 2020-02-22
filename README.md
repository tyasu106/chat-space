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
|user_id|integer|null: false, foreign_key: true|
|user_name|integer|null: false, foreign_key: true|
|e-mail|integer|null: false, foreign_key: true|

### Associastion
- has_many :massages
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|group_id|integer|null: false, foreign_key: true|
|group_name|integer|null: false, foreign_key: true|
|menber_name|integer|null: false, foreign_key: true|

### Asociation
- has_many :users
- has_many :massages

## messageテーブル

|Column|Type|Options|
|text|text|
|image|string|
|create_at|datetime|

### Asociation
- belongs_to :user
- belongs_to :group