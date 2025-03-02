export interface TodoInitialState{
    todos:TodoType[]
}

export interface TodoType{
    id:number,
    content:string
}