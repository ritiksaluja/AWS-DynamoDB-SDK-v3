import { DynamoDB , DeleteTableCommand } from "@aws-sdk/client-dynamodb";

const DB = new DynamoDB()

const params = {
    TableName : "EmployeeTable"
}

const deleteTable = async ()=>{
    try{

        const data = await DB.send(new DeleteTableCommand(params))
        console.log(data)
    }
    catch(err){
        console.log(err)
    }

}
deleteTable()