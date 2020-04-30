$("#sendMail").on("click", function() {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if(name == "")  {
        $("#errorMess").text("Введите имя!");
        return false;
    }else if (phone == ""){
        $("#errorMess").text("Введите телефон!");
        return false;
    }else if (message.length < 5){
        $("#errorMess").text("Введите сообщение!");
        return false;
    }
    $("#errorMess").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'name':name, 'phone':phone, 'message':message},
        dataType: 'html',
        beforeSend: function(){
            $("#sendMail").prop("disabled", true);
        },
        success: function(data){
            if(!data)
                alert("Сообщение не отправлено!");
            else
                $("#mailForm").trigger("reset");    
            $("#sendMail").prop("disabled", false);
        }
    });
});
