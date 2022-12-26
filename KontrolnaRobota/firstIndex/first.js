// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.

fetch('https://jsonplaceholder.typicode.com/users')
    .then((respons) => respons.json())
    .then((users) => {
        for (const user of users) {
            let div=document.createElement('div');
            div.classList.add('block')
            div.innerHTML=`<h2>${user.id} ${user.name}</h2>`;
            let a =document.createElement('a');
            a.href=`../userDetails/user_details.html?id=${user.id}`;
            a.innerText='User information';
            div.appendChild(a);
            document.body.appendChild(div);
        }
    })

