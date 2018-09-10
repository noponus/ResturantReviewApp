createRestaurantHTML = (restaurant) => {
  const li = document.createElement('li');
  const altTag = 'image of a restaurant';
  const image = document.createElement('img');
  image.className = 'restaurant-img';
  image.src = DBHelper.imageUrlForRestaurant(restaurant);
  image.alt  = DBHelper.altTagForRestaurant();
  li.append(image);

  const name = document.createElement('h1');
  name.innerHTML = restaurant.name;
  li.append(name);




  const numOfReviews = restaurant.reviews.length;
  let totalRatingVal = 0;
  for(let i=0; i<numOfReviews; i++){
    totalRatingVal+=restaurant.reviews[i].rating;
  }

  let finalRating = totalRatingVal/numOfReviews;
  let actualRating = finalRating;

  const rating = document.createElement('p');
  let stars = '';
  while(actualRating>0){
    const star = ((actualRating>0)&&(actualRating<1))?'<i class="fa fa-star-half"></i>':'<i class="fas fa-star"></i>'; //far fa-star
    stars+= star;
    actualRating--;
  }
  rating.innerHTML = `${stars} (${finalRating.toFixed(1)}/5) - ${numOfReviews} Reviews`;
  li.append(rating);




  const neighborhood = document.createElement('p');
  neighborhood.innerHTML = `<i class="fas fa-map-marker-alt"></i>${restaurant.neighborhood}`;
  li.append(neighborhood);

  const address = document.createElement('p');
  address.innerHTML = restaurant.address;
  li.append(address);

  const more = document.createElement('a');
  more.innerHTML = 'View Details';
  more.href = DBHelper.urlForRestaurant(restaurant);
  more.setAttribute('aria-label', `View Details Of ${restaurant.name}`);
  more.setAttribute('tabindex', '5');
  li.append(more)

  return li
}