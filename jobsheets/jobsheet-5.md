# Jobsheet 5
Pemrograman Web & perangkat Bergerak. 

Tahun 2022/2023.

## Judul: Controller (Conditional & Loops)

Lanjutan dari jobsheet 4.

---

#### A. Tools Kebutuhan
- Vue
- Text editor (Visual Studio Code)
- Web browser (Google Chrome)

#### B. Goal
Goal dalam jobsheet ini memahami dan mempraktikkan Vue directive `v-if` dan `v-for`.

*Docs & reference: [https://v2.vuejs.org](https://v2.vuejs.org)*

#### C. v-if
- Buka file `app.js`
- Buat properti `show: true,` didalam data()

```js
data() {
  return {
    title: 'Toko Online PKK',
    deskripsi: 'Menjual yang lunak-lunak',
    show: true,
  }
},
```

- Buka file `index.html`
- Pada elemen `<p>{{ deskripsi }}</p>` tambahkan `v-if` degan nilai `show` didalam `<p>`

```js
<p v-if="show">Cilok dan yang lunak-lunak</p>
```

- Jalankan Live Server dan perhatikan hasilnya
- Ubah nilai properti `show: false` dan liat hasilnya

---

#### D. v-for
- Kembali ke `app.js`
- Buat `items` sebagai data dummy dalam bentuk **JSON** di `data()` untuk daftar produk

```js
data() {
  return {
    title: 'Toko Online PKK',
    deskripsi: 'Menjual yang lunak-lunak',
    show: true,
    items: [
      {
        id: 1,
        nama: 'Cilok'
      },
      {
        id: 2,
        nama: 'Baso Tusuk'
      },
      {
        id: 3,
        nama: 'Siomay'
      },
    ],
  }
},
```

- Buka kembali `index.html`
- Render properti `items` menggunakan `v-for` pada elemen `<div id="item">` didalam HTML

```bash
<div class="items">
  <div v-for="item in items" :key="item.id" class="item">
    <div class="foto">
      <img src="./assets/img/foto.jpg" class="foto-produk" alt="foto produk">
    </div>
    <div class="content">
      <h2>{{ item.nama }}</h2>
      <h3>Rp1000</h3>
      <p>ini deskripsi</p>
    </div>
  </div>
</div>
```

- Perhatikan hasilnya

![SS Goal](/pw-tokoonline/ss/ss-jobsheet-5.png)
