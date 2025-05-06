export async function PUT(request ,{params}) {
    try{

    }catch(error){
        console.log(error, 'Error in Id ways Employee data Update ')
                         return NextResponse.json(
                             {
                                 message:'Error in Id ways Employee data Update',
                                 status:500
                             }
                         )
    }
    
}