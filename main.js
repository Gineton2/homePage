/* class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
}

// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
// Instantiation
const book1 = new Book("Book One", "Bob Dole", "1920");
const book2 = new Book("America", "Trump Trump", "666");
const mag1 = new Magazine("Porn", 'Trump', '1988', 'Nov');

// Log
console.log(book2.getAge());
book2.revise("2016");
console.log(book2);
console.log(book2.getAge());
console.log(mag1); */