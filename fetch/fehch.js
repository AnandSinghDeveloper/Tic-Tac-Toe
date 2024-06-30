let data = fetch('https://randomuser.me/api/');
data.then(data1=>{
    // console.log(data1);
    return data1.json();
}).then((data2)=>{
    console.log(data2);
    console.log(data2.results[0].gender);
})