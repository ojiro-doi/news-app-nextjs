# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリの設定(なんでもいい)
WORKDIR /app

# パッケージインストールに必要なファイルをコピー
COPY package.json .
COPY package-lock.json .

# 依存関係のインストール
RUN npm install

# 残りのアプリケーションコードをコピー
COPY . .

# デフォルトコマンド
CMD ["npm", "run", "dev"]