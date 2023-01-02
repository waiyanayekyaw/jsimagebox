const getimageboxes = document.querySelectorAll('.imgbox');


getimageboxes.forEach(function(getimagebox,idx){

    getimagebox.addEventListener('click',function(){
        // console.log(idx);
        showbox(idx);
    })
});


function showbox(idx){

    getimageboxes.forEach(function(imagebox,curidx){


        if(idx === curidx){
            imagebox.classList.add('show');

            imagebox.addEventListener('click',function(e){
                if(e.target.className === 'btn-close'){
                    imagebox.classList.remove('show');
                }

                if(e.target.className === 'btn'){
                    const subbtn = getimageboxes[idx].querySelector('.btn');
                    subbtn.textContent = 'Subscribed';
                }
            })

        }else{
            imagebox.classList.remove('show');
        }
    });
}
