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
|id|
|name|
|e-mail|

### Associastion
- has_many :massages
- belongs_to :group

## groupsテーブル

|Column|Type|Options|

### Asociation
- has_many :users
- has_many :massages

## messageテーブル

|Column|Type|Options|

### Asociation
- belongs_to :user
- belongs_to :group