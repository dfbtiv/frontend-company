// ambil elemen tombol berdasarkan id yang dibuat di html
const tombol = document.getElementById('tombol-hero');

// tamabah event listener utk tombol "click" (ketika di klik)
tombol.addEventListener('click', function(){
    alert('halo, javascript km sudah berhasil terhubung');
    
    // contoh utk ubah background tombol setelah di klik
    tombol.style.backgroundColor="pink";
    tombol.innerText="sudah diklik";
})
