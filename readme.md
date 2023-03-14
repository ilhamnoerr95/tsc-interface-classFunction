```diff

beberapa prorperti yg ada disamping properti(modifier) field:

1. private: hanya bisa diakses/ditambah dengan fungsi yg ada di dalam class
2. public: bisa diakses/diubah diluar dari fungsi class
3. readonly (hanya ada di typescript)

! Penggunaan inheritance bisa memudahakn developer untuk membuat fitur yg dibuat dengan melanjutkan data yg sudah di warisinya

! subsclass/ pewaris hanya bisa diwarisi dr 1 class saja

# ------------------------------------
static property dan static method: mengizinkan untuk mengakses properti pada metode ke kelas yang gak dikases pada instacne kelas. jadi manggilnya gak usah pake "new",
dan bisa langsung di call

---------------------------------------------
INTERFACE: sebuah interface yg menggambarkan strutur objek untuk mendeskripsikan suatu objek terlihat

perbedaaN Interface dangan type custom adalah:
1.kalau interface membuat struktur objek dengan jelas dalam mendeskripsikan suatu objeknya, interface bisa di implementasikan kedalam "Class"
2. kalau type custom sifatnya flexible jadi, type untuk key value bisa menggunakan union

interface bisa interheritance, interface bisa extends lebih dari 1 interface. prinsip interface inheritance adalah memaksa parent memberikan propertinya kepada child

!interface bisa mendefiniskan struktur fungsi
! interface bisa membuat optional properti & parameter

! interface bisa membuat kontrak kedalam "class" dengan memaksa implementasi method/properti tertentu, ketika di dalam class ingin mendefiniskan properti baru diluar dari properti interface tidak akan terjdi error.
```
