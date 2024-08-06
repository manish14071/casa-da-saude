 const catchAsyncErrors=()=>{
    return(req,res,next)=>{
        Promise.resolve(theFunction(req,res,next)).catch(next);
    };
};

export default catchAsyncErrors