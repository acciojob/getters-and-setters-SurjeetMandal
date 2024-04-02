class Person {
	constructor(name, age){
		this.Name = name,
		this.Age = age
	}
	get name(){
		return this.Name;
	}
	set age(value){
		if(typeof value !== 'number' || value < 0){
			throw new Error('Age must be a positive number.');
		}
		this.Age = value;
	}
}

class Student extends Person {
	study(name){
		console.log(name + " is studying");
	}
}

class Teacher extends Person {
	teach(name){
		console.log(name + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
