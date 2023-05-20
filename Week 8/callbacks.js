try {
    const myName = 'Ali';
    myName = 'Umer';
  } catch (exp) {
    console.log('Oops you are assigning to a constant variable');
  }
  
  function getUserProfile(username, userProfileCallback) {
    let userProfile = {
      username: 'ali123',
      password: 'Ali123456',
      profilePicUrl: 'https://www.test.com/images/ali.jpg',
      firstName: 'Ali',
      lastName: 'Rizvi',
      phone: '283892839823',
    };
  
    userProfileCallback(userProfile);
  }
  
  function getFacebookFriends(userProfile, userProfileCallback) {
    let friends = ['Ali', 'Hamza', 'Umer', 'Faheem', 'Mubashir'];
  
    userProfileCallback(friends);
  }
  
  /**
   * Input: friends, callbackfunction
   * Processing: We need to get posts of our friends, callback the function to return to control
   * Output: None
   */
  function getNewsFeed(friends, callbackfunction) {
    let posts = [
      {
        name: 'Alex',
        likes: 200,
        caption: 'This duck is awesome',
        picUrl:
          'https://media.cnn.com/api/v1/images/stellar/prod/130502050527-lklv-hong-kong-giant-rubber-duck-00005114.jpg?q=x_0,y_0,h_599,w_1065,c_fill/w_850',
      },
      {
        name: 'John',
        likes: 132,
        caption: 'This duck is cool',
        picUrl:
          'https://media.cnn.com/api/v1/images/stellar/prod/130502050527-lklv-hong-kong-giant-rubber-duck-00005114.jpg?q=x_0,y_0,h_599,w_1065,c_fill/w_850',
      },
      {
        name: 'David',
        likes: 300,
        caption: 'This duck is angry',
        picUrl:
          'https://media.cnn.com/api/v1/images/stellar/prod/130502050527-lklv-hong-kong-giant-rubber-duck-00005114.jpg?q=x_0,y_0,h_599,w_1065,c_fill/w_850',
      },
      {
        name: 'Hamza',
        likes: 300,
        caption: 'This duck is angry',
        picUrl:
          'https://media.cnn.com/api/v1/images/stellar/prod/130502050527-lklv-hong-kong-giant-rubber-duck-00005114.jpg?q=x_0,y_0,h_599,w_1065,c_fill/w_850',
      },
    ];
  
    /** Array.filter() => [{}, {}]  */
    /** Array.find() => {} */
  
    // let filteredPosts =  posts.filter((post)=>{
    //   if(post.name ) {
    //     return post;
    //   }
    // });
    let filteredPosts = [];
    friends.forEach((friend) => {
      let postFound = posts.find((post) => {
        return post.name === friend;
      });
      /** Undefined, NULL, 0 => Falsy */
      if (postFound) {
        filteredPosts.push(postFound);
      }
    });
  
    callbackfunction(filteredPosts);
  }
  
  function login(username, password) {
    if (username == 'ali123' && password == 'Ali123456') {
      getUserProfile(username, (userProfile) => {
        //** 5 Seconds */
        getFacebookFriends(userProfile, (friends) => {
          /** 10 seconds */
          getNewsFeed(friends, (posts) => {
            /** 11 Seconds */
            console.log(posts);
          });
        });
      });
    }
  }
  
  login('ali123', 'Ali123456');
  
  function getProfilePicture(username) {
    return new Promise((resolve, reject) => {
      if (username == 'ali') {
        const myName = username;
        myName = 'check';
  
        resolve('ali.jpg');
      } else {
        reject('Sorry no profile picture found !');
      }
    });
  }
  
  getProfilePicture('ali')
    .then((profilePictureUrl) => {
      console.log(profilePictureUrl);
    })
    .catch((exception) => {
      console.log('OOps', exception);
    });
  
  console.log('Hello world');