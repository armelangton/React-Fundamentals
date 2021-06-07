const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 8},
    {name: 'Paul', specialty: 'Entomology', medals: 4},
];

// let instructor_names = [];

// instructors.forEach(instructor => {
//     instructor_names.push(instructor.name);
// });

// console.log(instructor_names);

let instructor_names = [];

for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

//this is better
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);