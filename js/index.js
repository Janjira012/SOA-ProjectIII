$(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        url: 'https://soaproductapi.herokuapp.com/products',
        method: 'GET'

    }).then(function (data) {

        addNewRow(data)
    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><a href="view.html?id=' + data[i].id + '">' + data[i].name + '</a></td><td>' + data[i].description + 
            '</td><td><img  class="card-img-top"  src="' + data[i].photo + '"></td><td>'
            + data[i].price + '</td><td>'+ data[i].weight + '</td></tr>';
            $('#pinlist').append(row);
        }

      
        
        // for (var i = 0; i < data.length; i++) {

        //     var row = ' <div class="col-lg-4 col-md-6 mb-4"> <div class="card h-100">'+
        //     '<a href="view.html?id=' + data[i].id + '">'+
        //     '<img class="card-img-top" src="'+data[i].photo+'">'+
        //     '<div class="card-body"><h4 class="card-title">'+
        //     '<a href="view.html?id=' + data[i].id + '">'+data[i].name+'</a></h4>'+
        //     '<h5> price:'+data[i].price+'</h5>'+
        //     '<h5> weight:'+data[i].weight+'</h5>'+
        //     '<p class="card-text">'+ data[i].description+' </div>'+
        //     '<div class="card-footer">'+
        //      ' <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>'
        //     '</div></div> </div>'
        //     $('#pinlist').append(row);
        // }

    }

});