

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
                if(response){
                    console.log(response)
                    $('.profile').html(`
                            <div class="img-name">
                                <img
                                src="${response.avatar_url}"
                                alt=""
                                id="img"
                                class="img"
                                /><br />
                                <span class="name" id="name">${response.login}</span><br />
                             <a class="username" href="${response.html_url}" id="username">@<span id="userPUrl">${response.login}</span></a>
                            </div>
                            <div class="bio" id="bio">${response.bio ? response.bio : 'No Bio'}</div>
                            
                            <div class="other">
                                <a id="flwrs-link"><span id="followers">${response.followers}</span>followers</a>
                                <a id="flwin-link"><span id="following">${response.following}</span>following</a>
                            </div>
                            <div class="other">
                                <a id="flwrs-link"><span id="repo">${response.public_repos}</span>public Repos</a>
                                <a id="flwin-link"><span id="repo1">${response.public_gists}</span>Public Gists</a>
                            </div>
                `)
                }
            },

            error:function(error){
                console.log(error)
                $('.profile').html('<h2 class="usernames">No User Exist With This Name </h2>')
            }

        })
    }
})


// Loop On Multiple List Of Objects 



// const arr = [
//     {
//         avatar_url
//         : 
//         "https://avatars.githubusercontent.com/u/515861?v=4",
//         bio
//         : 
//         "Senior SWE working on HubSpot's Frontend Platform",
//         blog
//         : 
//         "https://ali.io",
//         company
//         : 
//         "@HubSpot",
//         created_at
//         : 
//         "2010-12-09T07:01:12Z",
//         email
//         : 
//         null,
//         events_url
//         : 
//         "https://api.github.com/users/ali/events{/privacy}",
//         followers
//         : 
//         166,
//         followers_url
//         : 
//         "https://api.github.com/users/ali/followers",
//         following
//         : 
//         330,
//         following_url
//         : 
//         "https://api.github.com/users/ali/following{/other_user}",
//         gists_url
//         : 
//         "https://api.github.com/users/ali/gists{/gist_id}",
//         gravatar_id
//         : 
//         "",
//         hireable
//         : 
//         null,
//         html_url
//         : 
//         "https://github.com/ali",
//         id
//         : 
//         515861,
//         location
//         : 
//         "Somerville, MA",
//         login
//         : 
//         "ali",
//         name
//         : 
//         "Ali Ukani",
//         node_id
//         : 
//         "MDQ6VXNlcjUxNTg2MQ==",
//         organizations_url
//         : 
//         "https://api.github.com/users/ali/orgs",
//         public_gists
//         : 
//         17,
//         public_repos
//         : 
//         120,
//         received_events_url
//         : 
//         "https://api.github.com/users/ali/received_events",
//         repos_url
//         : 
//         "https://api.github.com/users/ali/repos",
//         site_admin
//         : 
//         false,
//         starred_url
//         : 
//         "https://api.github.com/users/ali/starred{/owner}{/repo}",
//         subscriptions_url
//         : 
//         "https://api.github.com/users/ali/subscriptions",
//         twitter_username
//         : 
//         null,
//         type
//         : 
//         "User",
//         updated_at
//         : 
//         "2023-02-22T19:35:06Z",
//         url
//         : 
//         "https://api.github.com/users/ali"
//     },
//     {
//         avatar_url
//         : 
//         "https://avatars.githubusercontent.com/u/515861?v=4",
//         bio
//         : 
//         "Senior SWE working on HubSpot's Frontend Platform",
//         blog
//         : 
//         "https://ali.io",
//         company
//         : 
//         "@HubSpot",
//         created_at
//         : 
//         "2010-12-09T07:01:12Z",
//         email
//         : 
//         null,
//         events_url
//         : 
//         "https://api.github.com/users/ali/events{/privacy}",
//         followers
//         : 
//         166,
//         followers_url
//         : 
//         "https://api.github.com/users/ali/followers",
//         following
//         : 
//         330,
//         following_url
//         : 
//         "https://api.github.com/users/ali/following{/other_user}",
//         gists_url
//         : 
//         "https://api.github.com/users/ali/gists{/gist_id}",
//         gravatar_id
//         : 
//         "",
//         hireable
//         : 
//         null,
//         html_url
//         : 
//         "https://github.com/ali",
//         id
//         : 
//         515861,
//         location
//         : 
//         "Somerville, MA",
//         login
//         : 
//         "ali",
//         name
//         : 
//         "Ali Ukani",
//         node_id
//         : 
//         "MDQ6VXNlcjUxNTg2MQ==",
//         organizations_url
//         : 
//         "https://api.github.com/users/ali/orgs",
//         public_gists
//         : 
//         17,
//         public_repos
//         : 
//         120,
//         received_events_url
//         : 
//         "https://api.github.com/users/ali/received_events",
//         repos_url
//         : 
//         "https://api.github.com/users/ali/repos",
//         site_admin
//         : 
//         false,
//         starred_url
//         : 
//         "https://api.github.com/users/ali/starred{/owner}{/repo}",
//         subscriptions_url
//         : 
//         "https://api.github.com/users/ali/subscriptions",
//         twitter_username
//         : 
//         null,
//         type
//         : 
//         "User",
//         updated_at
//         : 
//         "2023-02-22T19:35:06Z",
//         url
//         : 
//         "https://api.github.com/users/ali"
//     },
//     {
//         avatar_url
//         : 
//         "https://avatars.githubusercontent.com/u/515861?v=4",
//         bio
//         : 
//         "Senior SWE working on HubSpot's Frontend Platform",
//         blog
//         : 
//         "https://ali.io",
//         company
//         : 
//         "@HubSpot",
//         created_at
//         : 
//         "2010-12-09T07:01:12Z",
//         email
//         : 
//         null,
//         events_url
//         : 
//         "https://api.github.com/users/ali/events{/privacy}",
//         followers
//         : 
//         166,
//         followers_url
//         : 
//         "https://api.github.com/users/ali/followers",
//         following
//         : 
//         330,
//         following_url
//         : 
//         "https://api.github.com/users/ali/following{/other_user}",
//         gists_url
//         : 
//         "https://api.github.com/users/ali/gists{/gist_id}",
//         gravatar_id
//         : 
//         "",
//         hireable
//         : 
//         null,
//         html_url
//         : 
//         "https://github.com/ali",
//         id
//         : 
//         515861,
//         location
//         : 
//         "Somerville, MA",
//         login
//         : 
//         "ali",
//         name
//         : 
//         "Ali Ukani",
//         node_id
//         : 
//         "MDQ6VXNlcjUxNTg2MQ==",
//         organizations_url
//         : 
//         "https://api.github.com/users/ali/orgs",
//         public_gists
//         : 
//         17,
//         public_repos
//         : 
//         120,
//         received_events_url
//         : 
//         "https://api.github.com/users/ali/received_events",
//         repos_url
//         : 
//         "https://api.github.com/users/ali/repos",
//         site_admin
//         : 
//         false,
//         starred_url
//         : 
//         "https://api.github.com/users/ali/starred{/owner}{/repo}",
//         subscriptions_url
//         : 
//         "https://api.github.com/users/ali/subscriptions",
//         twitter_username
//         : 
//         null,
//         type
//         : 
//         "User",
//         updated_at
//         : 
//         "2023-02-22T19:35:06Z",
//         url
//         : 
//         "https://api.github.com/users/ali"
//     },
//     {
//         avatar_url
//         : 
//         "https://avatars.githubusercontent.com/u/515861?v=4",
//         bio
//         : 
//         "Senior SWE working on HubSpot's Frontend Platform",
//         blog
//         : 
//         "https://ali.io",
//         company
//         : 
//         "@HubSpot",
//         created_at
//         : 
//         "2010-12-09T07:01:12Z",
//         email
//         : 
//         null,
//         events_url
//         : 
//         "https://api.github.com/users/ali/events{/privacy}",
//         followers
//         : 
//         166,
//         followers_url
//         : 
//         "https://api.github.com/users/ali/followers",
//         following
//         : 
//         330,
//         following_url
//         : 
//         "https://api.github.com/users/ali/following{/other_user}",
//         gists_url
//         : 
//         "https://api.github.com/users/ali/gists{/gist_id}",
//         gravatar_id
//         : 
//         "",
//         hireable
//         : 
//         null,
//         html_url
//         : 
//         "https://github.com/ali",
//         id
//         : 
//         515861,
//         location
//         : 
//         "Somerville, MA",
//         login
//         : 
//         "ali",
//         name
//         : 
//         "Ali Ukani",
//         node_id
//         : 
//         "MDQ6VXNlcjUxNTg2MQ==",
//         organizations_url
//         : 
//         "https://api.github.com/users/ali/orgs",
//         public_gists
//         : 
//         17,
//         public_repos
//         : 
//         120,
//         received_events_url
//         : 
//         "https://api.github.com/users/ali/received_events",
//         repos_url
//         : 
//         "https://api.github.com/users/ali/repos",
//         site_admin
//         : 
//         false,
//         starred_url
//         : 
//         "https://api.github.com/users/ali/starred{/owner}{/repo}",
//         subscriptions_url
//         : 
//         "https://api.github.com/users/ali/subscriptions",
//         twitter_username
//         : 
//         null,
//         type
//         : 
//         "User",
//         updated_at
//         : 
//         "2023-02-22T19:35:06Z",
//         url
//         : 
//         "https://api.github.com/users/ali"
//     },
//     {
//         avatar_url
//         : 
//         "https://avatars.githubusercontent.com/u/515861?v=4",
//         bio
//         : 
//         "Senior SWE working on HubSpot's Frontend Platform",
//         blog
//         : 
//         "https://ali.io",
//         company
//         : 
//         "@HubSpot",
//         created_at
//         : 
//         "2010-12-09T07:01:12Z",
//         email
//         : 
//         null,
//         events_url
//         : 
//         "https://api.github.com/users/ali/events{/privacy}",
//         followers
//         : 
//         166,
//         followers_url
//         : 
//         "https://api.github.com/users/ali/followers",
//         following
//         : 
//         330,
//         following_url
//         : 
//         "https://api.github.com/users/ali/following{/other_user}",
//         gists_url
//         : 
//         "https://api.github.com/users/ali/gists{/gist_id}",
//         gravatar_id
//         : 
//         "",
//         hireable
//         : 
//         null,
//         html_url
//         : 
//         "https://github.com/ali",
//         id
//         : 
//         515861,
//         location
//         : 
//         "Somerville, MA",
//         login
//         : 
//         "ali",
//         name
//         : 
//         "Ali Ukani",
//         node_id
//         : 
//         "MDQ6VXNlcjUxNTg2MQ==",
//         organizations_url
//         : 
//         "https://api.github.com/users/ali/orgs",
//         public_gists
//         : 
//         17,
//         public_repos
//         : 
//         120,
//         received_events_url
//         : 
//         "https://api.github.com/users/ali/received_events",
//         repos_url
//         : 
//         "https://api.github.com/users/ali/repos",
//         site_admin
//         : 
//         false,
//         starred_url
//         : 
//         "https://api.github.com/users/ali/starred{/owner}{/repo}",
//         subscriptions_url
//         : 
//         "https://api.github.com/users/ali/subscriptions",
//         twitter_username
//         : 
//         null,
//         type
//         : 
//         "User",
//         updated_at
//         : 
//         "2023-02-22T19:35:06Z",
//         url
//         : 
//         "https://api.github.com/users/ali"
//     }
// ]



// let data = ''
// arr.map(v => {
//     data += `
//                 <div class="img-name">
//                     <img
//                     src="${v.avatar_url}"
//                     alt=""
//                     id="img"
//                     class="img"
//                     /><br />
//                     <span class="name" id="name">${v.login}</span><br />
//                     <a class="username" href="${v.html_url}" id="username">@<span id="userPUrl">${v.login}</span></a>
//                 </div>
//                 <div class="bio" id="bio">${v.bio ? v.bio : 'No Bio'}</div>
                
//                 <div class="other">
//                     <a id="flwrs-link"><span id="followers">${v.followers}</span>followers</a>
//                     <a id="flwin-link"><span id="following">${v.following}</span>following</a>
//                 </div>
//                 <div class="other">
//                     <a id="flwrs-link"><span id="repo">${v.public_repos}</span>public Repos</a>
//                     <a id="flwin-link"><span id="repo1">${v.public_gists}</span>Public Gists</a>
//                 </div>
//             `
// })