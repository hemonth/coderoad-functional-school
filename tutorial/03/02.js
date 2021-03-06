const map = require('BASE/03-map.js');

describe('02 function changeGrade', () => {

	const changeGrade = map.__get__('changeGrade');

	it('doesn\'t exist', () => {
		expect(changeGrade).to.not.be.undefined;
	});

	it('isn\'t a function', () => {
		expect(changeGrade).to.be.a('function');
	});

	it('should take a parameter', () => {
		expect(changeGrade).to.have.length(1);
	});

	it('should try changing `course.grade` first before returning `course`', () => {
		const regex = /return [a-zA-Z]+\.grade/;
		const func = changeGrade.toString();
		expect(func.match(regex)).to.be.null;
	});

	it('doesn\'t return anything', () => {
		const test = {
			grade: 'D'
		};
		expect(changeGrade(test)).to.not.be.undefined;
	});

	it('should change grades from a D to an A', () => {
		const test = {
			grade: 'D'
		};
		expect(changeGrade(test)).to.deep.equal({
			grade: 'A'
		});
	});

	it('should change grades from a F to an A', () => {
		const test = {
			grade: 'F'
		};
		expect(changeGrade(test)).to.deep.equal({
			grade: 'A'
		});
	});

	it('should change grades from a B to an A', () => {
		const test = {
			grade: 'B'
		};
		expect(changeGrade(test)).to.deep.equal({
			grade: 'A'
		});
	});

});
