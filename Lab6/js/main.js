var api = "https://jsonplaceholder.typicode.com/todos";

function fetchAPI(api){
    var request = new XMLHttpRequest();
    request.open("GET", api);
    request.send();
    request.addEventListener("load", function (){
        if(this.status == 200 && this.readyState == 4){
            console.log("%cRequest Success" , "background: green");
            // console.log(this.responseText);
            dataCenter(JSON.parse(this.responseText));
        }else if(this.status != 200 && this.readyState == 4){
            console.warn("Statu Error:" + this.status);
        }
    } ) 
}
// Invoke Fn
fetchAPI(api);

function dataCenter(data){
    var tasks = data;
    console.log(tasks);
    tasks.forEach(function(task){
        var row = document.createElement("tr");
        Object.values(task).forEach(function(value){
            var dataHolder = document.createElement("td");
            dataHolder.append(value);
            row.append(dataHolder);
        })
        document.getElementById("tableBody").append(row);
    })
}