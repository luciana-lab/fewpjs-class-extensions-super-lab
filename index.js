// Write your classes here
// Tree
// 1) initializes an instance with one parameter and assigns it to `species`
// 2) has a static method `definition` that returns a sentence on trees
class Tree {
    constructor(species) {
        this.species = species;
    };

    static definition() {
        return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`;
    };
};

// Deciduous
// 1) initializes with two parameters, species and name, and uses `super` to set `species`
// 2) has a static method `definition` that uses `super.definition` and expands on it
class Deciduous extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    };

    static definition() {
        return (
            super.definition() + ` Deciduous trees shed their leaves annually.`
        );
    };
};

// Evergreen
// 1) initializes with two parameters, species and name, and uses `super` to set `species`
// 2) has a static method `definition` that uses `super.definition` and expands on it
class Evergreen extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    };

    static definition() {
        return (
            super.definition() + ` Evergreens keep their leaves all year round.`
        );
    };
};