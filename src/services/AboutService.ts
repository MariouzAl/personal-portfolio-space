import { calculateAge } from "../utils/calculateAge";
export class Person {
  name: string;
  birthday: Date;
  phone: string;
  city: string;
  email: string;
  freelance: string;
  degree: string;
  description: string;
  constructor(
    name: string,
    birthday: Date,
    phone: string,
    city: string,
    email: string,
    freelance: string,
    degree: string,
    description: string 
  ) {
    this.name = name;
    this.birthday = birthday;
    this.phone = phone;
    this.city = city;
    this.email = email;
    this.freelance = freelance;
    this.degree = degree;
    this.description = description;
  }
  getBirthday(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const parts = formatter.formatToParts(this.birthday);
    const month = parts.find((part) => part.type === "month")?.value;
    const day = parts.find((part) => part.type === "day")?.value;
    const year = parts.find((part) => part.type === "year")?.value;
    if (!month || !day || !year) {
      throw new Error("Invalid date format");
    }
    return ` ${month} ${day} ${year}`;
  }
  getPhone(): string {
    return this.phone;
  }
  getCity(): string {
    return this.city;
  }
  getEmail(): string {
    return this.email;
  }
  getFreelance(): string {
    return this.freelance;
  }
  getDegree(): string {
    return this.degree;
  }

  getAge(): string {
    return calculateAge(this.birthday);
  }
  getName(): string {
    return this.name;
  }
  getDescription(): string {
    return this.description;
  }
}

export class SkillInfo {
  private skill: string;
  private level: number;
  private firstUsedDate: Date;

  constructor(skill: string, level: number, firstUsedYear: number | Date) {
    this.skill = skill;
    this.level = level;
    if (typeof firstUsedYear === "number") {
      this.firstUsedDate = new Date();
      this.firstUsedDate.setFullYear(firstUsedYear);
    } else {
      this.firstUsedDate = firstUsedYear;
    }
  }

  getSkill(): string {
    return this.skill;
  }
  getLevel(): number {
    return this.level;
  }
  getExperience(): Date {
    return this.firstUsedDate;
  }

  getExperienceLevel(): string {
    if (!this.firstUsedDate) {
      return `${this.level}%`;
    } else {
      return `${calculateAge(this.firstUsedDate)} - ${this.level}%`;
    }
  }
}

export class AboutService {
  private person: Person;
  constructor() {
    this.person = new Person(
      "Mario Rivera",
      new Date(1986, 10, 10),
      "+52 229-148-6661",
      "San Pedro Tlaquepaque, Jalisco",
      "ace.mrivera@gmail.com",
      "Available",
      "engineer",
      "about.description"
    );
  }
  getPerson(): Person {
    return this.person;
  }

  getSkills(): SkillInfo[] {
    return [
      new SkillInfo("HTML", 70, 2009),
      new SkillInfo("CSS/SCSS", 70, 2011),
      new SkillInfo("Tailwind CSS", 10, new Date(2025, 3, 1)),
      new SkillInfo("JavaScript", 80, 2011),
      new SkillInfo("TypeScript", 80, 2012),
      new SkillInfo("React", 80, 2018),
      new SkillInfo("Angular", 80, 2013),
      new SkillInfo("Node.js", 80, 2016),
      new SkillInfo("Express.js", 80, 2017),
      new SkillInfo("MongoDB", 70, 2017),
      new SkillInfo("Postgress", 70, 2017),
      new SkillInfo("MySQL", 70, 2009),
      new SkillInfo("Bootstrap", 80, 2015),
      new SkillInfo("Git", 80, 2011),
      new SkillInfo("Domain Driven Design", 75, 2023),
      new SkillInfo("Photoshop", 80, 1999),
      new SkillInfo("Docker", 30, 2023),
      new SkillInfo("Microservices", 70, 2018),
      new SkillInfo("Rest Services", 70, 2018),
      new SkillInfo("GraphQL", 50, 2022),
      new SkillInfo("UML", 70, 2009),
      new SkillInfo("Design Patterns", 75, 2018),
      new SkillInfo("OOP", 90, 2018),
      new SkillInfo("Python", 60, 2022),
      new SkillInfo("Android Development", 50, 2015),
    ];
  }
}
