// 1st creational design pattern - SINGLETON

class Singleton {
  private static instance: Singleton;

  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

let newInstance: Singleton = Singleton.getInstance();
newInstance.value = 25;

let anotherInstance: Singleton = Singleton.getInstance();
anotherInstance.value = 50;

console.log("Singleton", newInstance.value);
console.log("new Singleton", anotherInstance.value);
console.log(newInstance === anotherInstance);

// ************************************************************************************************

class Logger {
  private static instance: Logger | null = null;

  private constructor() {}

  public static getInstance(): Logger {
    if (this.instance === null) {
      this.instance = new Logger();
    }
    return this.instance;
  }

  public log() {
    console.log("");
  }
}
