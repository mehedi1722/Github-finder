class UI {
    constructor() {
        this.Profile = document.querySelector('.User_Details');
    }

    DisplayProfile(user) {
        const {avatar_url, login, followers, following, html_url, location, email, company, id} = user
        this.Profile.innerHTML = `

        <div class="profile card">
                <div class="user">
                    <div class="user_image">
                        <img src="${avatar_url}" alt="">
                    </div>
                    <div class="user_Name">
                        <h1>${login}</h1>
                        <div class="viewMore">
                            <a href="${html_url}">View More</a>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <ul class="information">
                        <li>
                            <p>ID : <span>${id}</span></p> 
                        </li>
                        <li>
                            <p>email : <span>${email}</span></p> 
                        </li>
                        <li>
                            <p>Follower : <span>${followers}</span></p> 
                        </li>
                        <li>
                            <p>following : <span>${following}</span></p> 
                        </li>
                        <li>
                            <p>location : <span>${location}</span></p> 
                        </li>
                        <li>
                            <p>company : <span>${company}</span></p> 
                        </li>
                    </ul>
                </div>
            </div>

        `
    }

    alert(message, className) {
        const empty_field = `
        <div class=${className}>
            <h4>${message}</h6>
        </div>
        `
        this.Profile.innerHTML = empty_field
    }
}