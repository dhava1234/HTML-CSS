// Function untuk menampilkan alert
function greet(name) {
    alert("Halo, " + name + "! Selamat pagi.");
}

// Function untuk menampilkan nama di console
function logName(name) {
    console.log("Nama pengguna:", name);
}

// Function untuk menampilkan nama di halaman web
function writeName(name) {
    document.write("Halo, " + name + "! Selamat datang di website.<br>");
}

// Meminta input pengguna
let namaUser = prompt("Siapakah nama Anda?");

// Memanggil semua function dengan input pengguna
greet(namaUser);
logName(namaUser);
writeName(namaUser);