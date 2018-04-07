import {User} from "./User.model";

export class Classroom{
    
    public id: number;
    public name: string;
    public professor: string;
    public institution: string;
    public members: User[];
    public classCode: string;
    public year: string;
    public UID: string;
} 