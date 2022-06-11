// Initialize the contants
baseUrl = "http://127.0.0.1:5000/"


document.getElementById("generate").addEventListener("click",()=>{
    no_of_colors = document.getElementById("no-of-color").value
    document.getElementById("error").style.visibility = "collapse"
    if(parseInt(no_of_colors) > 4){
        document.getElementById("error").style.visibility = "visible"
        document.getElementById("error").innerHTML = "Better not to use more than 4 color and make it shit"
        return 0
    }

    color_display = document.getElementsByClassName("show-color-container")[0]
    var child = color_display.lastElementChild
    while(child){
        console.log("run")
        color_display.removeChild(child)
        child = color_display.lastElementChild
    }
    
    document.getElementsByClassName("show-gradient")[0].style.flexBasis = "50%"
    document.getElementsByClassName("generate-gradient")[0].style.flexBasis = "50%"
    fetch(baseUrl,{method : "POST", body : JSON.stringify({"no_of_colors" : no_of_colors})}).then(data => {return data.json()}).then(res =>{setGradient(res)})

})

function setGradient(res){
    gradinet_to_set = ""
    gradient_text = ""
    for (const color of res["colors"]){
        gradinet_to_set += color + ","
    }
    gradient_text = gradinet_to_set.slice(0,-1)
    angle = Math.floor(Math.random() * 361)
    set_gradient_query = "linear-gradient("+angle+"deg,"+gradient_text+")"
    console.log(set_gradient_query)
    setColors(res)
    document.getElementById("show-gradient").style.backgroundImage = set_gradient_query

}
function setColors(colors){
    for(const color of colors["colors"]){
        color_show_div = document.createElement("div")
        color_show_div.classList.add("show-color")
        color_div = document.createElement("div")
        color_div.classList.add("color")
        color_div.style.background = color
        color_show_div.appendChild(color_div)
        hex_code = document.createElement("h5")
        hex_code.innerHTML = color
        color_show_div.appendChild(hex_code)
        document.getElementById("show-color-container").appendChild(color_show_div)
    }
}