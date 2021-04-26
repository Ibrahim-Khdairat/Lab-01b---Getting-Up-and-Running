alert ('Welcome To Our Web Site');
let userName=prompt('Please Enter your Name ');

document.write('Welcome '+userName);
 console.log(userName);
document.write('<br>');
let age=prompt('Please Enter Your Age ');
document.write('Your Age is '+age);
console.log(age);
document.write('<br>');
let ans=prompt('Is That your first visit To Our WebSite ?');
if (ans=='yes')
{document.write("You are welcome. I hope you'll enjoy with us");}
else {document.write('Welcome Back '+userName);}