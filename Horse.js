function Horse() {
}

Horse.prototype.run = function() {
    console.log('Running');
}

Horse.prototype.jump = function() {
	console.log('Jumpe...');
};

module.exports = Horse;