// const text = prompt("Enter text color")
// const bg = prompt("Enter background color")

// document.body.style.backgroundColor = `${bg}`;
// document.body.style.color = `${text}`;


const log = Number(prompt("Login kiriting")); // Преобразуем login в число
const password = prompt("Parolingizni kiriting");

const mars = [
    {
        login: 999111,
        password: "12345",
        coin:13341,
        name: "Hondamir",
        Teacher:"Sunnatbek",
    },
    {
        login:999222,
        password:12345,
        coin:131,
        name: "Dilmuhammad",
        Teacher:"Sunnatbek",
        
    },
    {
        login:999333,
        password:12345,
        coin:1312341,
        name: "Sardor",
        Teacher:"Sunnatbek",
        
    },
    {
        login:999444,
        password:12345,
        coin:132222,
        name: "Aziz",
        Teacher:"Sunnatbek",
        
    },
    {
        login:999555,
        password:12345,
        coin:131122,
        name: "Akbar",
        Teacher:"Sunnatbek",
        
    },
]
const user = mars.find((malumot) => malumot.login === log && malumot.password === password);

if (user) {

    document.body.innerHTML = `
        <h2>Foydalanuvchi ma'lumotlari</h2>
        <p><strong>Ism:</strong> ${user.name}</p>
        <p><strong>Coin:</strong> ${user.coin}</p>
        <p><strong>O'qituvchi:</strong> ${user.Teacher}</p>
    `;
} else {

    alert("Login yoki parol noto'g'ri!");
}











