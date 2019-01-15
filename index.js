let role = 'guest';

switch (role) {
    case 'guest':
        console.log('guest user');
            break;

    case 'moderator':
        console.log('moderator user');
           break;
           
     default:
        console.log('unknown user');

}

if (role === 'guest') console.log('guest');
else if (role === 'moderator') console.log('moderator');
else console.log('unknown user');