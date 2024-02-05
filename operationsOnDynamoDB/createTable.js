import { DynamoDB, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const DB = new DynamoDB()


const params = {
    TableName : 'EmployeeTable' , 
    KeySchema : [
        {
            AttributeName : 'id' , 
            KeyType : 'HASH'
        } , 
        {
            AttributeName : 'EmployeeName' , 
            KeyType : 'RANGE'
        }
       
    ] , 
    AttributeDefinitions : [
        {
            AttributeName : 'id' ,
            AttributeType : 'N' ,
        }
        , 
        {
            AttributeName : 'EmployeeName' ,
            AttributeType : 'S' ,
        } 

    ] , 
    ProvisionedThroughput : {
        ReadCapacityUnits : 3 , 
        WriteCapacityUnits : 3
    }
}


const createTable = async ()=>{
    try {
        const data = await DB.send(new CreateTableCommand(params ))
        console.log(data)
    }

    catch(err){
        console.log(err)
    }
}

createTable()