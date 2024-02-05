import { DynamoDB , UpdateTableCommand } from "@aws-sdk/client-dynamodb";

const DB = new DynamoDB()

const params = {

    ProvisionedThroughput : {
        ReadCapacityUnits : 5 , 
        WriteCapacityUnits : 5
    } , 
    TableName : "EmployeeTable"

}


const updateTable = async ()=>{
try{
    const data = await DB.send(new UpdateTableCommand(params))
    console.log(data)

}
catch(err){
    console.log(err)
}
}

updateTable()