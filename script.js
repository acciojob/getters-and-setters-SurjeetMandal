//complete this code
class Person {
	constructor(name,age){
		this.name = Name,
		this.age = Age
	}
	get Name(){
		return this.name;
	}
	set Age(age){
		if(typeof age !== 'number'){
			throw new Error('Age must be number.');
		}
	}
}

class Student extends Person {
	study(name){
		console.log(name+"is studying");
	}
}

class Teacher extends Person {
	teach(name){
		console.log(name+"is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
