 import express from 'express';
 const app = express();
 import { engine } from 'express-handlebars';


 app.engine('handlebars', engine());
 app.set('view engine', 'handlebars');
 app.set('views', './templates');
  
 
 let students= [
    {
       id: 1,
       name: 'ahmed',
       city: 'tanta',
    },
    {
       id: 2,
       name: 'yasser',
       city: 'cairo',
    },
    {
       id: 3,
       name: 'said',
       city: 'banha',
    },
    {
        id: 4,
        name: 'emad',
        city: 'tanta',
     },
    ]

let print=(a,b)=>{
    b.render("asd",{layout: false , students:students}) 
}

 app.get('/students',print)

 app.listen(2000)

app.get('/students/:id',(a,b)=>{
const id = a.params.id;
const  st = students.find((iteam)=>{
    return iteam.id==id;
    }
);
 b.render("students",{layout: false ,  students:st })
})
  