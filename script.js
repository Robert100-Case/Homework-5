document.getElementById("p1b1").addEventListener("click", clicked);
document.getElementById("p1b2").addEventListener("click", clicked);
document.getElementById("p1b3").addEventListener("click", clicked);
    

var testnum = new Number(1);

function clicked()
{
    testnum += 1;
    
    if(testnum === 2){
        
        document.body.innerHTML="";
        
    
        
        var headingadd = document.createElement("h3");
        headingadd.textContent = "The increment operator___";
        document.body.appendChild(headingadd);
            
    var page2b1 = document.createElement("button");
    //page2b1.setAttribute("style","color:green;");
    page2b1.textContent = "1) subtracts one from a variable";
    document.body.appendChild(page2b1);
    var labeladd = document.createElement("br");
    document.body.appendChild(labeladd);
    var labeladd = document.createElement("button");
    labeladd.textContent = "2) adds one to a variable";
    document.body.appendChild(labeladd);
    var labeladd = document.createElement("br");
    document.body.appendChild(labeladd);
    var labeladd = document.createElement("button");
    labeladd.textContent = "3) adds 10 to a variable";
    document.body.appendChild(labeladd);
    
        
}
    else if(testnum === 3){
        
        
        document.body.innerHTML="";
        alert(pagenum);
        
        var headingadd = document.createElement("h3");
        headingadd.textContent = "the THIS keyword ___";
        document.body.appendChild(headingadd);
                
        var labeladd = document.createElement("button");
        labeladd.textContent = "1) refers to the current array";
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("button");
        labeladd.textContent = "2) refers to the current method";
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("button");
        labeladd.textContent = "3) refers to the current object";
        document.body.appendChild(labeladd);
            
    }
    else if(testnum === 4){
        
    
        document.body.innerHTML="";
        alert(pagenum);
        
        var headingadd = document.createElement("h3");
        headingadd.textContent = "The concept of encapsulation means___";
        document.body.appendChild(headingadd);
                
        var labeladd = document.createElement("button");
        labeladd.textContent = "1) a variable or method can only be private";
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("button");
        labeladd.textContent = "2) a variable or method can be public or protected only";
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("br");
        document.body.appendChild(labeladd);
        var labeladd = document.createElement("button");
        labeladd.textContent = "3) a variable or method can be private, public, or protected";
        document.body.appendChild(labeladd);
            
    }

    
}

