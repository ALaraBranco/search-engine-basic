// main JS file that initiates this App/page JS modules
const VehicleSearch = function (cb) {
    // Json Request
    var request = new XMLHttpRequest();

    request.open('GET', 'mocks/list.json', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            try {
                return cb(JSON.parse(request.responseText));
            } catch (err) {
                console.log("No cars with that name were found :(");
                return cb(err);

            }
        } // else if (request.readyState === 4 && request.status === 404) console.log("Source Data " + request.statusText);
    }
    var getUrlParameter = function (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' ')).toLowerCase();
    }
    this.getJsonObject = function () {
            getUrlParameter("q");
            return VehicleSearch(cb);
        }
        // Reference DOM elements
    var vehiclesContainer = document.getElementById("vehicles-container");
    var searchForm = document.getElementById("vehicles-search");
    var searchField = document.getElementById("search-query");
    // Request Images
    var getImageObject = function (imageUrl) {
            var http = new XMLHttpRequest();
            //extend to further validations for images not found 
            imageUrl = "/front-end-test-v2-master/src" + imageUrl;
            http.open('HEAD', imageUrl, false);
            http.send();
            return http.status === 200 ? imageUrl : "/front-end-test-v2-master/src/assets/nopicture.jpg";
        }
        //cookie for saved vehicles
    var filteredShopList = [];
    /*this.manageShopCookie = function () {
        console.log("teste");

        if (getCookie('myShopingVehicles')) {
            filteredShopList = getCookie('myShopingVehicles');
        } else {
            createCookie('myShopingVehicles', filteredShopList);
        }
    }
*/

    var filteredSearchList = [];
    var filterSearchItems = function (object) {
        return object.filter(function (vehicle) {
            if ((vehicle.name.toLowerCase().indexOf(getUrlParameter("q")) > -1))
                filteredSearchList.push(vehicle);
            return filteredSearchList;
        })
    }


    this.getVehiclesList = function (object) {
        filterSearchItems(object);
        console.log(Array.from(readCookie("MySavedShop")));
        //convert the object var to filteredList
        object = filteredSearchList;
        console.log(filteredSearchList);
        vehiclesContainer.innerHTML = "";
        for (i = 0; i < object.length; i++) {
            var imagePath = object[i]["imagePath"];
            var vehicleCard = document.createElement('div');
            vehicleCard.className = "card";
            vehicleCard.classList.add("col-md-4");
            vehicleCard.classList.add("px-0");
            vehicleCard.id = "vehicle_" + i;
            vehicleCard.setAttribute("data-price", object[i]["price"]);

            var vehicleName = document.createElement('div')
            vehicleName.className = "card-header";
            vehicleName.innerHTML = object[i]["name"];

            var vehiclePicture = document.createElement('img')
            vehiclePicture.className = "card-img";
            vehiclePicture.src = getImageObject(imagePath); // 

            var vehiclePriceFormatted = document.createElement('div');
            vehiclePriceFormatted.className = "card-text";
            vehiclePriceFormatted.innerHTML = object[i]["priceFormatted"];

            var vehicleAddToShop = document.createElement('a');
            vehicleAddToShop.className = "btn";
            vehicleAddToShop.classList.add("btn-primary");
            vehicleAddToShop.classList.add("btn-block");
            vehicleAddToShop.setAttribute("data-add", "Add to Shopping Bag");
            vehicleAddToShop.setAttribute("data-remove", "Remove from Shopping Bag");
            vehicleAddToShop.setAttribute("title", object[i]["name"]);
            vehicleAddToShop.href = "#";
            vehicleAddToShop.innerHTML = "Add to Shopping Bag";

            //Append Html Nodes to Card
            vehicleCard.appendChild(vehicleName);
            vehicleCard.appendChild(vehiclePicture);
            vehicleCard.appendChild(vehiclePriceFormatted);
            vehicleCard.appendChild(vehicleAddToShop);

            //Append Card to Container
            vehiclesContainer.append(vehicleCard);
        }
    }
    
    this.setVehiclesActions = function (object) {
        var vehicles = vehiclesContainer.getElementsByClassName("card");
        for (i = 0; i < vehicles.length; i++) {
            // add vehicle to shopping bag
            vehicles[i].getElementsByClassName("btn-primary")[0].addEventListener("click", function (e) {
                e.preventDefault();
                var vehicleSelectedCards = this.parentElement.classList;
                if (vehicleSelectedCards.contains("added-to-shopping-bag")) {
                    vehicleSelectedCards.remove("added-to-shopping-bag");
                    this.text = this.getAttribute("data-add");
                    filteredShopList =  filteredShopList.filter(e => e !== this.title);
                } else {
                    vehicleSelectedCards.add("added-to-shopping-bag");
                    this.text = this.getAttribute("data-remove");
                    filteredShopList.push(this.title);
                }
                eraseCookie("MySavedShop");
                createCookie("MySavedShop", filteredShopList)
                return getShoppingTotal();
            }, true);
        }
    }
    //cookie for saved vehicles
    var createCookie = function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    var readCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';'); 
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    var eraseCookie = function(name) {
        createCookie(name, "", -1);
    }
    // Calculate Shopping Total
    var getShoppingTotal = function () {
        var cartTotal = document.getElementById("cart-total");
        var selectedVehicles = vehiclesContainer.getElementsByClassName("added-to-shopping-bag");
        sum: Number
        sum = 0;
        for (i = 0; i < selectedVehicles.length; i++) {
            sum += +selectedVehicles[i].getAttribute("data-price");
        }
        return document.getElementById("cart-total").innerHTML = sum.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR'
        });
    }

}


window.onload = function (e) {
    // reference DOM elements
    var vehiclesContainer = document.getElementById("vehicles-container");
    var searchForm = document.getElementById("vehicles-search");
    var searchField = document.getElementById("search-query");

    // search
    searchForm.addEventListener("submit", function (e) {
        newSearch.getJsonObject();
    });
    // search results
    const newSearch = new VehicleSearch(function (object) {
        newSearch.getVehiclesList(object);
        newSearch.setVehiclesActions(object);
    })


}
