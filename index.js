function convertCurrency()
{
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://data.fixer.io/api/latest?access_key=15c25beadd89478ef0916a5a285702b7";
    
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);
            var oneUnit = jsResult.rates[to]/jsResult.rates[from];
            var amount = document.getElementById("fromAmount").value;
            document.getElementById("toAmount").value = (oneUnit*amount).toFixed(2);

        }
    }
}