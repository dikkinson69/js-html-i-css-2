const books = ["firstBook", "secondBook", "thirdBook"];
const [,, thirdBooka] = books;
console.log(thirdBooka);

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating);
console.log(ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, threeStarRatings, fourStarRatings=0] = ratingStars;
console.log(fourStarRatings);