import React,{useState} from "react";
import axios from "axios";
import"./Dictionary.css";


export default function Dictionary(){
let [keyword,setKeyword]=useState("");


function handleResponse(response){
    console.log(response.data.meanings[1]);
}


function search (event){
    event.preventDefault();
 

let apiKey = "f29361d047d2c04bf4b0cbot3b20ea11";

let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event){
setKeyword(event.target.value);
}



    return <div className="Dictionary">
        <form  onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
    </div>
}