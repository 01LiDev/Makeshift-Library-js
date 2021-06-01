class Media {
  constructor(title,isCheckedOut,ratings){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(maybe){
    this._isCheckedOut = maybe;
  }
  toggleCheckoutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return ratingsSum/lengthOfArray;
  }
  addRating(rate){
    this.ratings.push(rate);
  }
}
class Book extends Media{
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
 
  }
  get author(){
      return this._author;
  }
  get pages(){
    return this._pages;
  }
}
class Movie extends Media{
  constructor(director,title,runtime){
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director(){
    return this._director;
  }
  get runtime(){
    return this._runtime;
  }
}
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus;
historyOfEverything.addRating(4,5,5);
historyOfEverything.addRating(4,5,5);
historyOfEverything.addRating(4,5,5);
console.log(historyOfEverything);
console.log('Checked Out Status: '+ historyOfEverything.isCheckedOut)
console.log("Average Rating of: " +historyOfEverything.getAverageRating());


const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus;
speed.addRating(1,1,5);
speed.addRating(1,1,5);
speed.addRating(1,1,5);
console.log(speed);
console.log('Checked Out Status: '+ speed.isCheckedOut)
console.log("Average Rating of: " +speed.getAverageRating());










