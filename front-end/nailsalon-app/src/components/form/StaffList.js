const StaffListStyle = {
    display:"flex",
    flexDirection:"column",
    margin:"45px",
    border:"20px",
    padding:"10px",
    width:"auto",
    gap:"30px"
}
    



function StaffList({children}){
    return (
        <>
            <div style={StaffListStyle}>
                {children}
            </div>
        </>
    )
}

export default StaffList;