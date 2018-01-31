var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "elephant",
    database: "scamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connection.connect');
    showTable();
});

function showTable() {
    // console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
   // define a new table which will display the results of our database query
          var table = new Table({
              head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
          });
          console.log("===========================================");
   
   // here we push data from the 'product' database table into the display table
      for (var i = 0; i < res.length; i++) {
          table.push([res[i].id, res[i].product_name, res[i].dept_name, res[i].price, res[i].qty_in_stock]);
      }
      console.log("-----------------------------------");
      console.log(table.toString());
       runSearch();
    });
   }

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "choices",
            message: "Enter the ID of the product you would like to buy.",
            // validate: function (value) {
            //     if (isNaN(value) === false) {
            //         console.log('true')
            //         return true;
            //     }
            //     console.log('false')
            //     return false;
            // }
        })
        .then(function (answer) {
            var queryId = "SELECT * FROM products WHERE ?";
            connection.query(queryId, { id: answer.action }, 
                function (err, res) {
                // console.log(res[0].id);
            })
            amountOfProduct();
        }) 
};
function amountOfProduct() {
    inquirer
    .prompt({
        name: "action",
        type: "input",
        message: "Enter the amount of the product you would like to buy.",
        // validate: function (value) {
        //     if (err) throw err;
        //     console.log('validate function');
        //     if (isNaN(value) === true) {
        //         console.log('false')
        //         return false;
        //     }
        //     console.log('true')
        //     return true;
        // }
    })
    .then(function (answer) {
        console.log('...');
        var queryId2 = "SELECT * FROM products WHERE ?";
        connection.query(queryId2, { qty_in_stock: answer.action }, function (err, res) {
        console.log("Quantity is: " + res[0].qty_in_stock);
        });
        updateInventory();
    });
};

function updateInventory() {
    console.log("Updating inventory...\n");
    var queryUpdate = connection.query("UPDATE products SET ? WHERE ?",
        [
            {
                quantity: res[0].qty_in_stock,
            },
            {
                id: res[0].id
            }
        ],
        function (err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            // deleteProduct();
        });
    
    // logs the actual query being run
    console.log(query.sql);
}
