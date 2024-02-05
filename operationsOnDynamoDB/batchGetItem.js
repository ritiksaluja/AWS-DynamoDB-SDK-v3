import { DynamoDB , BatchGetItemCommand } from "@aws-sdk/client-dynamodb";

const DB = new DynamoDB()

const params = {

    RequestItems : {
        "EmployeeTable" : {
            Keys : [
                {
                    "id" : {N : '2'} , EmployeeName : {S: "saluja"}
                } , 

                {
                    "id" : {N : '3'} , EmployeeName : {S : "R1"}
                } , 

                {
                    "id" : {N : '4'} , EmployeeName : {S: "R2"}
                }

            ]
        }
    }

}


const getBatchItem = async()=>{
    try{
        const data = await DB.send(new BatchGetItemCommand(params)) 

        console.log(data.Responses.EmployeeTable)
    }

    catch(err){
        console.log(err)
    }
}

getBatchItem()