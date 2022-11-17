var app = new Vue({
  el: '#app',
  data() {
    return {
      title: 'Toko Online PKK',
      deskripsi: 'Buy 1 Pay 1',
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
      ]
    }
  },
})