
var sendbtn;
var acceptMsg = "Job Accepted";
var requestMsg = "I Need a Job";
$(document).ready(function(){

    function requestJob(message){

        $("#sendbtn").click(function(){

            var messageText = $("#message");
            var notify = "ding";

            if(message.length > 1){
                console.log(notify);
                messageText.append(message);
            }else{
                console.log("no new messages");
            }
    function acceptJob(jobaccepted){

            if(requestJob){
                $('.acceptbtn a').removeClass('hide').addClass('unhide');
            }
            $('.acceptbtn a').click(function(){
                var messageText = $("#acceptmsg");
                messageText.append(jobaccepted);
            });
        }
           acceptJob(acceptMsg);
        });
    }

    requestJob(requestMsg);

});



