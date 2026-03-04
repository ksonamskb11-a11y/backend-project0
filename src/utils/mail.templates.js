import Mailgen from 'mailgen';

var mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        // Appears in header & footer of e-mails
        name: 'project camp',
        link: 'https://google.com',
        // Optional product logo
        // logo: 'https://mailgen.js/img/logo.png'
    },
});

const userVerificationEmailMailContent = ({ name, verificationLink }) => {
    try {
        const email = {
            body: {
                name,
                intro: "Welcome to project camp! We're very excited to have you on board.",
                action: {
                    instructions:
                        'To verify your account please click on the link below:',
                    button: {
                        color: '#22BC66', // Optional action button color
                        text: 'Confirm your account',
                        link: verificationLink,
                    },
                },
                outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
            },
        };

        const html = mailGenerator.generate(email);
        const plainText = mailGenerator.generatePlaintext(email);

        return { html, plainText };
    } catch (error) {
        console.log(error, 'error generating mail template');
        throw error;
    }
};

export { userVerificationEmailMailContent };
