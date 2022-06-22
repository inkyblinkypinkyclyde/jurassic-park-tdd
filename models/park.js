const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};
Park.prototype.removeDinosaur = function (dinosaurToBeRemoved) {
    for (var i = 0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i] === dinosaurToBeRemoved) {
            this.dinosaurs.splice(i, 1)
            i--
        }
    }
}

Park.prototype.findBestDino = function () {
    let highest_int = 0
    let bestDino

    for (var dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > highest_int) {
            highest_int = dinosaur.guestsAttractedPerDay
        }

    }

    for (var dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay === highest_int) {

            bestDino = dinosaur
        }
    }

    return bestDino

}

module.exports = Park