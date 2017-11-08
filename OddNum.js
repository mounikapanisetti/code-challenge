
<html>
<head>
<script type="text/javascript">

function printOddNumbers(){
 var num=document.getElementById("number").value;
 var splitNum=num.split(",");
 var i = 0;
 var oddArray=[];
 var pos = 0;
 oddArray = getOddList(splitNum, oddArray, i, pos);
 document.write("Given Numbers are:  " +splitNum);
 document.write("<br>");
 document.write("<br>");
 document.write("Odd Numbers are:  " +oddArray);
}

function getOddList(list, oddArray,  i,  pos) {
		if (list.length == i) {
			var newOddArry =[];
			var j = 0;
			oddArray = copyArray(newOddArry, oddArray, j);
			return oddArray;
		}
		if (list[i] % 2 != 0) {
			oddArray[pos] = list[i];
			pos++;
		}
		oddArray = getOddList(list, oddArray, ++i, pos);
		return oddArray;
		}
	
	function copyArray( newOddArry,  oddArray,  j) {
		if (oddArray[j] != null) {
			newOddArry[j] = oddArray[j];
			copyArray(newOddArry, oddArray, ++j);
		}
		return newOddArry;
	}

</script>
</head>
<body>
<form>

Enter the Numbers with comma separated<input type="text" id="number">

<input type="button"  value="Submit" onclick="printOddNumbers()">
</form>
</body>
</html>