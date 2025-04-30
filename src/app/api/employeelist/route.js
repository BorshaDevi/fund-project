export async function GET(request){
try{

}catch(e){
        console.log(e , 'Error in Employee List')
        return NextResponse.json(
            {
                message:'Error in Employee List',
                status:500
            }
        )
    }
}