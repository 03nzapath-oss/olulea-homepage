<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# OLU'LEA (オルレア) - ヘアーリラクゼーションサロン

群馬県みどり市のヘアーリラクゼーションサロン OLU'LEA の公式ウェブサイト

## セットアップ

**必要な環境:** Node.js

1. 依存パッケージをインストール:
   ```bash
   npm install
   ```

2. `.env.local`ファイルに`GEMINI_API_KEY`を設定

3. 開発サーバーを起動:
   ```bash
   npm run dev
   ```

4. ブラウザで `http://localhost:3000` を開く

## 本番ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに出力されます。

## 画像の管理方法

このプロジェクトでは、画像を簡単に管理できるように設計されています。

### 画像の配置場所

すべての画像は `public/images/` フォルダに配置します:

```
public/
└── images/
    ├── hero/          # ヒーロー画像
    │   ├── main.jpg   # メインページのヒーロー画像
    │   └── store.jpg  # 店舗外観の画像
    └── gallery/       # ギャラリー画像
        ├── 1.jpg
        ├── 2.jpg
        ├── 3.jpg
        ├── 4.jpg
        ├── 5.jpg
        └── 6.jpg
```

### 画像の追加・変更手順

1. **画像ファイルを準備**
   - 推奨形式: JPG, PNG, WebP
   - ヒーロー画像: 1920x1080px 以上
   - ギャラリー画像: 800x800px 以上（正方形）

2. **画像を配置**
   - `public/images/` の適切なフォルダに画像ファイルをコピー
   - ファイル名は `config/images.ts` で指定されている名前に合わせる

3. **画像設定ファイルを更新**（オプション）
   - ギャラリーに画像を追加する場合は `config/images.ts` を編集
   - 画像のaltテキストも更新できます

### 画像設定ファイル (`config/images.ts`)

画像のパスを一元管理しています。画像のaltテキストやパスを変更する場合はこのファイルを編集してください。

```typescript
export const IMAGES = {
  hero: {
    main: '/images/hero/main.jpg',
    store: '/images/hero/store.jpg',
  },
  gallery: [
    { id: 1, path: '/images/gallery/1.jpg', alt: 'サロン内観1' },
    // ... 追加の画像
  ],
};
```

### 画像が見つからない場合

画像ファイルが見つからない場合、自動的にプレースホルダー画像が表示されます。
実際の画像を配置するまで、開発を継続できます。

## プロジェクト構成

- `pages/` - ページコンポーネント
- `components/` - 再利用可能なコンポーネント
- `config/` - 設定ファイル
- `public/` - 静的ファイル（画像など）
- `constants.ts` - サロン情報、メニュー情報など

## 技術スタック

- React 19
- TypeScript
- Tailwind CSS v4
- Vite
- React Router
