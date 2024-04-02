//complete this code
class Person {
	constructor(name,age){
		this.Name = name,
		this.Age = age
	}
	get name(){
		return this.Name;
	}
	set age(Age){
		if(typeof age !== 'number'){
			throw new Error('Age must be number.');
		}
	}
}

class Student extends Person {
	study(Name){
		console.log(name+"is studying");
	}
}

class Teacher extends Person {
	teach(Name){
		console.log(name+"is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
