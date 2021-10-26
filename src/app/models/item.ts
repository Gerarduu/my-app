import { DoB } from "./DoB";
import { UserName } from "./username";

export class Item {
    constructor(
        public dob: DoB,
        public name: UserName
    ) {}
}