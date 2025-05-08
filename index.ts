{
  //======================================================

  function formatString(name: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return name.toLowerCase();
    } else if (toUpper === true) {
      return name.toUpperCase();
    } else {
      return name.toUpperCase();
    }
  }

  //   console.log(formatString("fara"));
  //   console.log(formatString("fara", false));
  //   console.log(formatString("fara", true));

  // =======================================================

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  const movies = [
    { title: "Movie A", rating: 2.7 },
    { title: "Movie B", rating: 4.9 },
    { title: "Movie C", rating: 4.0 },
    { title: "Movie D", rating: 3.5 },
  ];

  console.log(filterByRating(movies));

  // =======================================================

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  //   console.log(concatenateArrays(["a", "b"], ["c"]));

  //   // Output: ["a", "b", "c"]

  //   console.log(concatenateArrays([1, 2], [3, 4], [5]));

  // Output: [1, 2, 3, 4, 5]

  // =======================================================

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;

      this.year = year;
    }

    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);

      this.model = model;
    }

    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");

  console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"

  console.log(myCar.getModel());

  // =======================================================

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  //   console.log(processValue("hello")); // Output: 5

  //   console.log(processValue(10)); // Output: 20

  interface Product {
    name: string;

    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((max, product) =>
      product.price > max.price ? product : max
    );
  }

  // const products = [
  //   { name: "Pen", price: 10 },

  //   { name: "Notebook", price: 205 },

  //   { name: "Bag", price: 50 },
  // ];

  // console.log(getMostExpensiveProduct(products));

  // =======================================================

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

    // =======================================================
    
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000); // 1 second delay
    });
  }
}

