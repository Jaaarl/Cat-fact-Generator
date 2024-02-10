const btn1 = document.querySelector('#btnGenerate')
const btn2 = document.querySelector("#btnReset")
const lists = document.querySelector('ul');
btn1.addEventListener('click', async () => {
    try {
        const fact = await axios.get("https://catfact.ninja/fact");
        const list = document.createElement('li');
        list.className = "list-group-item h5 m-2";
        list.textContent = fact.data.fact;
        lists.append(list);
        // console.log(fact.data.fact);
    }
    catch (e) {
        console.log(e)
    }
    btn2.addEventListener('click', () => {
        lists.textContent = "";
    })
})
