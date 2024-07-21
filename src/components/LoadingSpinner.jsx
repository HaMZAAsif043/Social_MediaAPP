const LoadingSpinnner = () => { 
    return (
        <>
            <div className="d-flex justify-content-center spinner">
                <div className="spinner-border" role="status" style ={{width:"3rem",height:"3rem"}}>
                    <span className="sr-only"></span>
                </div>
            </div>
        </>);
}
export default LoadingSpinnner;