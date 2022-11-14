# Jobsheet 2
Pemrograman Web & perangkat Bergerak. 
Tahun 2022/2023.

## Judul: HTML Layout & CSS
---
#### A. Tools Kebutuhan
1. Text editor (Visual Studio Code)
2. Web browser (Google Chrome)

#### B. Goal
Goal dalam jobsheet ini membuat layout sederhana untuk menampilkan daftar item produk.
![SS Goal](/pw-tokoonline/ss/ss-jobsheet-2.png)

#### C. Membuat Kerangka Layout dengan HTML
Lanjutan dari jobsheet 1.

1. Buat `<div>` dengan *class* **`items`**
```html
...

<div class="items">

</div>

...
```
2. Buat `<div>` dengan *class* **`item`** didalam **`items`**
```html
...

<div class="items">
  <div class="item">

  </div>
</div>

...
```
3. Buat dua `<div>` dengan *class* **`foto`** dan **`content`** didalam **`item`**
```html
...

<div class="items">
  <div class="item">
    <div class="foto"></div>
    <div class="content"></div>
  </div>
</div>

...
```
4. Isikan placeholder untuk foto dan content: nama produk, harga dan deskripsi
```html
...

<div class="items">
  <div class="item">
    <div class="foto">
      foto/gambar
    </div>
    <div class="content">
      <h1>Judul produk</h1>
      <h4>Rp10000</h4>
      <p>deskrpsi produk disini...</p>
    </div>
  </div>
</div>

...
```
5. Menyiapkan foto untuk placeholder
5.1 Buat folder `assets`
5.2 Buat folder `img` didalam folder `assets`
5.3 Copy-Paste contoh foto untuk placeholder difolder `img` (misal: `foto.jpg`)
6. Panggil foto/gambar dengan tag `<img>` dibagian `<item>`
```html
...

<div class="foto">
  <img src="./assets/img/foto.jpg" class="foto-produk" alt="foto produk">
</div>

...
```


#### C. Styling dengan CSS
1. Buat file `style.css`
2. Panggil `style.css` didalam file `index.html` bagian `<head>`
```html
<head>
  ...
  <link rel="stylesheet" href="style.css">
</head>
```
3. Didalam file `style.css` berikan style untuk bagian `<header>`
```css
h1 {
  text-align: center;
  color: tomato;
}
```
4. Berikan style untuk `items` dan `item` dengan display `flex`, border bottom setebal 2 piksel berwarna abu-abu
```css
...

.items {
  width: 100%;
}

.items .item {
  display: flex;
  margin-bottom: 10px;
  border-bottom: 2px solid gray;
}
```
5. Berikan style untuk pembungkus `foto`: lebar dan posisi konten foto
```css
...

.items .item .foto {
  width: 100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
```
6. Berikan style jarak padding kiri untuk pembungkus `content`
```css
...

.items .item .content {
  padding: 0 7px 0 7px;
}
```
7. Berikan style lebar untuk ukuran foto pada *class* `foto-produk`
```css
...

.items .item .foto .foto-produk {
  width: 100%;
}
```
