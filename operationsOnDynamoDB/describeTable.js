import { DynamoDB, DescribeTableCommand } from "@aws-sdk/client-dynamodb";

const DB = new DynamoDB()

const params = {
    TableName : 'EmployeeTable'
}

const describeTable = async()=>{
    try{
        const data = await DB.send(new DescribeTableCommand(params))
        console.log(data)
    }
     catch(err){
        console.log(err)
     }
}

describeTable()