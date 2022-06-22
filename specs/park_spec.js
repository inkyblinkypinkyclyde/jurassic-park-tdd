const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Tyrannosaurus', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Mosasaur', 'carnivore', 75);
    dinosaur3 = new Dinosaur('Apatosaurus', 'herbivore', 25);
    dinosaur3 = new Dinosaur('Gallimimus', 'omnivore', 10);
    dinosaur4 = new Dinosaur('Micropachycephalosaurus', 'herbivore', 1);
    dinosaur5 = new Dinosaur('Allosaurus', 'carnivore', 9);
    park = new Park('Jurassic Park', 10);
  });

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    assert.deepStrictEqual([
      dinosaur1,
      dinosaur2,
      dinosaur3,
      dinosaur4,
      dinosaur5
    ], park.dinosaurs)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1)
    park.removeDinosaur(dinosaur1)
    assert.deepStrictEqual(park.dinosaurs, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    // console.log(`${dinosaur1.species} is the name of dinosauar1`)
    // console.log(`${park.dinosaurs} is the list from the tests file`)
    const actual = park.findBestDino()
    // console.log(dinosaur2)
    // console.log(dinosaur5)
    assert.strictEqual(dinosaur2, actual)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
