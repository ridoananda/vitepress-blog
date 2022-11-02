---
title: "3 trik cepat menjalankan aplikasi MySQL di Command Prompt (windows)"
description: "Ketika ingin buka aplikasi MySQL di Command Prompt, pasti yang anda lakukan kurang lebih seperti ini"
---

# 3 trik cepat menjalankan aplikasi MySQL di Command Prompt (CMD) Windows

Ketika ingin buka aplikasi MySQL di Command Prompt, pasti yang anda lakukan kurang lebih seperti ini :point_down:
```bash
C:\Users\RidoAnanda>cd ..
C:\Users>cd ..
C:\>cd xampp
C:\xampp>cd mysql
C:\xampp\mysql>cd bin
C:\xampp\mysql\bin>mysql -u root
```
iya gak? iya lah masa nggak hahahha.  
Tapi, ada trik loh biar kita gak capek ngetik seperti itu secara berulang.  
Penasaran? Let's check it out

::: tip
**cd** singkatan dari check directory. yang mana artinya yaitu mengecek direktori/folder pada CMD.  
**cd ..** artinya keluar 1 folder sebelumnya
:::
::: warning
Sesuaikan folder instalasi XAMPP anda, dalam case ini saya install XAMPP di Disk **C**
:::
## 1. Menggunakan `Tab` pada keyboard
Daripada kita ketik `cd ..` lalu `cd ..` lagi, mending kita buat menjadi 1 line perintah, jadi seperti ini :
```bash
C:\Users\RidoAnanda>cd ..\..\
```
Maka kita akan keluar 2 folder secara bersamaan. jadinya seperti ini :
```bash
C:\>
```
Lalu apa gunanya tab? `Tab` pada cmd berfungsi untuk memberikan saran dan menampilkan file/folder yang ada pada folder yang sedang aktif. Jadi ketika kita lupa apa nama file/folder tinggal klik tab dan secara otomatis akan menampilkan nama file/folder sesuai yang kita mau.  
Seperti Contoh :
```bash
# ketik cd xa
C:\>cd xa
# Lalu klik Tab
```
Maka hasilnya akan seperti ini :point_down:
```bash
C:\>cd xampp
```
Nah kalau sudah begini tinggal kasih `\` lalu ketik 1-2 huruf awal dari nama tujuan folder anda.
```bash
C:\>cd xampp\my
# klik enter maka hasilnya seperti ini
C:\>cd xampp\mysql
```
Jika sudah seperti ini berarti anda sudah paham penggunaan `Tab` di CMD.  
1 baris perintah :
```bash
C:\>Users\RidoAnanda> cd ..\..\xampp\mysql\bin
# klik enter maka hasilnya
C:\>xampp\mysql\bin> 
```

## 2. Menggunakan File Explorer
Anda buka File Explorer lalu klik `Local DISK (C): > xampp > mysql > bin`
jika sudah klik path folder diatasnya, seperti ini contohnya :
![](/images/xampp-folder-1.png)
then, ketik `cmd` dan enter.
![](/images/xampp-folder-2.png)
Otomatis membuka CMD dengan path yang sesuai dengan File Explorer

![](/images/xampp-folder-3.png)
Just like that, gampang kan? 

## 3. Set Environment Variables di Komputer
Hmmmm pernah mikir gak, Gimana ya pas buka CMD langsung bisa ketik **mysql -u root** dimanapun dan kapan pun kita mau?  
saya pernah, why? karena saya males yang ribet hahahah.  
Kalau ada yang simple kenapa pilih yang ribet ya kan, even though awal konfigurasinya sangat ribet wkwkwk.  
contohnya seperti ini :
![Global use MySQL](/images/mysql-cmd.png)
Jadi, saya bisa gunakan `mysql` anywhere and whenever!!!:)

how to do it ? kita cari environment variables di pencarian windows atau bisa tekan `logo windows + S`.
kira kira seperti ini
![Environment Variables search](/images/search-env-variables.png)
> Pilih yang atas ya

Setelah itu akan tampil seperti ini, klik `Environment Variables`
![Env Variables app](/images/env-variables.png)
then cari `path` di System Variables dan klik `Edit`
![Env Variables app](/images/env-variables-app.png)
after that, tinggal klik `New` lalu masukkan path mysql bin seperti ini
![Env Variables Edit](/images/env-variables-edit.png)
lalu klik `ok` semua.

Jadi deh, anda bisa gunakan perintah mysql di cmd anywhere and whenever!:)
![Global use MySQL](/images/mysql-cmd.png)
::: info
Kalau belum bisa, restart ulang CMD nya lalu test lagi.
:::

Oke ya saya harap kalian paham apa yang saya sampaikan.
Perlu diingat, ini pilihan opsional, dan kalian bisa pakai triknya yang mana kalian suka.

Sekian Wassalammualaikum wr. wb., Syalom ...