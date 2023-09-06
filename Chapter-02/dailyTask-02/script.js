// Latihan:
// Abstract -> Animal (dilarang membuat object langsung menggunakan kelas animal)
// Helper Jenis Habitat -> Terrestrial, Aquatic, dan Amphibious
/*  Terrestrial:
    Ini mengacu pada makhluk atau organisme yang hidup
    di darat atau di lingkungan daratan.
*/
/*  Aquatic:
    Ini merujuk pada makhluk atau organisme
    yang hidup di dalam air.
*/
/*  Amphibious:
    Ini adalah kata sifat yang digunakan untuk menggambarkan
    makhluk atau kendaraan yang dapat bergerak
    baik di darat maupun di air.
*/
// buat sub-class dari Animal menggunakan helper
// buat 4 object baru

class Animal {
  constructor(props) {
    let { name, habitat } = props;
    this.name = name;
    this.habitat = habitat;
  }
}

const HabitatType = {
  TERRESTRIAL: "Terrestrial",
  AQUATIC: "Aquatic",
  AMPHIBIOUS: "Amphibious",
};

class Terrestrial extends Animal {
  constructor(props) {
    super(props);
  }

  work() {
    console.log(`Saya adalah hewan ${this.habitat} dan saya berjalan di daratan.`);
  }
}

class Aquatic extends Animal {
  constructor(props) {
    super(props);
  }

  work() {
    console.log(`Saya adalah hewan ${this.habitat} dan saya berenang di dalam air.`);
  }
}

class Amphibious extends Animal {
  constructor(props) {
    super(props);
  }

  work() {
    console.log(`Saya adalah hewan ${this.habitat} dan saya bisa berjalan di darat dan berenang di air.`);
  }
}

// Membuat objek baru
const lion = new Terrestrial({
  name: "Lion",
  habitat: HabitatType.TERRESTRIAL,
});
lion.work();

const dolphin = new Aquatic({
  name: "Dolphin",
  habitat: HabitatType.AQUATIC,
});
dolphin.work();

const frog = new Amphibious({
  name: "Frog",
  habitat: HabitatType.AMPHIBIOUS,
});
frog.work();

const polarBear = new Terrestrial({
  name: "Polar Bear",
  habitat: HabitatType.TERRESTRIAL,
});
polarBear.work();
