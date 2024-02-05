import { DynamoDB , UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const DB = new DynamoDB()

const params = {
    TableName : 'EmployeeTable' , 
    Key : {
        id : {N:'1'} , 
        EmployeeName : {S:'Ritik'}
    } , 
    UpdateExpression : 'set  salary = :n' , 
    ExpressionAttributeValues : {
        ":n" : { N:'10000'}
    } , 
    ReturnValues :"UPDATED_NEW"
}

const updateValue = async ()=>{
    try{
        const data = await DB.send(new UpdateItemCommand(params))
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

updateValue()