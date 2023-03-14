// Code goes here!
// ini yg disebut dengan field of  class/instance
class Department {
	// STATIS PROPERTIS
	// karena statis propertiy ini tidak mendefinisikan sebagai property di dalam class
	// maka cara pemanggilan menggunakan this tidak akan berlaku, jadi bisa langsung panggil dengan nama class didamping dengan static propertynya
	static tryStatic = "statis coba";

	// name/bisa dibuat any name, hanya mendefiniskan nama kunci(key-value) yg akan dibuat berdasrkan kelas(class) dan menentukan nilai dari nama kunci(key-value)
	// private id: string;
	// private name: string;
	// ! menambah properties disamping key-value dengan private
	// ! private artinya bisa diakses hanya di dalam class
	// * kata kunci PRIVATE disebut dengan modifier
	// * selain "private" ada "public" property yg bs digunakan/ akses class diluar dari class
	// private employees: string[] = [];

	// penggunaan protected sama dnegan private perbedaanya bisa digunakan untuk subclassnya
	protected employees: string[] = [];

	//* constructor adalah sebuah spesial fungsi yg ada dalam classes dan terikat pada object yg ada pada classses
	// constructor juga bisa menampung sebuah paramter
	// constructor(i: string, n: string) {
	// 	this.name = n;
	// 	this.id = i;
	// }

	// ----- -----------------------------
	// * SHORTHAND UNTUK MENAMBHAKAN FIELD:
	// param dari shorthan dibawah sebagai acuan/pengganti dari definisi nama kunci
	constructor(private readonly id: string, public name: string) {
		// hasil dari const ini akan sama dengan double assign yg ada di constructor atas
	}

	// parameter this adalah sebuah parameter spesial untuk menjadi petunjuk sebagai apa yg harus di rujuk di dalam functionya
	// "this" parameter bukan seperti param pada umumnya
	describe(this: Department, param: string) {
		console.log(`Departerment (${this.id}):  ${this.name} namaa,  ditambah ${param}`);
	}

	addEmployees(employ: string) {
		this.employees.push(employ);
	}

	printEmployees() {
		console.log(this.employees);
		console.log(this.employees.length);
		// contoh pemanggilan statis properti
		console.log("statis prop=>", Department.tryStatic);
	}
}

// INHERITANCE hanya bisa 1 class saja
// * INHERITANCE akan mengkopi semua data yang ada pada seluruh data mewarisinya
// subclass/ accounting class
class Accounting extends Department {
	admins: string[];
	//ketika ingin menambahkan constructor, maka harus menambahkan super di dalam constructor
	// super memanggil basis class kedalam subkelas, dr class departement kedalam class accounting.
	constructor(id: string, admins: string[]) {
		// jadi param dari konstruktor akan dilanjutkan atau dipassing kedalam super yg dimana
		// param super bernama "id" sudah menyimpan nilai dari lemparan new Accounting('s2'),
		// dan divalue kedua super akan melempar parameter untuk param selanjutnya/untuk param "name"
		super(id, "IT");
		this.admins = admins;
	}
	static statisFungis(name: string) {
		return { name: name };
	}
}

// MARKETIN CLASS/subclass
class Marketing extends Department {
	private lastReport: number;

	// getter digunakan seperti method di dalam class akan tetapi untuk pemanggilan
	//  sama seperti manggil sebuah property
	get getLastReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error("No last report");
	}
	// setter harus membutuhkan arguments/param
	set getLastReport(value: number) {
		if (!value) {
			throw new Error("Value must be valid!");
		}
		this.addSales(value);
	}

	constructor(id: string, name: string, private sales: number[]) {
		super(id, name);
		this.lastReport = sales[0];
	}

	addSales(sale: number) {
		this.sales.push(sale);
		// karena last report bersifat private maka, kita harus membuat getter
		// agar last report bisa di akses dar luar
		this.lastReport = sale;
	}

	infoSales() {
		console.log("penjualan : ", this.sales);
	}
	// method bisa di override dari class yang mewarisinya
	addEmployees(employ: string) {
		// untuk akses employees variable harus menggunakan protected atau public side properties
		this.employees.push(employ);
	}
}

// const prog = new Department("D4", "ayam"); // membuat blue print
const akun = new Accounting("s2", ["array", "string"]);
akun.name = "AKUNTING";
akun.describe(" param tambahan");

// STATIC METHOD
const statis = Accounting.statisFungis("ayam");
console.log(statis);

// perlu diperhatikan bahwa disaat membuat sebuah copyData dengan value object dan ingin memanggil sebuah fungsi yg ada di dalam class
// maka perlu menambahkan keyvalue untuk mendapatkan nilai baru dalam copyData, karena apabila tidak ada keyvalue sesuai dengan keyvalue di instance Dep
// hasil yg akan di dapat akan berupa undefined
// hasil dari copydata dibawah seperti kita mengambil turunan dari instance departement dan mengupdate turunan value name menjadi value baru
// const copyData = { name: "pler", describe: prog.describe };
// copyData.describe(" bau asem");

akun.addEmployees("Ilham");
akun.addEmployees("Antika");

// console.log(prog);
console.log(akun);
// !KODE DIBAWAH INI TIDAK BISA DIGUNAKAN APABILA ADA PRIVATE DISAMPING PROPERTIES
// karena kode dibawa ingin mengakses/menambah value diluar dari fungsi yg ada di di dalam class Departement
// prog.employees[2] = "cantik";

// akun.printEmployees();

// ---------------------------------------------------------------- marketing subclass
const marketing = new Marketing("s3", "Marketing", []);
// cara setter mengeksekusinya
marketing.getLastReport = Number("5");

marketing.addSales(350);
console.log("getter last report =>", marketing.getLastReport);
marketing.addEmployees("dodo");
marketing.addEmployees("soni");

console.log(marketing);
// marketing.name = "Salesman";
