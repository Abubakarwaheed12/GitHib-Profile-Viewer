$('#search').click(()=>{
 
    inp=$('#input').val()

    console.log('Search Button Clicked')
    a=$('#name').innerText
    console.log(a)
    if(inp==''){
        console.log('user name is empty')
    }
    else{
        
        console.log(` user enters ${inp} `)
        $.ajax({
            url:`https://api.github.com/users/${inp}`,
            type:'get',
            success:function(response){
                console.log(response)
                $('.name').innerText=response.login
                console.log(a)
                console.log(response.login)
            }
        })
    }
})