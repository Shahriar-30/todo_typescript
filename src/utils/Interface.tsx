    export interface DataObj{
        input: string,
        id: number,
        status: boolean
    }
    export interface localDbProps{
        localSet: boolean,
        data?: DataObj
    }