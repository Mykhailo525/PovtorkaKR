// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання,
//     при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
// user-details.html - блок з інфою про user зверху сторінки.
//     Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .


// 1 варіант розвязку
// розкоментувати <!--    <link rel="stylesheet" href="userDetailsFirst.css">--> у файлі user_details.html

let url=new URL(location.href);
let id=url.searchParams.get('id');
let div=document.createElement('div');
div.innerHTML=`<h2>Інформація про об'єкт user на який клікнули</h2>`
document.body.appendChild(div);



fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((respon) => respon.json())
    .then((obj) => {
        let div=document.createElement('div')
        div.classList.add('block')
        document.body.appendChild(div)
        for (const Key in obj) {
            let diver=document.createElement('div')
            diver.classList.add('wow')
            div.appendChild(diver)


            if(typeof obj[Key]!=='object'){
                diver.innerHTML=`<b>${Key}</b>-${obj[Key]}`


            }else if(typeof obj[Key]==='object'){
                let ul=document.createElement('ul')
                if (Key==="address"){
                    ul.innerHTML=`<b>Address:</b>`;
                }else if (Key==="company"){
                    ul.innerHTML=`<b>Company:</b>`;
                }
                diver.appendChild(ul)

                for (const asd in obj[Key]) {

                    if(typeof obj[Key][asd]==='object'){
                        let ul1=document.createElement('ul')
                        ul1.innerHTML=`<b>Geo:</b>`;
                        diver.appendChild(ul1)

                        for (const asdKey in obj[Key][asd]) {
                            let li = document.createElement('li')
                            li.innerText = `${asdKey} - ${obj[Key][asd][asdKey]}`
                            ul1.appendChild(li)
                        }
                    }else {
                        let li = document.createElement('li')
                        li.innerText = `${asd} - ${obj[Key][asd]}`
                        ul.appendChild(li)
                    }
                }
            }
        }
    })



fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((posts) => posts.json())
    .then((users) =>{
        let div=document.createElement('div')
        div.classList.add('wrap')
        let button=document.createElement('button')
        button.innerText='Post of current user'
        document.body.appendChild(div)
        div.appendChild(button)
        button.onclick=function (){
            let div=document.createElement('div');
            div.innerHTML=`<h2>Тitle всіх постів поточного юзера</h2>`
            document.body.appendChild(div);

            let divUser=document.createElement('div');
            divUser.classList.add('wrapper')
            document.body.appendChild(divUser);

            for (const post of users) {
                let p=document.createElement('p')
                p.innerText=` ${post.id} - ${post.title}`
                let btn=document.createElement('button')
                btn.classList.add('button')
                let a=document.createElement('a')
                a.href=`../postDetails/postDetails.html?id=${id}&postid=${post.id}`;
                a.innerText='Перейти на сторінку post-details';
                btn.appendChild(a)
                p.appendChild(btn)
                divUser.appendChild(p)
            }

        }

    })








// 2 варінт розвязку -
// розкоментувати <!--    <link rel="stylesheet" href="userDetailsSecond.css">--> у файлі user_details.html

// let div=document.createElement('div')
// div.innerHTML=`<h2>Інформація про об'єкт user на який клікнули</h2>`
// document.body.appendChild(div)
// let url=new URL(location.href);
// let id=url.searchParams.get('id');
// fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((respon) => respon.json())
//     .then((obj) => {
//         let div=document.createElement('div')
//         div.classList.add('target')
//         document.body.appendChild(div)
//         function explorer(object){
//             let diver=document.createElement('div')
//             diver.classList.add('father')
//             div.appendChild(diver)
//             for (const objectKey in object) {
//               if(typeof object[objectKey]!== 'object'){
//                   let p1=document.createElement('p1')
//                   p1.innerHTML=`<b>${objectKey}</b> - ${object[objectKey]}`
//                   diver.appendChild(p1)
//               }else{
//                   let div1=document.createElement('div')
//                   div1.classList.add('block')
//                   div1.innerHTML=`<b>${objectKey}:</b>`
//                   div.appendChild(div1)
//                   explorer(object[objectKey])
//               }
//             }
//         }
//         explorer(obj)
//     })
//
//
// fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
//     .then((posts) => posts.json())
//     .then((users) =>{
//         let div=document.createElement('div')
//         div.classList.add('wrap')
//         let button=document.createElement('button')
//         button.innerText='Post of current user'
//         document.body.appendChild(div)
//         div.appendChild(button)
//         button.onclick=function (){
//             let div=document.createElement('div');
//             div.innerHTML=`<h2>Тitle всіх постів поточного юзера</h2>`
//             document.body.appendChild(div);
//
//             let divUser=document.createElement('div');
//             divUser.classList.add('wrapper')
//             document.body.appendChild(divUser);
//
//             for (const post of users) {
//                 let p=document.createElement('p')
//                 p.innerHTML=`<b> ${post.id}</b>  ${post.title}`
//                 let btn=document.createElement('button')
//                 btn.classList.add('button')
//                 let a=document.createElement('a')
//                 console.log(id)
//                 a.href=`../postDetails/postDetails.html?id=${id}&postid=${post.id}`;
//                 a.innerText='Перейти на сторінку post-details';
//                 btn.appendChild(a)
//                 p.appendChild(btn)
//                 divUser.appendChild(p)
//             }
//
//         }
//
//     })



