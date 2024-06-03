class Individual {
  protected exp: number;

  constructor(experience: number) {
    this.exp = experience;
  }
}

class Employee extends Individual {
  public getExperience(): number {
    return this.exp;
  }
}

// Usage
const Riyad = new Employee(5);
console.log(Riyad.getExperience()); // This will log '5' to the console
