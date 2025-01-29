# Prisma + NestJS + Next.JS

## 概要

本リポジトリは以下のリンク先のハンズオンで使用したリポジトリになる。
https://zenn.dev/waddy/books/graphql-nestjs-nextjs-bootcamp

## メモ

GraphQL の開発にあたり、コードファーストとスキーマファーストの選択肢がある。

- コードファースト: GraphQL ライブラリが検知できるよう、TypeScript コード中にヒントとなるスニペットを埋め込む。ライブラリが自動で schema.gql を生成する
- スキーマファースト: schema.gql を絶対王者としてこれを開発者がメンテナンスする。ライブラリが TypeScript の型情報を生成する
  エンジニアがコードに集中できる、コードファーストの方がよさそう。
