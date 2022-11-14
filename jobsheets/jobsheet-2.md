# Jobsheet 2
Pemrograman Web & perangkat Bergerak. 
Tahun 2022/2023.

## Judul: HTML Layout & CSS

Lanjutan dari jobsheet 1.

---
#### A. Tools Kebutuhan
- Text editor (Visual Studio Code)
- Web browser (Google Chrome)

#### B. Goal
Goal dalam jobsheet ini membuat layout sederhana untuk menampilkan daftar item produk.
![SS Goal](/pw-tokoonline/ss/ss-jobsheet-2.png)

#### C. Membuat Kerangka Layout dengan HTML

- Buat `<div>` dengan *class* **`items`** setelah `<header>`

```
<div class="items">

</div>
```

- Buat `<div>` dengan *class* **`item`** didalam **`items`**

```
<div class="items">
  <div class="item">

  </div>
</div>
```

- Buat dua `<div>` dengan *class* **`foto`** dan **`content`** didalam **`item`**

```
<div class="items">
  <div class="item">
    <div class="foto"></div>
    <div class="content"></div>
  </div>
</div>
```

- Isikan *placeholder* untuk foto dan content: nama produk, harga dan deskripsi

```
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
```

- Menyiapkan foto untuk placeholder
  - Buat folder `assets`
  - Buat folder `img` didalam folder `assets`
  - Copy-Paste contoh foto untuk placeholder difolder `img` (misal: `foto.jpg`)
- Panggil foto/gambar dengan tag `<img>`

```
<div class="foto">
  <img src="./assets/img/foto.jpg" class="foto-produk" alt="foto produk">
</div>
```

#### C. Styling dengan CSS
- Buat file `style.css`
- Panggil `style.css` didalam file `index.html` bagian `<head>`

```
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

- Didalam file `style.css` berikan style untuk bagian `<h1>`

```css
h1 {
  text-align: center;
  color: tomato;
}
```

- Berikan style untuk `items` dan `item` dengan display `flex`, border bottom setebal 2 piksel berwarna abu-abu

```css
.items {
  width: 100%;
}

.items .item {
  display: flex;
  margin-bottom: 10px;
  border-bottom: 2px solid gray;
}
```

- Berikan style untuk pembungkus `foto`: lebar dan posisi konten foto

```css
.items .item .foto {
  width: 100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
```

- Berikan style jarak padding kiri untuk pembungkus `content`

```css
.items .item .content {
  padding: 0 7px 0 7px;
}
```

- Berikan style lebar untuk ukuran foto pada *class* `foto-produk`

```css
.items .item .foto .foto-produk {
  width: 100%;
}
```
