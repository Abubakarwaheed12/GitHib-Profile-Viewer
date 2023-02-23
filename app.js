$('#search').click(()=>{
 
    inp=$('#input').val()

    console.log('Search Button Clicked')
    a=$('#name').text()
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
                $('.name').text(response.login)
                $('#userPUrl').text(response.login)
                if(response.bio){
                    $('#bio').text(response.bio)
                }
                else{
                    $('#bio').text('no bio')
                }
                $('#img').attr('src' , response.avatar_url)
                $('#userPUrl').attr('href' , response.html_url)
                $('#followers').text(response.followers)
                $('#following').text(response.following)
            }
        })
    }
})