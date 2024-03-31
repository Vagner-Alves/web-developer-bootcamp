const tweetForm = document.querySelector('#tweet');
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit', (Event) =>{
    Event.preventDefault();
    const userName = tweetForm.elements.username;
    const newComment = tweetForm.elements.comment;
    addTweet(userName.value, newComment.value);
    userName.value = '';
    newComment.value = '';
});

const addTweet = (userName, newComment) =>{
    const newLi = document.createElement('LI');
    const bTag = document.createElement('b');

    bTag.append(userName);
    newLi.append(bTag);
    newLi.append(`- ${newComment}`);
    tweets.append(newLi);
};