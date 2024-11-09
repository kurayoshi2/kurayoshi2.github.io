# システムアーキテクチャ

Kurayoshiteikokuは、フロントエンドとバックエンドを持たない、**完全にクライアントサイドのSNS**です。すべてのデータ（ツイート、ユーザー情報など）は、ブラウザのローカルストレージに保存されます。

## ユーザー登録・ログイン

- ユーザー情報（ユーザー名）はローカルストレージに保存され、ログイン後にユーザー名が記録されます。
- ログインは、**ユーザー名の入力**のみでシンプルに行われます。

## ツイート

- ユーザーが投稿したツイートは、ローカルストレージに保存され、ページを更新してもデータが保持されます。
- ツイート内容は、**テキスト**のみで、画像や動画などのメディアはサポートしません。

## フォロー機能

- フォロー関係もローカルストレージに保存され、ユーザーがフォローする他のユーザーのツイートがタイムラインに表示されます。

## タイムライン

- タイムラインには、ユーザーが**フォローしている**他のユーザーのツイートが表示されます。