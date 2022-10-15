function addNumbers(a: number, b: number): number {
    return a + b;
  }
  function addStrings(a: string, b: string): string {
    return a + " " + b;
  }
  
  function add(a: number | string, b: number | string): number | string | null {
      if (typeof a === 'number' && typeof b === 'number')
          {return a + b;}
  
      if (typeof a === 'string' && typeof b === 'string')
          {return a + b;}
  }
  
  
  function add2(a: number, b: number): number;
  function add2(a: string, b: string): string;
  function add2(a: any, b: any): any {
     return a + b;
  }
 console.log(add2(4,9));
 console.log(add2("Murat","Irmak"));

