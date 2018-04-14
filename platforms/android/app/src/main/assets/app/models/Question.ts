import {Options} from "./Options.model";
export class Question {
    id: number;
    name: string;
    questionTypeId: string;
    options: Options[];
    answered: boolean;
    UID: string;
    Tags: string;
    CID: string;
    ClassName: string
    Professor: string;
    by: string;

//     constructor(data: any) {
//         data = data || {};
//         this.id = data.id;
//         this.name = data.name;
//         this.questionTypeId = data.questionTypeId;
//         this.options = [];
//         this.UID = data.UID;
//         data.options.forEach(o => {
//             this.options.push(new Options(o));
//         });
// }
}