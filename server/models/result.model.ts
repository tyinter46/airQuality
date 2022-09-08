import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";


export class Result {
@prop({required: true})
aquis: string;

@prop({required: true})
mainus: string

@prop({required: true})
aqicn: string

@prop({required: true})
maincn: string

}

const ResultModel = getModelForClass(Result)
export default ResultModel