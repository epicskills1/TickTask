

let form= document.querySelector("form");
let ls=localStorage.getItem('todo');
let todo=ls?JSON.parse(ls):[];
const sortf=(todo)=>{
	return todo
	//function
	.sortf((a,b)=>{
  if (a.value > b.value) {return 1;}
  if (a.value < b.value) {return -1;}
   return 0;

	})
}
form.addEventListener('submit',(a)=>{
	a.preventDefault();
	let inp=form[0].value;
	todo.push(inp)
	localStorage.setItem('todo',JSON.stringify(todo))
	location.reload()
})
 todo.map((data,index)=>{
 	document.querySelector("tbody").innerHTML +=`                                                                                                                            
 	<tr>
 	<td> ${data}</td>
 	<td onclick="del(${index})">Delete</td>
 	</tr>
 	`;})
 	
 
  function del(a) {
  	let dltd=todo.filter((data,index)=>{
     return index!==a;
  	})
  	localStorage.setItem('todo',JSON.stringify(dltd))
  	location.reload()
  }
  Sort.addEventListener('click',sortf)

 	
