let btn = document.querySelector("button");
let card = document.querySelector(".card");
let image=document.querySelector("img");


btn.addEventListener("click",async()=>{
    let link= await getImage();
    image.setAttribute("src",link);
})

let url= "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    try{
        let res=await axios.get(url);
        return res.data.message;
    }catch(e){
        console.log("err :" ,e);
    }
}