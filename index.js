const uimaker = (data) => {
    document.getElementById("box").innerHTML = "";
    data.map((ele, i) => {

        let title = document.createElement("h1")
        title.innerHTML = ele.title

        let price = document.createElement("p")
        price.innerHTML = ele.price

        let img = document.createElement("img")
        img.src = ele.img;

        let div = document.createElement("div")
        div.append(img, title, price)
        document.getElementById("box").append(div)

    })

}

fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then((data => {
        uimaker(data)

    }))


const postdata = (data) => {
    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    })

}

const handaldata = (e) => {
    e.preventDefault();
    let data = {

        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        img: document.getElementById("url").value
    }
    console.log(data);
    postdata(data);
}



document.getElementById("form").addEventListener("submit", handaldata)