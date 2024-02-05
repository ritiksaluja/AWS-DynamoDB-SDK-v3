import { DynamoDB, ListTablesCommand } from "@aws-sdk/client-dynamodb";

const DB = new DynamoDB()


const ListTables = async ()=>{
   const data = await DB.send(new ListTablesCommand())
   console.log(data)
}

ListTables()

