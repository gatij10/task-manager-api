const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: "gatij.taranekar@gmail.com",
        subject: 'Thanks for joining in',
        test: `Welcome to the App, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'gatij.taranekar@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. T hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

