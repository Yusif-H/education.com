//getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector(".inputyu");
const suggBox = searchWrapper.querySelector(".autocom-box");


//if user press any key and release


inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray= [];
    if(userData){
        emptyArray= suggestions.filter((data)=>{
            //filtering array value and use char to lowercase and return only those
            //word/sentence which are satrts with user entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' + data + '</li>';
        })
        console.log(emptyArray);
        searchWrapper.classList.add("active"); // show autocoplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li")
        for (let i = 0; i < allList.length; i++) {
            // adding oneclick attribute in all li tag
            allList[i].setAttribute("oneclick","select(this)");
            
        }
    }else{
        searchWrapper.classList.remove("active");  // hide autocomplete box
    }
}

function select(element){
    let selectUserData = element.textcontent;
    inputBox.value = selectUserData;
}


function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue + '</li>';
    }else{
        listData = list;
    }
}           


