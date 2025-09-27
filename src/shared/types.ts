

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits", 
  OurClasses = "ourclasses",
  ContactUs = "contactus" 
}

export interface BenefitType {
  icon:React.ReactElement;
  title:string;
  description: string
}