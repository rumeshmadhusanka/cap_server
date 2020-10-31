var firebaseConfig = {
    apiKey: "AIzaSyCnK8zdrLek3DXNTeOBCBI4Vfg_HN8oYuc",
    authDomain: "ornate-node-232512.firebaseapp.com",
    databaseURL: "https://ornate-node-232512.firebaseio.com",
    projectId: "ornate-node-232512",
    storageBucket: "ornate-node-232512.appspot.com",
    messagingSenderId: "394050017494",
    appId: "1:394050017494:web:b2f9f3668f762635739177",
    measurementId: "G-5VFYH7GD8N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
var database = firebase.database();

// var userId = firebase.auth().currentUser.uid;
database.ref('weather').once('value', async (snap) => {

    var all_data = snap.val();

    function displayAverages() {

        let p = Object.keys(all_data).length
        let chart_data = [['Time', 'Temp', 'Humidity', 'Light', 'Pressure'],];
        let timestamps = Object.keys(all_data);
        for (let i = 0; i < p; i++) {
            try {
                let current_array = [];


                let temp = all_data[timestamps[i]]["alert"]["info"][0]["parameter"][0]["value"][0];
                let humidity = all_data[timestamps[i]]["alert"]["info"][0]["parameter"][1]["value"][0];
                let light = all_data[timestamps[i]]["alert"]["info"][0]["parameter"][2]["value"][0];
                let pres = all_data[timestamps[i]]["alert"]["info"][0]["parameter"][3]["value"][0];

                current_array.push(new Date(parseInt(timestamps[i])));
                current_array.push(parseInt(temp))
                current_array.push(parseInt(humidity))
                current_array.push(parseInt(light))
                current_array.push(parseInt(pres))
                chart_data.push(current_array)
            } catch (e) {
                console.error(e);
            }
        }
        console.log(chart_data)

        google.charts.load('current', {'packages': ['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            let x = [
                ['Time', 'Sales', 'Expenses'],
                ['2004', 1000, 400],
                ['2005', 1170, 460],
                ['2006', 660, 1120],
                ['2007', 1030, 540]
            ]
            var data = google.visualization.arrayToDataTable(chart_data);

            var options = {
                title: 'Average',
                curveType: 'function',
                legend: {position: 'bottom'}
            };

            var chart = new google.visualization.LineChart(document.getElementById('averages'));

            chart.draw(data, options);
        }
    }


    function displayStd() {

        let p = Object.keys(all_data).length
        let chart_data = [['Time', 'Temp', 'Humidity', 'Light', 'Pressure'],];
        let timestamps = Object.keys(all_data);
        for (let i = 0; i < p; i++) {
            try {
                let current_array = [];


                let temp = all_data[timestamps[i]]["alert"]["info"][0]["parameter"][4]["value"][0];
                let humidity = all_data[timestamps[i]]["alert"]["info"][0]["parameter"][5]["value"][0];
                let light = all_data[timestamps[i]]["alert"]["info"][0]["parameter"][6]["value"][0];
                let pres = all_data[timestamps[i]]["alert"]["info"][0]["parameter"][7]["value"][0];

                current_array.push(new Date(parseInt(timestamps[i])));
                current_array.push(parseInt(temp))
                current_array.push(parseInt(humidity))
                current_array.push(parseInt(light))
                current_array.push(parseInt(pres))
                chart_data.push(current_array)
            } catch (e) {
                console.error(e);
            }
        }
        console.log(chart_data)

        google.charts.load('current', {'packages': ['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            let x = [
                ['Time', 'Sales', 'Expenses'],
                ['2004', 1000, 400],
                ['2005', 1170, 460],
                ['2006', 660, 1120],
                ['2007', 1030, 540]
            ]
            var data1= google.visualization.arrayToDataTable(chart_data);

            var options1 = {
                title: 'Standard Deviation',
                curveType: 'function',
                legend: {position: 'bottom'}
            };

            var chart = new google.visualization.LineChart(document.getElementById('std'));

            chart.draw(data1, options1);
        }
    }


    try{
        displayAverages();
    }catch (e){
        console.error(e)
    }

    try{
        displayStd();
    }catch (e){
        console.error(e)
    }



});