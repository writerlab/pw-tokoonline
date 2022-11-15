# Jobsheet 3
Pemrograman Web & perangkat Bergerak. 
Tahun 2022/2023.

## Judul: Membuat Dark Mode dengan Javascript

Lanjutan dari jobsheet 2.

---
#### A. Tools Kebutuhan
- Text editor (Visual Studio Code)
- Web browser (Google Chrome)

#### B. Goal
Goal dalam jobsheet ini membuat `Dark Mode` (Mode gelap) sederhana dengan satu tombol.
![SS Goal](/pw-tokoonline/ss/ss-jobsheet-3.gif)

#### C. Membuat Button Darkmode
- Didalam `<header>` buat `button` yang dibungkus `div` dengan *class* **`darkmode`**

```
  <div class="darkmode">
    <button id="btn-darkmode"></button>
  </div>
```

- Tambahkan *attribute*  `onclick` yang memanggil `changeMode()` pada `button`

```
<button id="btn-darkmode" onclick="changeMode()"></button>
```

#### D. Styling Button
- Buka file `style.css`
- Tetapkan posisi *button* secara `absolute`

```css
header .darkmode {
  position: absolute;
  top: 1vh;
  right: 1vh;
}
```

- Beriktan *style* untuk button `#btn-darkmode`

```css
#btn-darkmode {
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  border: none;
  font-size: 3vh;
  cursor: pointer;
  background-color: transparent;
}
```

#### E. Membuat function Dark Mode
- Buat file `darkmode.js`
- Bubuhkan sebelum tutup `</body>` pada file `index.html`

```
  <script src="darkmode.js"></script>
  
  </body>
</html>
```

- Buka file `darkmode.js`
- Buat *variable* `btn` yang diisi element button dikaitkan dengan `id`

```js
let btn = document.getElementById('btn-darkmode')
```

- Isikan nilai awal/default untuk label dan default mode pada *button*

```js
btn.innerHTML = "☀️"
let defaultMode = "light"
```

- Buat function `changeMode()`

```js
function changeMode() {

}
```

- Buat control program jika nilai `defaultMode` sama dengan atau tidak sama dengan dan ubah nilai *style*-nya

```js
function changeMode() {
  if(defaultMode === "light") {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    btn.innerHTML = "🌙"
    defaultMode = "dark"
  } else {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    btn.innerHTML = "☀️"
    defaultMode = "light"
  }
}
```