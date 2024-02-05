import { DynamoDB , BatchWriteItemCommand } from "@aws-sdk/client-dynamodb"; 

const DB = new DynamoDB()

const params = {
   
    RequestItems : {
        EmployeeTable : [
            {
                PutRequest : {
                    Item : {
                        id : {N :'3'} , 
                        EmployeeName : {S :"R1"} , 
                        salary : {N : '15000'}
                    }
                }
            } , 

            {
                PutRequest : {
                    Item : {
                        id : {N :'4'} , 
                        EmployeeName : {S :"R2"} , 
                        salary : {N : '15000'}
                    }
                }
            } , 

            {
                PutRequest : {
                    Item : {
                        id : {N :'5'} , 
                        EmployeeName : {S :"R3"} , 
                        salary : {N : '15000'}
                    }
                }
            }
        ]
    }

}

const addbatchItem = async ()=>{
    try{
        const data = await DB.send(new BatchWriteItemCommand(params))
        console.log(data)
    }

    catch(err){
        console.log(err)
    }
}

addbatchItem()