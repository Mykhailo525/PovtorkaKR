// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)



    let url=new URL(location.href);
let postId=url.searchParams.get('postid');
let id=url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts?id=${postId}`)
.then((target)=>target.json())
.then((posts)=>{
    let div=document.createElement('div');
    div.innerHTML=`<h2>Інформація про об'єкт post на який клікнули</h2>`
    document.body.appendChild(div);

    let ul=document.createElement('ul')
    document.body.appendChild(ul)
    for (const post of posts) {
            let li = document.createElement('li');
            li.innerHTML = `<p><b>userId</b> - ${post.userId}</p>
        <p><b>id</b> - ${post.id}</p>
        <p><b>title</b> - ${post.title}</p>
        <p><b>body</b> - ${post.body}</p>`;
            ul.appendChild(li)
        }
})




fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((comments)=>comments.json())
    .then((commentar)=> {
        let divform=document.createElement('div');
        divform.innerHTML=`<h2>Всі коментарі поточного поста</h2>`
        document.body.appendChild(divform);
     let div=document.createElement('div')
        div.classList.add('block')
        document.body.appendChild(div)
        let ul=document.createElement('ul')
        div.appendChild(ul)
        for (const comment of commentar) {
            let li=document.createElement('li');
            li.innerHTML= `<p><b>postId</b> - ${comment.postId}</p>
        <p><b>id</b> - ${comment.id}</p>
        <p><b>name</b> - ${comment.name}</p>
        <p><b>email</b> - ${comment.email}</p>
         <p><b>body</b> - ${comment.body}</p>`;
            ul.appendChild(li)
        }
    })


