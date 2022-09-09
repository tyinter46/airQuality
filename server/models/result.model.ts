import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";



export class Result {
@prop({required: true})
aqius: number;

@prop({required: true})
mainus: string

@prop({required: true})
aqicn: number

@prop({required: true})
maincn: string

@prop({required:true})
postedAt: string

}

const ResultModel = getModelForClass(Result, {
    schemaOptions: {
        timestamps:true
    }
})
export default ResultModel