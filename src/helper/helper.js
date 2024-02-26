const shortenText = (text) =>{
    if(text.split(" ").length >= 12){
        return text.split(" ").slice(0, 11).join(" ") + " ..."
    }else{
        return text
    }
}

export {shortenText}