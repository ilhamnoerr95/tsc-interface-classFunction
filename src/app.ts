// type AddFn = (a: number) => number;
// interface struktur fungsi pengganti custom type
interface AddFn {
	(a: number): number;
}
let fn: AddFn;

fn = (a: number) => {
	return a;
};

interface Named {
	// readonly interface
	// saat menggunakan readonly interface maka, cara kerjanya hanya bisa
	// di inisialisasi sekali seterusnya tidak bisa di update
	readonly name: string;
	// OPTIONAL PROPERTIY MENGGUNAKAN "?"
	outputNamed?: string;
}

// custom type or strukturnya
interface Greetable extends Named {
	age?: number;
	greet(phrase: string): void;
}

// class bisa menambahkan banyak interface
class User implements Greetable {
	// saat interface meassign "readonly properti" kedalam class,
	// properti dalam class akan secara otomatis mengenali bahwa properti sudah
	// di assign "readonly properti"
	name: string;
	// opsional properti
	age?: number;
	rumah: string;

	// opsional parameter
	constructor(name: string, age?: number) {
		this.name = name;
		if (age) {
			this.age = age;
		}
		this.rumah = "hj toran";
	}

	greet(phrase: string) {
		if (this.age) {
			console.log("umurku " + this.age);
		} else {
			console.log("ini" + " " + this.name + phrase);
		}
	}
}

// variable dibawah ini bisa menggunakan nama "class User"
let person: Greetable;
person = new User("apa ini", 45);
// person.name = "tae";
// person = {
// 	name: "ayam",
// 	age: 21,
// 	greet(phrase: string) {
// 		console.log("ini" + " " + this.name + phrase);
// 	},
// };

person.greet(" enak bangettt!");
console.log(person);

interface Coba {
	mane: string;
}

type Cobain = {
	tai: string;
};

// let aa: Coba = {
// 	mane: "ayam",
// 	tae: "burung",
// };
