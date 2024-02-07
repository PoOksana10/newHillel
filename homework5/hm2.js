let distanceKm = parseInt(prompt("Please put distance in kilometres"));
let distanceFt = parseInt(prompt("Please put distance in ft"));

let convertedKM = distanceFt * 0.000305;

if (convertedKM < distanceKm) {
    alert("Distance in kilometers" + " " + distanceKm + " km " + " " + "is greater than distance in feet equal to" + " "
        + convertedKM + " km ")
} else
    alert("Distance in feet equal to " + " " + convertedKM + " km " + " " + "is greater than distance in kilometers" + " "
        + distanceKm + " km ")