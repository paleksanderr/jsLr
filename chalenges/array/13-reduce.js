const averageScore = students.reduce(function (scoresTotal,student) {
 // console.log(student);
 // console.log(scoresTotal);
 
 return scoresTotal + student.score;
}, 0) / (students.length) / (students.length) / (5);
// console.log(averageScore);

const ankieta = students.reduce(function (survey, student) {
 // console.log(student.favoriteSubject);
 const favSub = student.favoriteSubject;
 if (survey[favSub]) {
  survey[favSub] = survey[favSub] +1
 }
 else{
  survey[favSub] = 1
 }

 return survey;
},{});
console.log(ankieta);