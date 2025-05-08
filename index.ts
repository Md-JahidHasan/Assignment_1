{
  //1.======================================================

  function formatString(name: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return name.toLowerCase();
    } else if (toUpper === true) {
      return name.toUpperCase();
    } else {
      return name.toUpperCase();
    }
  }

    
    
    
    
  // 2.=======================================================

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

    
    
    
  // 3.=======================================================

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }

    
    
    
    
  // 4.=======================================================

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

    
    
    
    
  // 5.=======================================================

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
    
    
    
    

  // 6.=======================================================

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

    
    
    

  // 7.=======================================================

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

    
    
    
    
  // 8.=======================================================

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

