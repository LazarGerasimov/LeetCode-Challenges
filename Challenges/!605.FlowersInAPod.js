



/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let space = 0;

    for (let i = 0; i < flowerbed.length; i++) {

        //for edge cases where we only have 1 slot 
        if (flowerbed.length === 1 && flowerbed[0] == 0) {
            space++;
            break;
        }

        //for cases where first two slots are zeros
        if (flowerbed[0] == 0 && flowerbed[1] == 0) {
            flowerbed[0] = 1;
            space++;
        }

        //for cases where last two slots are zeros
        if (flowerbed[flowerbed.length - 1] == 0 && flowerbed[flowerbed.length - 2] == 0) {
            flowerbed[flowerbed.length - 1] = 1;
            space++;
        }

        //after the previous conditions are checked and flowerbed amender, check for consecutive 3 empty slots to plant a flower
        if (flowerbed[i] == 0 && flowerbed[i + 1] == 0 && flowerbed[i + 2] == 0) {
            space++;
            flowerbed[i + 1] = 1;
        }
    }

    return n <= space;

};