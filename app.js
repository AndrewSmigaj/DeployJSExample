let data = [];

d3.csv("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv", (d) => {
    data.push(d);
    console.log(d);


}).then(function(){
    let males = data.filter(function(row){
        //console.log(row.Sex);
        if(row.Sex == "male"){
            return true;
        }
        else{
            return false;
        }
    })

    let females = data.filter(function(row){
        //console.log(row.Sex);
        if(row.Sex == "female"){
            return true;
        }
        else{
            return false;
        }
    })

    console.log(males);
    console.log(females);
})



