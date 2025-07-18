// UCAPAN NAMA
const nama=prompt("Hallo siapa nama kamu?")
const namaE1=document.getElementById("namaUser");
if(namaE1){
    namaE1.textContent= nama ? nama :"Teman Jaka";
}

// FORM CONTACT VALIDASI(LOGIC)
const form=document.getElementById("contactForm");
const hasilPesan=document.getElementById("hasilPesan");

form.addEventListener("submit", function(event){
event.preventDefault();

const nama=document.getElementById("nama").value.trim();
const email=document.getElementById("email").value.trim();
const pesan=document.getElementById("pesan").value.trim();

if(!nama||!email||!pesan){
    alert("Semua field harus diisi!");
    return;
}

hasilPesan.classList.remove("hidden");
hasilPesan.innerHTML=`Terima kasih, <strong>${nama}</strong> ! Pesan kamu sudah kami terima:<br><em>"${pesan}"</em>`;
form.reset();
});

