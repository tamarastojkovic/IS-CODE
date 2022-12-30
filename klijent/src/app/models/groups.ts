export interface IGroup {
    id: number,
    id_instruktora:number,
    brojKandidata: number    
}

export class Group {
    constructor(public id: number,
        public id_instruktora:number,
        public brojKandidata: number){}
    }        