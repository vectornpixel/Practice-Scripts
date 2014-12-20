/**
 * Created by asimcraft on 12/17/14.
 */
// Allow one user to select the friend he wants to add. when the user adds friend that user is added to his list
$(document).ready(function(){

    var Person = {
        name:"Asim",
        location: "Detroit, MI",
        isfriend: false,
        friendlist: []
    }
    var Person2 = {
        name:"Tim",
        location: "Novi, MI",
        isfriend: false,
        friendlist: []
    }
    function sendRequest(){

        $(".followBtn a").click(function(){
            if(Person2.isfriend == false){
                Person.isfriend = true;
                Person.friendlist.push(Person2.name);
            }
            console.log(Person);

            function displayUser(){
                var myfriends = Person.friendlist;
                $(".mydata").append(myfriends);
                console.log(myfriends);
            }

            displayUser();

        });

    }
sendRequest();

});
