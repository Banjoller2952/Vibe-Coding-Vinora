let pesan: string = "Halo, ini adalah template dasar TypeScript!";
console.log(pesan);

// Mari kita belajar sedikit dasar TypeScript!

// 1. Tipe Data Dasar
let nama: string = "Budi";
let umur: number = 25;
let sudahMenikah: boolean = false;

// 2. Array
let hobi: string[] = ["Membaca", "Berenang", "Coding"];
let nilai: Array<number> = [80, 90, 85];

// 3. Object & Interface
// Interface digunakan untuk mendefinisikan bentuk dari sebuah object
interface Orang {
    nama: string;
    umur: number;
    pekerjaan?: string; // Tanda tanya (?) berarti properti ini opsional
}

let karyawan: Orang = {
    nama: "Andi",
    umur: 28,
    pekerjaan: "Programmer"
};

// 4. Function
// Kita bisa memberikan tipe data pada parameter dan nilai kembalian (return)
function sapa(orang: Orang): string {
    return `Halo, nama saya ${orang.nama} dan saya berumur ${orang.umur} tahun.`;
}

console.log(sapa(karyawan));

// --- Manipulasi DOM Sederhana ---
// Kita akan menampilkan pesan ini di halaman web nanti
document.addEventListener("DOMContentLoaded", () => {
    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.innerHTML = `
            <h2>${pesan}</h2>
            <p>${sapa(karyawan)}</p>
        `;
    }
});
