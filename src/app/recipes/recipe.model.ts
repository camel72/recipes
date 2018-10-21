export class Recipe {
    name : String
    description: String;
    imagePath: String;

    constructor(name: String, desc: String, imagePath: String){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}