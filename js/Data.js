html5sql.openDatabase("DBWhatTheCar","Cardatabase",3*1024*1024);

function dropDataBase(){
    html5sql.process(
    [
        "DROP DATABASE DBWhatTheCar;"
    ],function(){
        console.log("droptdatabase");
    },catchError
    )
}
function checkDB(){
    html5sql.process(
        [
            "CREATE TABLE IF NOT EXISTS cars (CarID INTEGER PRIMARY KEY,CarName TEXT, Specs TEXT,Question TEXT,Answer1 TEXT,Answer2 TEXT,Answer3 TEXT,CorrectAnswer TEXT, picture TEXT);",
            "CREATE TABLE IF NOT EXISTS user (userID INTEGER PRIMARY KEY,score INTEGER, LEVEL INTEGER);",
            "SELECT * FROM cars;"
        ],
        function(transaction, results, rowsArray){
            if(rowsArray.length > 1){
                console.log("data!")
            }else{
                console.log("no Data");
                populateDB();
            }
        },catchError);

}

function dropTables()
{
 html5sql.process(
    [
        "DROP TABLE cars;",
        "DROP TABLE user;"
    ],
    function(){
        console.log('dropped!');
    },catchError);
}
        
function catchError(tx, err) {
        console.log("Error processing SQL: "+err);
}

function populateDB(){
    html5sql.process(
    [
        'INSERT INTO cars (CarName,Specs,Question,Answer1,Answer2,Answer3,CorrectAnswer,picture) VALUES ("Ferrari F40","De Ferrari F40 is een supersportwagen van Ferrari uit 1987, de laatste die werd gebouwd onder toezicht van Enzo Ferrari. Met een topsnelheid van 324 km/u en een 0-100 km/u tijd van ongeveer 4 seconden was de F40 de snelste productiewagen uit zijn tijd.","What car is this?","Ferrari enzo","Ferrari F50","Ferrari F40","Ferrari F40","Images/F40.jpg");',
        'INSERT INTO cars (CarName,Specs,Question,Answer1,Answer2,Answer3,CorrectAnswer,picture) VALUES ("Pagani Huayra","De Pagani Huayra is een sportauto van de Italiaanse automobielconstructeur Pagani. Het is de tweede auto van het merk, de opvolger van de Pagani Zonda. De genen van de Zonda zijn nog duidelijk zichtbaar. Zo is de kenmerkende uitlaat aanwezig en doet het silhouet denken aan de Zonda.","What car is this?","Ferrari 458","Pagani Huayra","Lamborgini aventador","Pagani Huayra","Images/huayra.jpg");',
        'INSERT INTO cars (CarName,Specs,Question,Answer1,Answer2,Answer3,CorrectAnswer,picture) VALUES ("Maserati MC12","The Maserati MC12 is a two-seater sports car produced by Italian car maker Maserati to allow a racing variant to compete in the FIA GT Championship. The car entered production in 2004 with 30 cars produced (five of which were not for sale). A further 25 were produced in 2005 making a total of 50 cars available for customers, each of which were pre-sold for €600,000.Maserati designed and built the car on the chassis of the Enzo Ferrari but the final car has much larger size and a lower drag coefficient. The MC12 is longer, wider and taller and has a sharper nose and smoother curves than the Enzo Ferrari, which has faster acceleration, better braking performance (shorter braking distance) and a higher top speed. The top speed of the Maserati MC12 is 330 kilometres per hour (205 mph) whereas the top speed of the Enzo Ferrari is 350 kilometres per hour (217.5 mph).","What car is this?","Ferrari FFX","Maserati MC12","Masarati Grand Turismo","Maserati MC12","Images/mc12.jpg");',
        'INSERT INTO cars (CarName,Specs,Question,Answer1,Answer2,Answer3,CorrectAnswer,picture) VALUES ("Saleen S7","The Saleen S7 is a limited-production, hand-built, high-performance American supercar developed jointly by Steve Saleen for the initial concept and direction, Hidden Creek Industries for resources and initial funding, Phil Frank for the body and interior CAD design and development, and Ray Mallock Ltd. for the chassis engineering .It was the only car produced by Saleen not based on an existing chassis., and became America s first production supercar.The S7 debuted on August 19, 2000 at the Monterey Historic Races. The all-aluminum 427 (a bored-and-stroked derivative of Ford s 351 Windsor small-block, not a big-block) is remarkably tractable and flexible for such a high-output unit—550 hp at 6400 rpm. In 2005, the S7 gained a more powerful twin-turbo powerplant that boosted engine power to 750 horsepower (760 PS/559 kW) and the top speed 248 mph (399 km/h).","What car is this?","Saleen S7","Saleen RS7","Ford GT","Saleen S7","Images/s7.jpg");',
        'INSERT INTO cars (CarName,Specs,Question,Answer1,Answer2,Answer3,CorrectAnswer,picture) VALUES ("Hennessey Venom GT","The Hennessey Venom GT is an American sports car manufactured by Texas-based Hennessey Performance Engineering. It was revealed on March 29, 2010 On January 21, 2013, the Venom GT set a new Guinness World Record for an average 0–300 kilometres per hour (0–190 mph) acceleration time of 13.63 seconds, thus making it the quickest modified production car in the world. In addition, the car set an unofficial record for 0–200 mph (0–320 km/h) acceleration at 14.51 seconds, beating the Koenigsegg Agera R s time of 17.68 seconds, making it the fastest accelerating car in the world.","What car is this?","Lotus exige","Hennesey Venom GT","lotus evora","Hennesey Venom GT","Images/venomgt.jpg");',
        'INSERT INTO user (score,level)VALUES (0,1)'
        
    ],
        function(){
            console.log("populated");
        },catchError);

}