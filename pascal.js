
<html>
<head>
<script type="text/javascript">
function pasc(n){
var result = [];
    result[0] = [1];
    result[1] = [1,1];
for (var row = 2; row < n; row++){
    result[row] = [1];
    for (var col = 1; col <= row -1; col++){
        result[row][col] = result[row-1][col] + result[row-1][col-1];
        result[row].push(1);
    }
}
return result;
}
function pascalTriangle(){
 var num=document.getElementById("number").value;
for (var i = 0; i < pasc(num).length; i++){
    document.write(pasc(num)[i]+"<br>");
    console.log(pasc(num)[i]+"<br>");
}
}

</script>
</head>
<body>
<form>

Enter the Number of rows:<input type="text" id="number">

<input type="button"  value="Submit" onclick="pascalTriangle()">
</form>
</body>
</html>