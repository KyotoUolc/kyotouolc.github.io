# Kyoto Univ. OLC homepage

京都大学オリエンテーリングクラブの GitHub Pages 用静的サイトです。

旧サイト資料 `kuolc_website_explored_pages_full.md` の本文をできる限り残しつつ、GitHub Pages でそのまま公開できる構成にしています。HTML / CSS / JavaScript だけで動く静的サイトなので、GitHub Pages の公開元を `main` ブランチの root に設定すれば、そのまま配信できます。

## 公開 URL

KyotoUolc 組織の GitHub Pages 組織サイトとして公開する想定です。

```text
https://kyotouolc.github.io/
```

GitHub Pages の組織サイトは、リポジトリ名を `<organization>.github.io` にする必要があります。組織名に大文字が含まれる場合でも、GitHub の案内に従って小文字のリポジトリ名にするのが安全です。

```text
KyotoUolc organization -> kyotouolc.github.io
```

## 移管方針

このリポジトリは、元リポジトリ `kakimoto0225/kuolc-homepage` から KyotoUolc organization 配下の新規 private repository へ移す前提で整理しています。

- 新規リポジトリ: `KyotoUolc/kyotouolc.github.io`
- 主要ブランチ: `main`
- 追加で残すブランチ: `aisore`
- 公開元: `main` branch / root
- 公開 URL: `https://kyotouolc.github.io/`
- 管理に使う GitHub アカウント: `kuolcpr`

GitHub Pages は、リポジトリが private でも、Pages サイト自体は通常インターネットへ公開されます。private repository から Pages を公開できるかは GitHub organization のプランに依存します。Free organization で private repository のまま Pages が使えない場合は、repository を public にするか、GitHub Team 以上への移行が必要です。

## Push 対象

`main` ブランチに入れる対象は、サイト公開に必要な以下のファイル一式です。

- `index.html`
- `pages/`
- `assets/css/`
- `assets/js/`
- `assets/images/`
- `assets/icons/`
- `assets/videos/kuolc-pv.mp4`
- `README.md`

この構成は root 配信を前提にしているため、`docs/` への移動やビルド成果物の生成は不要です。

`LINK_AUDIT.md` と `NEEDED_ASSETS.md` は移管先リポジトリには push しません。

`aisore` ブランチには、元リポジトリの `aisore` ブランチの内容をブランチとしてそのまま push します。運用上は `main` を通常版、`aisore` をアイソレ版の保管・比較用ブランチとして扱います。

## 移管前に編集する箇所

移管に伴って、旧 owner を指していた GitHub リンクを KyotoUolc organization の新リポジトリへ差し替えます。

- `index.html`: フッターの GitHub アイコンリンク
- `assets/js/site.js`: 共通フッター・動的ページ用の GitHub リンク
- `README.md`: 公開 URL、リポジトリ名、移管手順
- `aisore/` を main に残す場合は、`aisore/index.html` と `aisore/assets/js/site.js` も同じリンクへ差し替え

内部リンクは相対パスで書かれているため、`kakimoto0225/kuolc-homepage` から `KyotoUolc/kyotouolc.github.io` へ移しても基本的に修正不要です。

## Push までの流れ

まだこの手順は実行していません。実際に push する段階で、`kuolcpr` として GitHub CLI または Git credential manager にログインしてから進めます。

```powershell
gh auth status
gh auth login
```

GitHub 上で KyotoUolc organization 配下に private repository を作ります。

```powershell
gh repo create KyotoUolc/kyotouolc.github.io --private --source . --remote kyotouolc --description "Kyoto University Orienteering Club website"
```

既に空リポジトリを作成済みの場合は、remote だけ追加します。

```powershell
git remote add kyotouolc https://github.com/KyotoUolc/kyotouolc.github.io.git
```

`main` を push します。

```powershell
git checkout main
git push -u kyotouolc main
```

元リポジトリの `aisore` ブランチ内容を、同名ブランチとして push します。

```powershell
git checkout aisore
git push -u kyotouolc aisore
```

GitHub Pages は、repository settings で `Pages` を開き、`Deploy from a branch`、`main`、`/(root)` を選んで有効化します。反映には数分かかることがあります。

## 運用メモ

- 外部 SNS リンクは現行の公式 X / Instagram を維持しています。
- 旧サイト `https://kuolc.pgw.jp/` へのリンクは、過去資料・大会情報への導線として維持しています。
- 画像・動画はリポジトリ内に同梱しているため、GitHub Pages 上で相対パスのまま表示できます。
- 素材メモとリンク監査メモは、移管先リポジトリには含めません。
