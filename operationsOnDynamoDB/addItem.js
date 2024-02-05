import { DynamoDB,PutItemCommand } from "@aws-sdk/client-dynamodb";


const DB = new DynamoDB()

const params = {
    TableName : 'EmployeeTable' , 
    Item : {
        id : {N:'1'} , 
        EmployeeName : {S:'Ritik'}
    }
}


const addItem = async ()=>{
    try{
        const data = await DB.send(new PutItemCommand(params))
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

addItem()