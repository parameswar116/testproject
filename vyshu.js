// function myname(name,data1,data2)
// {
//     var colect1 =(data1+data2)/2;
    
// //      console.log(colect1);
//     // return colect1 =(data1+data2)/2;
// }
// myname("parameswar",10,20);
// // console.log(colect1);
// function myname(name,a,b,c)
// {
//     let collect=(a+b+c)/3;
//     console.log(collect);
//     return collect;
// }
// let collect1=myname("parameswar",10,20,30);
// document.writeln(collect1);


// ---------------------------------------------------bind()method---------------------------------------------------//

// bind::

// let work=function(working){
//     console.log(this.firstname,this.village, "is",working)}

// let village = function(place){
//     console.log(this.firstname,place,this.village)}

//     let pin = function(zip){
//         console.log(this.firstname,zip,this.pincode)
//     }



let emp1 = {
    firstname:"ramu",
    lastname:"somu",
    fullname:function(){
        console.log(this.firstname,this.lastname);
    },
    village:"maddipalli",
    phone:9701001234,
    pincode:515414,
 
        
    

}
let emp2={
    firstname:"raju",
    lastname:"raja",
    fullname:function(){
        console.log(this.firstname,this.lastname);
    },
    village:"surepalli",
    phone:9701001244,
    pincode:515413,

   }
        
        
    
    let getDeatailes= function(){
        console.log(this.firstname,this.lastname,this.village,this.phone,this.pincode)
    }
let fullNames = function(){
    console.log(this.village)
}

// let names = work.bind(emp2,"farmer");
// let detailes = village.bind(emp1,"native place is")
// names();
// detailes();
// let pinc=pin.bind(emp1,"pincode is")
// pinc();
// let em=emp1.fulldeatailes.bind(emp2)
// em();
// let em2=getDeatailes.bind(emp1);
// em2();
let em3=emp1.fullname.bind(emp2)
// let em4=em3.bind(emp2)
// em4();
    
// em3();


// bind()method : borrows a function and createa a copy ,"this " keyword replaced with the object passed as an arguement.
// bind()method : bind method creates a new function and sets the "this " keyword to the specified object.we can pass second arguement as optional arguement with comma specified values. 
// ---------------------------------------------------bind()method-----------------------------------------------------//



// ---------------------------------------------------call()method-----------------------------------------------------//
// call()method  : 

function ptintName(first,last){
    console.log(`${first} ${last}`)
    console.log(this);
}
ptintName.call({
    model:"samsung",
    color:"red"
},"parameswar","reddy");






// function Emp(id,name) {
//     this.id = id;
//     this.name = name;
//   }
//   function PermanentEmp(id,name) {
//    Emp.call(this,id,name);
//   }
//   function TemporaryEmp(id,name) {
//    Emp.call(this,id,name);
//   }
//   var p_emp=new PermanentEmp(101,"John Martin");
//   var t_emp=new TemporaryEmp(201,"Duke William")
//   console.log(p_emp.id+" "+p_emp.name+"<br>");
//   console.log(t_emp.id+" "+t_emp.name);







//  function isOdd(number) {
//     return number % 2;
//   }
  
//   function getOddNumbers() {
//     return Array.prototype.filter.call(arguments, isOdd);
//   }
  
//   let results = getOddNumbers(10, 1, 3, 4, 8, 9);
//   console.log(results); 







// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Fail' }
//   ];
  
//   for (let i = 0; i < animals.length; i++) {
//     (function(i) {
//       this.print = function() 
//                 {
//                     console.log('#' + i + ' ' + this.species
//                                 + ': ' + this.name);
//                 }    
//       this.print();
//     }).call(animals[i], i);
//   }




// function greet() {
//     const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
//     console.log(reply);
//   }
  
//   const obj = {
//     animal: 'cats', sleepDuration: '12 and 16 hours'
//   };
  
//   greet.call(obj);



    //     var emp =[
    //         {name:"veera"},
    //         {name:"Ravi"},
    //         {name:"Ramu"}
    //     ]


    //    var emp4 = emp.map((x,ind,arr)=>{
    //         if(x.name === "veera"){
    //          x.sal =10000;
    //          x.city ="ATP";
    //          x.id = 1345
          
    //         }
    //         else if(x.name === "Ravi"){
    //          x.sal =20000;
    //          x.city ="ATP";
    //          x.id = 1356
            
    //         }
    //         else {
    //          x.sal =30000;
    //          x.city ="ATP";
    //          x.id = 1347
    //         }

    //         return x

    //     })

    //     console.log(emp4)


