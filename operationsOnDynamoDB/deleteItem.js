import { DynamoDB , DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const DB = new DynamoDB()

const params = {
    TableName : "EmployeeTable" , 
    Key : {
        id:{N:'1'} , 
        EmployeeName : {S:"Ritik"}
    }
}

const deleteItem = async ()=>{
    try{
        const data = await DB.send(new DeleteItemCommand(params))
        console.log(data)
    }

    catch(err){
        console.log(err)
    }
}

deleteItem()