import { DynamoDB , GetItemCommand } from "@aws-sdk/client-dynamodb";

const DB =new DynamoDB()

const params = {
    TableName : "EmployeeTable" , 
    Key : {
        id:{N:'1'} , 
        EmployeeName : {S:"Ritik"}
    }
}

const response = async()=>{
    try{
        const data = await DB.send(new GetItemCommand(params)) 
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

response()