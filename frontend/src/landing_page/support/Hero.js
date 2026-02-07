import React from 'react';
function Hero() {
    return ( 
        <div style={{backgroundColor:"#f6f6f6",color:"#424242"}}>
            <div className=' p-4'>
                <div className='mx-5 pb-5' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
                    <h1 className='p-2 text-xl font-semibold'>Support Portal</h1>
                    <button className='btn btn-primary mx-4'>My Tickets</button>
                </div>
                <div class="input-group mb-3 mx-5">
  <span class="input-group-text" style={{border:"none"}}><i class="fa fa-search" aria-hidden="true"></i></span>
  <input type="text" placeholder='Eg: How do I open my account, How do i activate F&O...' className='p-3' style={{width:"90%",border:"none"}}/>
</div>
            </div>
        </div>
    );
}

export default Hero;