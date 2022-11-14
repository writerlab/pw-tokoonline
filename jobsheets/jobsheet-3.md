# Jobsheet 3
Pemrograman Web & perangkat Bergerak. 
Tahun 2022/2023.

## Judul: Membuat Dark Mode dengan Javascript
---
#### A. Tools Kebutuhan
1. Text editor (Visual Studio Code)
2. Web browser (Google Chrome)

#### B. Goal
Goal dalam jobsheet ini membuat `Dark Mode` (Mode gelap) sederhana dengan satu tombol.
![SS Goal](/ss/ss-jobsheet-3.gif)

#### C. Membuat Button Darkmode
Lanjutan dari jobsheet 2.

1. Didalam `<header>` buat `<button>` yang dibungkus `<div>` dengan *class* **`darkmode`**
```html
...

  <div class="darkmode">
    <button id="btn-darkmode"></button>
  </div>

...
```
2. Tambahkan *attribute*  `onclick` yang memanggil `changeMode()` pada `<button>`
```html
...
<button id="btn-darkmode" onclick="changeMode()"></button>
...
```

#### C. Styling Button
Buka file `style.css`
1. Tetapkan posisi *button* secara `absolute`
```css
...

header .darkmode {
  position: absolute;
  top: 1vh;
  right: 1vh;
}
```
2. Beriktan *style* untuk button `#btn-darkmode`
```css
...

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

#### D. Membuat function Dark Mode
1. Buat file `darkmode.js`
2. Bubuhkan sebelum tutup `</body>` pada file `index.html`
```html
...

  <script src="darkmode.js"></script>
  
  </body>
</html>
```
2. Buka file `app.js`
3. Buat *variable* `btn` yang diisi element button dikaitkan dengan `id`
```js
let btn = document.getElementById('btn-darkmode')
```
4. Isikan nilai awal/default untuk label dan default mode pada *button*
```js
...

btn.innerHTML = "☀️"
let defaultMode = "light"
```
5. Buat function `changeMode()`
```js
function changeMode() {

}
```
6. Buat control program jika nilai `defaultMode` sama dengan atau tidak sama dengan dan ubah nilai *style*-nya
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