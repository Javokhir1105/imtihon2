const userlist = document.getElementById('userlist');
const modal = document.getElementById('modal')
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const ism = document.getElementById('ism')
const list = document.querySelector("#select")
function getModels() {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/models")
    .then((response) => response.json())
    .then((model) => {
        console.log(model);
        model.data.forEach((item) => {

            const listItem = document.createElement('li');
            const name = document.createElement('p');
            const email = document.createElement('p');

            name.textContent = item.name;
            email.textContent = item.brand_title;

            listItem.appendChild(name);
            listItem.appendChild(email);

            userlist.appendChild(listItem);
        });
    });
}
getModels()
btn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = "block";
})
fetch("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
    .then((response) => response.json())
    .then((data) => {
        data.data.forEach((element,) => {

            const test = document.createElement("option");

            test.textContent = element.title
            test.value = element.id

            list.appendChild(test);
        });
    });
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTczNzkzNTUtZDNjYi00NzY1LTgwMGEtNDZhOTU1NWJiOWQyIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTcxNDEyNzUwMiwiZXhwIjoxNzQ1NjYzNTAyfQ.vvgAX4qmbf63w6k5JYgDXKTCwuxyJ8Z8ApPcQTCsbOU";
    
    btn2.addEventListener('click', (e) => {
        e.preventDefault();
        fetch("https://autoapi.dezinfeksiyatashkent.uz/api/models", {
            method: "POST",
            body: JSON.stringify({
                name: ism.value,
                brand_id: list.value
            }),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json"
            },
        })
        .then((response) => response.json())
        .then((json) => {
            getModels()
        })
        .catch((error) => console.error('Error:', error));
    });
    