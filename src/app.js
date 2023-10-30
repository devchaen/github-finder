// Search button 클릭 시 검색
document.getElementById('searchButton').addEventListener('click', function() {
    const github = new GitHub();
    const ui = new UI();
    const username = document.getElementById('username').value;

    if (username !== '') {
        github.getUserData(username)
            .then(data => {
                if (data) {
                    ui.showProfile(data);
                }
                else {
                    console.log('no data');
                    ui.userNotFoundMessage();
                }  
            });
    }
});

// input에서 Enter key 눌렀을 시 검색
document.getElementById('username').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const github = new GitHub();
        const ui = new UI();
        const username = e.target.value;
        
        if (username !== '') {
            github.getUserData(username)
                .then(data => {
                    ui.showProfile(data);
                });
        }
    }
})