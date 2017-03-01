var myVar = setInterval(function() { view(getData) }, 1000);

  function view(getData){
    var result = document.getElementById('results-box');
    console.log(result);
    var dataA = getData.dataArray;
    console.log(dataA);
    for(i = 0;i <dataA.length; i++){result.insertAdjacentHTML("beforeend", '<li>' + dataA[i] + '</li>')};

  }(getData);
