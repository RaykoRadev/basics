function password(input) {
    const userPassword = input[0];

    if (userPassword == 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

password(['s3cr3t!P@ssw0rd']);
password(['kashfkgfkjahsfd']);